import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import LocationContact from './components/LocationContact';
import AmenitiesBar from './components/AmenitiesBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-white font-inter">
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        <Header />
        <main className="mt-16 space-y-24">
          <Hero />
          <AmenitiesBar />
          <FeaturedDishes />
          <AboutUs />
          <Reviews />
          <LocationContact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
