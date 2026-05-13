import { useState, useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
import VenueSection from './Components/Venue';
import MusicPlayer from './Components/MusicPlayer';
import Ornament from './assets/ornament.png'
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";
import mySound from '../src/assets/song.mp3'


const App = () => {

  const [showInvitation, setShowInvitation] = useState(false);
  const audioRef = useRef(new Audio(mySound));

  const handleOpen = () => {
    const audio = audioRef.current;
    audio.volume = 0; 
    audio.loop = true;

    // Play the audio immediately in the same click event
    audio.play().catch(err => console.log("Playback failed:", err));
    
    // Fade-in Logic
  const fadeDuration = 5000; // 5 seconds
  const intervalTime = 50;   // Update every 50ms
  const volumeStep = 1 / (fadeDuration / intervalTime);

  const fadeInInterval = setInterval(() => {
    if (audio.volume < 1) {
      // Use Math.min to ensure we don't exceed 1.0 (which throws an error)
      audio.volume = Math.min(audio.volume + volumeStep, 1);
    } else {
      clearInterval(fadeInInterval);
    }
  }, intervalTime);

    // Show the content
    setShowInvitation(true);
  };

  const scrollToVenue = () => {
  const element = document.getElementById('venue-section');
    if (element) {
    // Calculate exact position
    const topOffset = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });

    // CRITICAL: This "unlocks" the scroll context once the animation finishes
    // It ensures the browser doesn't try to force the focus on the bottom element
    setTimeout(() => {
      element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
      element.blur();
    }, 1000); 
  }
  };


  // scroll to bottom button visibility
  const [isVisible, setIsVisible] = useState(true);

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
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-gold/30">
      {!showInvitation ? (
        /* --- LANDING SCREEN --- */
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000">
          <div className="text-center animate-fadeIn px-4">
            <h2 className="font-cook text-4xl md:text-6xl mb-8 opacity-80">
              Dawat - e - Walima
            </h2>
            <button 
              onClick={handleOpen}
              className="group relative px-12 py-4 border border-white/20 rounded-full font-amiri tracking-[0.2em] uppercase text-sm hover:border-white/60 transition-all duration-500"
            >
              <span className="relative z-10">Open Invitation</span>
              {/* Subtle hover fill effect */}
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full opacity-5" />
            </button>
          </div>
        </div>
      ) : (
    <>
    <ErrorBoundary>
        <MusicPlayer masterAudioRef={audioRef} />
    </ErrorBoundary>

    {/* Floating Scroll Button */}
    <button 
      onClick={scrollToVenue}
      className={`fixed bottom-10 right-0 left-0 z-[60] flex flex-col items-center gap-1 group transition-all duration-500 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Venue
      </span>
      <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
        {/* Simple Down Arrow Icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </button>
    
     {/* 1. The Container: Must be 'relative' */}
    <div className="relative min-h-screen w-full overflow-hidden animate-revealContent">

      {/* 2. The Background Image Layer */}
      {/* Utility Classes Explanations:
          - absolute inset-0: Fills the entire container
          - bg-cover: 'Fits' the screen by scaling to cover everything
          - bg-center: Focuses on the center of the image
          - scale-105: CRITICAL! Slightly zooms the image so the blur (blur-sm) doesn't create white edges at the boundary.
      */}
      <div 
        /* Changed inset-0 to fixed and min-h-screen to ensure it locks to the viewport */
        className="fixed inset-0 z-0 w-full min-h-screen overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670')`,
            /* Ensures the image doesn't 'jump' when the mobile browser UI hides/shows */
            height: '100dvh' 
          }}
        />
      </div>

      {/* 3. The Overlay Layer (Optional but helps contrast) */}
      <div className="absolute inset-0 z-10 bg-black/30" />

      {/* 4. The Content Layer */}
      {/* Must be z-10 or higher to sit above the image and overlay.
          Must be relative to respond to the z-index.
      */}
      <div className='flex items-center justify-center invert'>
        <img 
          src={Ornament} 
          alt="Mandala Decor"
          className="absolute w-[400px] md:w-[600px] opacity-20 animate-spin-slow pointer-events-none"
        />
      </div>

      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center text-center">
      <Hero />
      <VenueSection/>
      {/* <div className='text-red-400'>
          &#9829; &#9829; &#9829;
      </div> */}
      </div>
      <Analytics/>
    </div>
    </> )}

    </main>
  );
};

export default App;