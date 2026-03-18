import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-32 border-t border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              <span className="text-primary">Lil'</span> China
            </h2>
            <p className="text-gray-400 font-light max-w-sm">
              Pure Veg Pan-Asian Experience. Immerse yourself in authentic flavors and premium dining.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lil' China Bhopal. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-medium">
            Designed & Built by <span className="text-primary neon-text-glow">artdoesit</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
