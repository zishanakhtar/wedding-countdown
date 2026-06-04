
export default function Wedding() {
  // Replace these with your actual wedding details
//   const weddingDetails = {
//     date: "Friday, 03 July, 2026", // Example date
//     time: "4:00 PM onwards",
//     venueName: "Sardar Garden",
//     venueAddress: "Ansar Nagar, Nawada, Bihar",
//     mapsLink: "https://maps.google.com" // Paste your actual Google Maps share link here
//   };

  return (
    <section className="w-[98%] mx-auto px-2 py-2 text-center animate-fade-in">
      {/* Decorative Top Accent */}
      <div className="flex items-center justify-center gap-3 mb-8 mt-8">
        <div className="h-[1px] w-12 bg-amber-300/60" />
        <span className="text-amber-600 text-xl font-serif">✨</span>
        <div className="h-[1px] w-12 bg-amber-300/60" />
      </div>

      {/* Heading */}
      {/* <h2 className="font-cook text-3xl md:text-5xl text-slate-200 tracking-wide">
        You're also invited to attend the Baraat on 03 July, 2026 from our residence to
      </h2> */}

      {/* Details Card */}
      {/* <div className="bg-white/60 backdrop-blur-sm border border-stone-200/80 rounded-2xl p-6 md:p-10 shadow-sm max-w-xl mx-auto space-y-6"> */}
        
        {/* Date & Time */}
        {/* <div className="space-y-1">
          <p className="font-sans text-xs uppercase tracking-wider text-stone-400 font-semibold">
            Date & Time
          </p>
          <p className="font-serif text-lg text-stone-800 font-medium">
            {weddingDetails.date}
          </p>
          <p className="font-sans text-sm text-stone-600">
            {weddingDetails.time}
          </p>
        </div> */}

        {/* Divider line inside card */}
        {/* <div className="w-16 h-[1px] bg-stone-200 mx-auto" /> */}

        {/* Venue details */}
        {/* <div className="space-y-2">
          <p className="font-sans text-xs uppercase tracking-wider text-stone-400 font-semibold">
            Venue
          </p>
          <p className="font-serif text-xl text-stone-800 font-medium">
            {weddingDetails.venueName}
          </p>
          <p className="font-sans text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
            {weddingDetails.venueAddress}
          </p>
        </div> */}

      {/* </div> */}
      {/* Decorative Bottom Divider between Wedding and Reception sections */}
      {/* <div className="max-w-xs mx-auto border-t border-stone-200 my-16" /> */}
    </section>
  );
}