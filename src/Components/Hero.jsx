import Countdown from './Countdown';
import Floral from '../assets/floral.png';

function Hero() {
  return (
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <div className="pt-4 pb-16 text-center">
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
        <h1 className="font-cook text-8xl text-white">
          Zishan & Shireen
        </h1>
        <Countdown />
        <p className="mt-6 mb-4 text-white/90 font-light tracking-wide italic">
          July 05, 2026 • Patna
        </p>
        <p className="mb-12 font-cook text-2xl text-white">Your presence will make our day even more memorable!</p>
        <div className='flex items-center justify-center h-6'>
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
