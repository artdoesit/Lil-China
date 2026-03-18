import React from 'react';
import { Star } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const dishes = [
  { id: 1, name: 'Ramen Bowl', image: '/card_ramen.png' },
  { id: 2, name: 'Momos', image: '/card_momos.png' },
  { id: 3, name: 'Teriyaki Dishes', image: '/card_teriyaki.png' },
];

const FeaturedDishes = () => {
  return (
    <section id="menu" className="relative mt-16 md:mt-24">
      <h2 className="text-2xl md:text-3xl font-medium mb-8 md:mb-12">Featured dishes</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
        {dishes.map((dish) => (
          <Tilt 
            key={dish.id} 
            className="glass-interactive rounded-3xl p-6 flex flex-col items-center justify-between min-h-[300px] relative group cursor-pointer"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.02}
            gyroscope={true}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#ffffff"
            glarePosition="all"
          >
            <div className="w-48 h-48 -mt-16 mb-4 flex-shrink-0 relative transition-transform duration-500 transform-gpu group-hover:scale-110">
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-contain drop-shadow-2xl pointer-events-none" 
              />
            </div>
            <h3 className="text-lg font-medium self-start">{dish.name}</h3>
            
            {/* Soft subtle glow under image on hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/0 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 -z-10"></div>
          </Tilt>
        ))}
      </div>
      
      {/* Carousel dots indicator */}
      <div className="flex justify-center mt-12 gap-3">
        <div className="w-8 h-1 bg-primary rounded-full neon-border-glow"></div>
        <div className="w-8 h-1 bg-white/20 rounded-full"></div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
