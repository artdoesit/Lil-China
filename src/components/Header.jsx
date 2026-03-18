import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-20">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-primary">Lil'</span> China
        </h1>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#home" className="text-white border-b-2 border-primary pb-1">Home</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#menu" className="hover:text-white transition-colors">Menu</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full glass-interactive hover:text-white text-gray-300">
          <Search size={20} />
        </button>
        <button className="p-2 rounded-full glass-interactive hover:text-white text-gray-300 relative">
          <ShoppingCart size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
