import React from 'react';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-[#06091A]  pb-10 mt-3">
      {/* 1. Newsletter Overlap */}
      <Newsletter />

      <div className="max-w-7xl mx-auto px-6">
        {/* 2. Centered Logo */}
        <div className="flex justify-center mb-16 pt-10">
          <img 
            src="/src/assets/Group 1.png" 
            alt="BPL Dream 11 Logo" 
            className="h-28 object-contain"
          />
        </div>

        {/* 3. Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-gray-400 pb-16 border-b border-white/10">
          
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">About Us</h3>
            <p className="leading-relaxed max-w-xs">
              We are a passionate team dedicated to providing the best cricket 
              fantasy experience to our fans worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center space-y-4">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-orange-400 transition-colors">• Home</a></li>
              <li><a href="/services" className="hover:text-orange-400 transition-colors">• Services</a></li>
              <li><a href="/about" className="hover:text-orange-400 transition-colors">• About</a></li>
              <li><a href="/contact" className="hover:text-orange-400 transition-colors">• Contact</a></li>
            </ul>
          </div>

          {/* Footer Subscription */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Subscribe</h3>
            <p className="max-w-xs">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-l-xl bg-white text-black outline-none border-none"
              />
              <button className="px-6 py-3 rounded-r-xl font-bold text-black bg-gradient-to-r from-pink-400 to-yellow-500 hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* 4. Copyright Bar */}
        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>@2026 Turjo Codes & BPL Dream 11. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;