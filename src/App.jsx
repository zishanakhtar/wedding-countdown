import { useState, useRef } from "react";
import { Analytics } from "@vercel/analytics/react"
import VenueSection from './Components/Venue';
import MusicPlayer from './Components/MusicPlayer';
import Ornament from './assets/ornament.png'
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";
import mySound from '../src/assets/song.mp3'
// Import your new Wedding component here
import ScrollTopWedding from "./Components/ScrollTopWedding";
import WeddingProgram from "./Components/WeddingProgram";
import ScrollToWeddingProgram from "./Components/ScrollToWeddingProgram";
import ScrollToVenue from "./Components/ScrollToVenue";

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
          <div className="fixed inset-0 z-0 w-full min-h-screen overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105 animate-fadeIn"
              style={{ 
                backgroundImage: `url('/cover_2.png')`,
                height: '100dvh' 
              }}
            />
            <div className="absolute inset-0 z-10 bg-black/20" />
          </div>

          <div className="text-center animate-fadeIn px-4">
            {/* Dynamically adjusts heading if they have access to the secret wedding section */}
            <h2 className="font-cook text-4xl md:text-6xl mb-8 opacity-90 text-shadow shadow-black">
              Dawat-e-Nikah
            </h2>
            <button 
              onClick={handleOpen}
              className="group relative px-12 py-4 border-4 border-white/60 md:border-white/20 rounded-full font-amiri tracking-[0.2em] uppercase text-sm hover:border-white/60 transition-all duration-500"
            >
              <span className="relative z-10">Open Invitation</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full opacity-5" />
            </button>
          </div>
        </div>
      ) : (
        <>
          <ErrorBoundary>
            <MusicPlayer masterAudioRef={audioRef} />
          </ErrorBoundary>

          {/* Floating Scroll Buttons */}
          <ScrollToWeddingProgram />
          <ScrollToVenue/>
          <ScrollTopWedding/>
          
          {/* 1. The Container: Must be 'relative' */}
          <div className="relative min-h-screen w-full overflow-hidden animate-revealContent">

            {/* 2. The Background Image Layer */}
            <div className="fixed inset-0 z-0 w-full min-h-screen overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670')`,
                  height: '100dvh' 
                }}
              />
            </div>

            {/* 3. The Overlay Layer */}
            <div className="absolute inset-0 z-10 bg-black/10" />

            {/* 4. Background Mandala Ornament */}
            <div className='flex items-center justify-center invert'>
              <img 
                src={Ornament} 
                alt="Mandala Decor"
                className="absolute w-[400px] md:w-[600px] opacity-20 animate-spin-slow pointer-events-none"
              />
            </div>

            {/* 5. The Content Layer */}
            <div className="relative z-20 flex min-h-screen flex-col items-center justify-center text-center -top-4 md:top-0">
              <Hero />
              <WeddingProgram/>
              <VenueSection/>

              {/* Conditionally displays the Wedding section right above the Walima venue info */}
              {/* {isWeddingGuest && <Wedding />}
              {isWeddingGuest && <VenueBaraat />} */}
            </div>
            <Analytics/>
          </div>
        </> 
      )}
    </main>
  );
};

export default App;