import React from 'react';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col lg:flex-row items-center justify-between min-h-[60vh] gap-8 lg:gap-12 pt-4 lg:pt-0">
      {/* Left Content */}
      <div className="flex-1 space-y-8 animate-fade-in-up">
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white neon-text-glow">
            Lil' China
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-light">
            Pure Veg Pan-Asian Experience
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full bg-black text-white font-medium border border-primary/50 neon-border-glow hover:bg-primary/20 transition-all duration-300"
          >
            Contact Us
          </button>
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full glass-interactive text-white font-medium hover:text-white/90"
          >
            View Menu
          </button>
        </div>
      </div>

      {/* Right Content - 3D Image with Glass Panel */}
      <Tilt 
        className="flex-1 relative w-full h-[350px] lg:h-[500px] flex justify-center items-center cursor-pointer mt-8 lg:mt-0"
        tiltMaxAngleX={10} 
        tiltMaxAngleY={10} 
        perspective={1000} 
        transitionSpeed={1500} 
        scale={1.05}
        gyroscope={true}
      >
        {/* Floating Background Glass Panel */}
        <div className="absolute w-[80%] h-[90%] glass-panel rounded-3xl -z-10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md"></div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-10 right-10 w-4 h-12 border-l border-t border-primary/30 rounded-tl-lg"></div>
        <div className="absolute bottom-10 left-10 w-12 h-4 border-r border-b border-primary/30 rounded-br-lg"></div>

        {/* Floating Image */}
        <img 
          src="/hero_ramen.png" 
          alt="Steaming Ramen Bowl" 
          className="w-full max-w-[260px] md:max-w-md object-contain animate-float drop-shadow-2xl"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
      </Tilt>
    </section>
  );
};

export default Hero;
