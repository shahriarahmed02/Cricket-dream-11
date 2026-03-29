import React from 'react';
import dollar from "../../assets/dollar1.png"
import logo from "../../assets/Group 1.png"

const Navbar = ({ coins }) => {
    return (
        /* We use fixed and a high z-index to make sure it floats ABOVE the banner */
        <nav className="fixed top-0 left-0 w-full z-[1000] bg-white/95 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-12">
                
                {/* LEFT SIDE: Logo (Working fine) */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="w-10 h-10 md:w-16 md:h-16" />
                </div>

                {/* RIGHT SIDE: We mirror the Logo structure here */}
                <div className="flex items-center gap-4">
                    
                    {/* Desktop Menu: Hidden on mobile so it doesn't push the coin out */}
                    <ul className="hidden md:flex items-center gap-6 text-gray-600 font-bold list-none">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Fixture</a></li>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Schedules</a></li>
                    </ul>

                    {/* THE COIN: Treated exactly like the logo div */}
                    <div className="flex-shrink-0 flex items-center gap-2 border-2 border-[#E7FE29] rounded-xl px-3 py-1.5 bg-white shadow-sm">
                        <span className="font-bold text-sm md:text-base text-black whitespace-nowrap">
                            {coins.toLocaleString()} Coin
                        </span>
                        <img 
                            src={dollar} 
                            alt="coin" 
                            className="w-5 h-5 md:w-6 md:h-6" 
                        />
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;