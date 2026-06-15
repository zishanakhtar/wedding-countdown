import {useState, useEffect} from 'react';
import confetti from 'canvas-confetti';

function Countdown() {

     // --- Standard Countdown Logic ---
      const targetDate = "2026-07-03T20:00:00"; 
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
    
      // used in confetti and countdown
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
    
      // for confetti
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
    
      //
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

  return (
    <div>
      <div className="flex justify-center gap-2 md:gap-4">
        {timerComponents.length ? timerComponents : (
          <span className="text-2xl font-light text-white">The Celebration Has Begun!</span>
        )}
      </div>
      {timerComponents.length > 0 && (
        <p className="font-cook mt-2 text-center text-white text-xl">
          Until we celebrate our new beginning, Insha Allah
        </p>
      )}
    </div>
  )
}

export default Countdown
