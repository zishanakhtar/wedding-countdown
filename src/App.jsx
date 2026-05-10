import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Analytics } from "@vercel/analytics/react"
import VenueSection from './assets/Venue';

const App = () => {
  // --- Standard Countdown Logic (Unchanged) ---
  const targetDate = "2026-07-04T23:59:59"; 
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // The Confetti Logic
  const fireConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Fling some confetti from the left and right edges
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  useEffect(() => {
    // 1. Check if the time is ALREADY up on load
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      fireConfetti();
    }

    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);

      // 2. Check if the time JUST finished while the user was watching
      if (Object.keys(updatedTime).length === 0) {
        fireConfetti();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.entries(timeLeft).map(([unit, value]) => (
    <div key={unit} className="flex flex-col items-center justify-center p-2 min-w-[70px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <span className="text-3xl md:text-5xl font-light text-white">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] tracking-widest text-white/70 uppercase mt-1">
        {unit}
      </span>
    </div>
  ));
  // ------------------------------------------

  return (
    // 1. The Container: Must be 'relative'
    <div className="relative min-h-screen w-full overflow-hidden">

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
          src="/ornament.png" // Place your transparent mandala PNG in the /public folder
          alt="Mandala Decor"
          className="absolute w-[400px] md:w-[600px] opacity-20 animate-spin-slow pointer-events-none"
        />
      </div>
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <div className="pt-4 pb-16 text-center">
          <h2 
            dir="rtl" 
            className="font-amiri text-white text-sm md:text-2xl lg:text-4xl tracking-normal opacity-90 drop-shadow-sm"
          >
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </h2>
      </div>
        <div className="max-w-2xl">
          <h2 className="text-sm font-medium tracking-[0.3em] text-white uppercase mb-4">
            You're invited to the reception of
          </h2>
          <h1 className="font-cook text-8xl text-white">
            Zishan & Shireen
          </h1>
          
          <div className="flex justify-center gap-2 md:gap-4">
            {timerComponents.length ? timerComponents : (
              <span className="text-2xl font-light text-white">The Celebration Has Begun!</span>
            )}
          </div>

          <p className="mt-6 mb-4 text-white/90 font-light tracking-wide italic">
            July 05, 2026 • Patna
          </p>
          <p className="mb-12 font-cook text-2xl text-white">Your presence will make our day even more memorable!</p>
        </div>
        <VenueSection/>
        <div className='text-white'>
            &#9829; Akhtar Reviews
        </div>
      </div>
            <Analytics/>
    </div>
  );
};

export default App;