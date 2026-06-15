import { useState, useEffect } from 'react';

function ScrollToVenue() {
  const [isVisible, setIsVisible] = useState(false);
  // FLASH GUARD: Keeps the element strictly inert until the first real scroll match happens
  const [hasTriggered, setHasTriggered] = useState(false);

  const scrollToVenue = () => {
    const element = document.getElementById('venue-section');
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });

      setTimeout(() => {
        element.setAttribute('tabindex', '-1');
        element.focus({ preventScroll: true });
        element.blur();
      }, 1000); 
    }
  };

  useEffect(() => {
    // CHANGED: Target the programme-section for visibility tracking
    const targetElement = document.getElementById('programme-section');
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Permanently unlock animations now that the element has officially crossed the threshold
          setHasTriggered(true);
        }
      },
      { threshold: 0.1 } // Fires when 10% of the programme-section is visible
    );

    observer.observe(targetElement);

    return () => {
      if (targetElement) observer.unobserve(targetElement);
    };
  }, []);

  return (
    <div>
      <button 
        onClick={scrollToVenue}
        className={`fixed bottom-10 right-0 left-0 z-[60] flex flex-col items-center gap-1 group transition-all duration-500 ${
          isVisible && hasTriggered
            ? "opacity-100 translate-y-0 animate-fadeIn pointer-events-auto" 
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
          Wedding Venue
        </span>
        <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default ScrollToVenue;