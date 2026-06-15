import FloralBottom from '../assets/floral-bottom.png';

const WeddingProgram = () => {
  const schedule = [
    {
      date: "On 1st July 2026(Wednesday)",
      events: [
        { name: "Rasm-e-Haldi", time: "7:00 P.M" }
      ]
    },
    {
      date: "On 3rd July 2026(Friday)",
      events: [
        { name: "Arrival Of Barat", time: "7:00 P.M" },
        { name: "Dinner", time: "8:00 P.M" },
        { name: "Nikah", time: "10 P.M" }
      ]
    },
    {
      date: "On 4th July 2026(Saturday)",
      events: [
        { name: "Rokhsati", time: "8 A.M" }
      ]
    }
  ];

  return (
    <section id="programme-section" className="w-[98%] bg-black/40 backdrop-blur-lg pt-10 pb-16 mb-14 px-6 border-t border-white/10 rounded-xl relative">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Programme Header utilizing your 'font-cook' setup */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="flex flex-col space-y-[3px] flex-1 max-w-[40px] md:max-w-[80px] opacity-40">
            <div className="h-[1px] bg-white"></div>
            <div className="h-[2px] bg-white"></div>
            <div className="h-[1px] bg-white"></div>
          </div>

          <h2 className="font-cook text-5xl md:text-7xl text-white tracking-wide">
            Programme
          </h2>

          <div className="flex flex-col space-y-[3px] flex-1 max-w-[40px] md:max-w-[80px] opacity-40">
            <div className="h-[1px] bg-white"></div>
            <div className="h-[2px] bg-white"></div>
            <div className="h-[1px] bg-white"></div>
          </div>
        </div>

        {/* Schedule Grid Box */}
        <div className="max-w-md mx-auto space-y-10 my-12 text-left">
          {schedule.map((day, idx) => (
            <div key={idx} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
              {/* Date String matching Screenshot 2026-06-15 at 9.57.03 PM.png verbatim */}
              <h3 className="text-center text-white/90 tracking-[0.15em] mb-5 uppercase text-xs md:text-sm font-semibold">
                {day.date}
              </h3>

              {/* Dotted Alignment Rows */}
              <div className="space-y-4">
                {day.events.map((event, eIdx) => (
                  <div key={eIdx} className="flex justify-between items-baseline text-white/90">
                    <span className="text-base md:text-lg tracking-wide font-light pr-1 whitespace-nowrap">
                      {event.name} :
                    </span>
                    
                    {/* Perfect alignment dotted wire */}
                    <span className="flex-1 border-b border-dotted border-white/20 mx-2 relative -bottom-[2px]"></span>
                    
                    <span className="text-base md:text-lg tracking-wide pl-1 whitespace-nowrap font-mono text-white/80">
                      {event.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Identical bottom asset placement mirroring your Venue section structure */}
      <div className='mt-16 flex items-center justify-center'>
        <img 
          src={FloralBottom} 
          alt="Floral Bottom Decor"
          className="absolute w-[400px] md:w-[600px] opacity-60"
        />
      </div>
    </section>
  );
};

export default WeddingProgram;