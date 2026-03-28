import React from 'react';
import dollar from "../../assets/dollar1.png"
import logo from "../../assets/Group 1.png"


const Navbar = ({ coins }) => {
    return (
        <div className="navbar bg-base-100/80 sticky top-0 z-50 backdrop-blur-md container mx-auto px-4 py-4">
            <div className="flex-1">
               
                <img src={logo} alt="Cricket Logo" className="w-12 h-12" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-gray-600 font-medium hidden md:flex items-center">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                    
                    
                    <div className="ml-4 border border-gray-200 rounded-xl px-4 py-2 flex items-center gap-2 font-bold shadow-sm">
                        <span>{coins} Coin</span>
                        <img src={dollar} alt="coin" className="w-5 h-5" />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;