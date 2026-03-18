import React from 'react';
import { Star, Quote } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    rating: 5,
    text: 'Absolutely the best Pan-Asian experience in Bhopal! The 3D ambiance and pure veg authentic taste blew my mind.',
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    rating: 5,
    text: 'The ramen bowl is out of this world. Every slurp is packed with flavor, and the glassmorphic aesthetic of the place is simply stunning.',
  },
  {
    id: 3,
    name: 'Priya Desai',
    rating: 5,
    text: 'A hidden gem. The momos were perfect, and the premium vibe makes it the ideal spot for family dinners. Highly recommended!',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="relative mt-20 md:mt-32 py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 blur-3xl -z-10 rounded-[2rem] md:rounded-[3rem]"></div>
      
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          What Our <span className="text-secondary neon-text-glow font-medium">Guests Say</span>
        </h2>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full neon-border-glow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {reviews.map((review) => (
          <Tilt 
             key={review.id}
             className="glass-interactive p-6 md:p-8 rounded-[2rem] md:rounded-3xl relative group cursor-pointer h-full flex flex-col justify-between"
             tiltMaxAngleX={10}
             tiltMaxAngleY={10}
             perspective={1000}
             scale={1.02}
             transitionSpeed={1500}
             gyroscope={true}
          >
            <div className="absolute top-6 right-6 text-white/10 group-hover:text-primary/20 transition-colors duration-500">
              <Quote size={48} />
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-yellow-400 group-hover:text-primary transition-colors duration-300" strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-gray-300 font-light leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center font-bold text-xl neon-border-glow shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-medium text-white">{review.name}</h4>
                <span className="text-xs text-secondary/80 uppercase tracking-wider">Verified Guest</span>
              </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/0 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 -z-10"></div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
