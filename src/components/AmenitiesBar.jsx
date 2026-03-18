import React from 'react';
import { Wifi, Car, Wind, Sparkles } from 'lucide-react';

const AmenitiesBar = () => {
  const amenities = [
    { icon: <Wifi size={24} />, label: "Free Wi-Fi" },
    { icon: <Car size={24} />, label: "Valet Parking" },
    { icon: <Wind size={24} />, label: "Air Conditioned" },
    { icon: <Sparkles size={24} />, label: "Premium Dining" },
  ];

  return (
    <section className="glass-panel rounded-3xl p-6 md:p-8 mt-8 md:mt-12 bg-white/5">
      <h3 className="text-xl font-medium mb-6 md:mb-8 text-center text-gray-300">Our Amenities</h3>
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 md:gap-8 max-w-4xl mx-auto cursor-default">
        {amenities.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors">
            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:neon-border-glow transition-all">
              {item.icon}
            </div>
            <span className="text-sm tracking-wide">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesBar;
