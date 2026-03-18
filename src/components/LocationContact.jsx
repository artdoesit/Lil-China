import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const LocationContact = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="contact" className="relative mt-20 md:mt-32 py-12 md:py-16">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Visit <span className="text-primary neon-text-glow font-medium">Us</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full neon-border-glow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-auto">
        {/* Contact Details */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-white">Get in Touch</h3>
            <p className="text-gray-400 font-light">
              Experience the finest Pan-Asian pure vegetarian cuisine. Reserve your table or order online today.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl glass-interactive flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} />
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-white font-medium mb-1">Our Location</h4>
                <p className="text-gray-400 font-light">123 Culinary Hub, MP Nagar Zone 1<br/>Bhopal, Madhya Pradesh 462011</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl glass-interactive flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                <Clock size={24} />
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-white font-medium mb-1">Opening Hours</h4>
                <p className="text-gray-400 font-light">Monday - Sunday<br/>11:00 AM - 11:30 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl glass-interactive flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} />
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-white font-medium mb-1">Reservations</h4>
                <p className="text-gray-400 font-light">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex gap-4">
            <button className="flex-1 py-3 px-6 rounded-full bg-primary/20 border border-primary/50 text-white font-medium hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center gap-2 neon-border-glow">
              <Phone size={18} /> Call Now
            </button>
            <button className="flex-1 py-3 px-6 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-white font-medium hover:bg-[#25D366]/30 transition-colors duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)]">
              <MessageCircle size={18} /> WhatsApp
            </button>
          </div>
        </div>

        {/* Map Visuals - Flip Card */}
        <div 
          className="relative h-full min-h-[400px] rounded-[2rem] cursor-pointer group"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: '1000px' }}
        >
          <div 
            className={`w-full h-full relative transition-transform duration-700`}
            style={{ 
              transformStyle: 'preserve-3d', 
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
            }}
          >
            {/* Front Side: Animated Lil China */}
            <div 
              className="absolute inset-0 glass-interactive rounded-[2rem] flex flex-col items-center justify-center overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5"></div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white neon-text-glow animate-pulse">
                Lil' China
              </h1>
              <div className="w-12 h-1 bg-primary mt-6 mb-4 rounded-full neon-border-glow"></div>
              <p className="text-gray-400 tracking-[0.2em] uppercase text-sm font-light flex items-center gap-2 transition-colors group-hover:text-primary">
                <MapPin size={16} /> Click for Map
              </p>
              
              {/* Decorative side blur */}
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/20 rounded-full blur-[50px] pointer-events-none"></div>
            </div>

            {/* Back Side: The Map */}
            <div 
              className="absolute inset-0 glass-interactive rounded-[2rem] overflow-hidden"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <MapPin size={48} className="text-primary mb-4 animate-bounce" />
                <span className="text-white font-medium text-lg tracking-wider">Get Directions</span>
              </div>
              {/* Faux Map Background using radial gradients and grid to simulate a digital map */}
              <div className="absolute inset-0 bg-[#0f1115] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full neon-border-glow shadow-[0_0_30px_rgba(var(--color-primary),1)] flex items-center justify-center">
                 <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
