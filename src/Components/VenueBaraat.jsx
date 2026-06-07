// src/VenueSection.jsx
// import React from 'react';
import FloralBottom from '../assets/floral-bottom.png';

const VenueBaraat = () => {
  const venueAddress = "Sardar Garden, Ansar Nagar, Nawada";
  
  // Update this 'pb' string with the one from Google Maps 'Embed' code
  const mapIframeSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.664892462036!2d85.54270877598913!3d24.875292377919646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2ff8b24a769bf%3A0x58f0364d84e56e45!2sHotel%20Sardar%20Garden!5e0!3m2!1sen!2sin!4v1780599991924!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`;

  return (
    <section id="venue-wedding" className="w-[98%] bg-black/40 backdrop-blur-lg pt-6 pb-8 px-6 border-t border-white/10 rounded-xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-cook text-2xl md:text-4xl text-white mb-4">You're also invited to attend the Baraat &<br/>Witness our 'Qubool Hai' moment on<br/>Friday, 03 July, 2026 as we journey to</h2>
        <p className="text-white/90 tracking-[0.2em] mb-4 uppercase text-xs md:text-sm">
          {venueAddress}
        </p>

        <div className="w-full h-[400px] grayscale-[20%] invert-[90%] hue-rotate-[180deg] rounded-2xl overflow-hidden shadow-2xl border-2 border-black mb-8">
          <iframe
            title="Venue Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            src={mapIframeSrc}
          ></iframe>
        </div>

        <a 
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-white text-black font-clean text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-gray-200 transition-all duration-300 shadow-xl"
        >
          Open in Google Maps App
        </a>
      </div>
      <div className='mt-16 flex items-center justify-center'>
        <img 
          src={FloralBottom} 
          alt="Floral Bottom Decor"
          className="absolute w-[400px] md:w-[600px] opacity-60"
        />
      </div>
      {/* <div className="flex items-center justify-center gap-3 m-3">
        <div className="h-[1px] w-12 bg-amber-300/60" />
        <span className="text-amber-600 text-xl font-serif">✨</span>
        <div className="h-[1px] w-12 bg-amber-300/60" />
      </div> */}
    </section>
  );
};

export default VenueBaraat; // Don't forget this!