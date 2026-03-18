import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="relative mt-16 md:mt-24 py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 blur-3xl -z-10 rounded-[2rem] md:rounded-[3rem]"></div>
      
      <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Discover <span className="text-primary neon-text-glow font-medium">Lil' China</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        <p className="text-lg text-gray-300 leading-relaxed font-light">
          Step into a world of exquisite flavors where tradition meets modern culinary artistry. 
          As a pure veg Pan-Asian dining destination in the heart of Bhopal, we craft unforgettable 
          experiences using authentic ingredients, passionate chefs, and a deeply atmospheric, 
          premium dining environment. Elevate your senses with every bite.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
