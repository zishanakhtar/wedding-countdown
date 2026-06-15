import Countdown from './Countdown';
import Floral from '../assets/floral.png';

function Hero() {
  return (
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center text-center">
        <div className="pb-12 text-center">
          <h2 
            dir="rtl" 
            className="font-amiri text-white text-4xl tracking-normal opacity-90 drop-shadow-sm"
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h2>
      </div>
      <div className="max-w-2xl">
        <h2 className="text-md font-medium tracking-[0.1em] text-white uppercase mb-4 px-2">
          We request the pleasure of your company & blessings to celebrate the wedding of
        </h2>
        <div className="relative top-[15%] left-0 w-full flex items-center justify-center pointer-events-none z-10">
          <svg 
            className="w-[80vw] h-auto overflow-visible" 
            viewBox="0 0 3000 1000" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-cook text-[38rem] md:text-[44rem] fill-none stroke-white stroke-[4] animate-handwriting"
              style={{ 
                filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.5))'
              }}
            >
              Shireen & Zishan
            </text>
          </svg>
        </div>
        <Countdown />
        <p className="mt-6 mb-4 text-white/90 font-light tracking-wide italic">
          Friday • 03 July, 2026
        </p>
        <p className="mb-12 font-cook text-2xl text-white">Your presence will make our day even more memorable!</p>
        <div className='flex items-center justify-center'>
        <img 
          src={Floral} 
          alt="Floral Decor"
          className="absolute w-[400px] md:w-[600px] opacity-40"
        />
      </div>
      </div>
    </div>
  )
}

export default Hero
