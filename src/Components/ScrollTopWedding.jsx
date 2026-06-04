import { useState, useEffect } from 'react';

function ScrollTopWedding() {

    // scroll to top
  const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // CRITICAL: Unlocks scroll context and resets keyboard focus to the top of the document
  setTimeout(() => {
    const mainContent = document.querySelector('main') || document.body;
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus({ preventScroll: true });
      // Keep it focused or blur depending on whether we want a visible focus ring on the body
      mainContent.blur(); 
    }
  }, 1000); 
};

// Scroll to top button visibility
const [isVisible, setIsVisible] = useState(false); // Default to false since we start at the top

useEffect(() => {
  const handleScroll = () => {
    // Distance from top of the page
    const scrollTop = window.scrollY;
    
    // Inverted Logic: Show the button only after scrolling down 1400px from the top
    if (scrollTop > 1400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div>
      <button 
        onClick={ScrollToTop}
        /* 
          REMOVED 'animate-fadeIn' from the main string.
          CONVERTED the conditional rendering to smoothly manage opacity, translation, and pointer events altogether.
        */
        className={`fixed bottom-10 right-0 left-0 z-[60] flex flex-col items-center gap-1 group transition-all duration-500 ease-in-out ${
          isVisible 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
          {/* Double Chevron Up Arrow Icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
          </svg>
        </div>
      </button>
    </div>
  )
}

export default ScrollTopWedding
