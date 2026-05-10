import { useState, useEffect } from 'react';
import shehnaiIcon from '../assets/shehnai.png';

const MusicPlayer = ({masterAudioRef}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = masterAudioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.error("Playback interaction failed:", err);
    }
  };

  // Sync the icon state with the actual audio status
  useEffect(() => {
    if (masterAudioRef.current) {
      setIsPlaying(!masterAudioRef.current.paused);
    }
  }, [masterAudioRef]);

  return (
        <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-center">
      
      {/* The Wave Container */}
      <div className={`flex items-end gap-1 h-10 mb-2 transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-[4px] bg-white rounded-full animate-wave-1"></div>
        <div className="w-[4px] bg-white rounded-full animate-wave-2"></div>
        <div className="w-[4px] bg-white rounded-full animate-wave-3"></div>
        <div className="w-[4px] bg-white rounded-full animate-wave-2"></div>
        <div className="w-[4px] bg-white rounded-full animate-wave-1"></div>
      </div>

      {/* Your Shehnai Button */}
      <button 
        onClick={toggleAudio} 
        className="hover:scale-110 transition-transform active:scale-95 cursor-pointer"
      >
        <img 
          src={shehnaiIcon} 
          className={`w-16 h-16 object-contain transition-all duration-700 ${
            isPlaying ? 'grayscale-0' : 'grayscale brightness-50 opacity-40'
          }`}
          alt="Music Toggle"
        />
      </button>
    </div>
  );
};

export default MusicPlayer;