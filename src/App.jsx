import { useState, useRef } from "react";
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
  const fadeDuration = 2000; // 2 seconds
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

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-gold/30">
      {!showInvitation ? (
        /* --- LANDING SCREEN --- */
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000">
          <div className="text-center animate-fadeIn px-4">
            <h2 className="font-amiri text-xl md:text-2xl mb-8 opacity-80">
              Reception Invitation
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
    // 1. The Container: Must be 'relative'
    <>
    <ErrorBoundary>
        <MusicPlayer masterAudioRef={audioRef} />
    </ErrorBoundary>
    
    <div className="relative min-h-screen w-full overflow-hidden animate-revealContent">

      {/* 2. The Background Image Layer */}
      {/* Utility Classes Explanations:
          - absolute inset-0: Fills the entire container
          - bg-cover: 'Fits' the screen by scaling to cover everything
          - bg-center: Focuses on the center of the image
          - scale-105: CRITICAL! Slightly zooms the image so the blur (blur-sm) doesn't create white edges at the boundary.
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670')` }}
      />

      {/* 3. The Overlay Layer (Optional but helps contrast) */}
      <div className="absolute inset-0 z-10 bg-black/30" />

      {/* 4. The Content Layer */}
      {/* Must be z-10 or higher to sit above the image and overlay.
          Must be relative to respond to the z-index.
      */}
      <div className='flex items-center justify-center invert'>
        <img 
          src={Ornament} // Place your transparent mandala PNG in the /public folder
          alt="Mandala Decor"
          className="absolute w-[400px] md:w-[600px] opacity-20 animate-spin-slow pointer-events-none"
        />
      </div>
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <Hero />
      
      <VenueSection/>
      <div className='text-red-400'>
          &#9829; &#9829; &#9829;
      </div>
      </div>
      <Analytics/>
    </div>
    </> )}

    </main>
  );
};

export default App;