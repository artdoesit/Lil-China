import React from 'react';
import { Utensils, Bike, ShoppingBag } from 'lucide-react';

const InfoBar = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between mt-20 gap-8">
      {/* Location and Price */}
      <div className="flex items-center gap-12 text-gray-300">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Location:</p>
          <p className="text-xl font-medium text-white">Bhopal</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Price Range:</p>
          <p className="text-xl font-medium text-white">₹200–400</p>
        </div>
      </div>

      {/* Services */}
      <div className="flex items-center gap-4">
        {/* Active Item */}
        <div className="glass-panel border-primary/50 text-primary flex flex-col items-center justify-center w-24 h-24 rounded-2xl neon-border-glow cursor-pointer transition-transform hover:scale-105">
          <Utensils size={28} className="mb-2" />
          <span className="text-sm font-medium">Dine-in</span>
        </div>
        
        {/* Inactive Items */}
        <div className="glass-panel flex flex-col items-center justify-center w-24 h-24 rounded-2xl text-gray-400 cursor-pointer hover:text-white hover:border-white/20 transition-all hover:scale-105">
          <Bike size={28} className="mb-2" />
          <span className="text-sm font-medium">Delivery</span>
        </div>
        
        <div className="glass-panel flex flex-col items-center justify-center w-24 h-24 rounded-2xl text-gray-400 cursor-pointer hover:text-white hover:border-white/20 transition-all hover:scale-105">
          <ShoppingBag size={28} className="mb-2" />
          <span className="text-sm font-medium">Takeaway</span>
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
