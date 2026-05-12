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
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </h2>
      </div>
      <div className="max-w-2xl">
        <h2 className="text-sm font-medium tracking-[0.1em] text-white uppercase mb-4">
          You're invited to the reception of
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
              className="font-cook text-[38rem] md:text-[44rem] fill-none stroke-white stroke-[8] animate-handwriting"
              style={{ 
                filter: 'drop-shadow(0 0 100px rgba(255,255,255,0.7))'
              }}
            >
              Zishan & Shireen
            </text>
          </svg>
        </div>
        <Countdown />
        <p className="mt-6 mb-4 text-white/90 font-light tracking-wide italic">
          July 05, 2026 • Patna
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
