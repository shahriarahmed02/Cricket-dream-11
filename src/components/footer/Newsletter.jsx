import React from 'react';

const Newsletter = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 -mb-44 z-10">
      <div className="bg-white rounded-3xl p-8 md:p-20 text-center shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Subtle Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-orange-50/50 -z-10"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#131313] mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-500 text-lg mb-8">
          Get the latest updates and news right in your inbox!
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-96 px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-orange-300 transition-all shadow-sm text-black"
          />
          <button className="w-full md:w-auto px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-pink-400 to-yellow-500 hover:scale-105 transition-transform shadow-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;