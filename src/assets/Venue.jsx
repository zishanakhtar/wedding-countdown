// src/VenueSection.jsx
import React from 'react';

const VenueSection = () => {
  const venueAddress = "Onda Marriage Hall, Patna";
  
  // Update this 'pb' string with the one from Google Maps 'Embed' code
  const mapIframeSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7225622027186!2d85.18885927600948!3d25.614133777445037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f336687ae5b%3A0xc597f695b3c40abb!2sOnda%20marriage%20hall!5e0!3m2!1sen!2sin!4v1778404524561!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`;

  return (
    <section className="w-full bg-black/40 backdrop-blur-lg py-20 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-cookie text-5xl md:text-6xl text-white mb-6">The Venue</h2>
        <p className="font-clean text-white/70 tracking-[0.3em] mb-10 uppercase text-xs md:text-sm">
          {venueAddress}
        </p>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 mb-10">
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
    </section>
  );
};

export default VenueSection; // Don't forget this!