import { useState, useEffect } from 'react';

function ScrollVenue() {

    // scroll to venue
  const scrollToVenue = () => {
  const element = document.getElementById('programme-section');
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center' // Automatically centers the component perfectly on screen
    });

    setTimeout(() => {
      element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
      element.blur();
    }, 1000); 
  }
};


  // scroll to bottom button visibility
  const [isVisible, setIsVisible] = useState(true);

  // for scroll to venue
  useEffect(() => {
    const handleScroll = () => {
      // Distance from top of the page
      const scrollTop = window.scrollY;
      // Total height of the page minus the visible screen height
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Fade out when the user has scrolled 60% of the way down
      if (scrollTop > scrollHeight * 0.6) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div>
      <button 
      onClick={scrollToVenue}
      className={`fixed bottom-10 right-0 left-0 z-[60] flex flex-col items-center gap-1 animate-fadeIn group transition-all duration-500 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Programme
      </span>
      <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
        {/* Simple Down Arrow Icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </button>
    </div>
  )
}

export default ScrollVenue
