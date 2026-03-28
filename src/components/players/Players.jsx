import React, { use } from 'react';
import { FaUser, FaFlag, FaBaseballBall } from "react-icons/fa"; // আইকন ইম্পোর্ট
import { GiCricketBat } from "react-icons/gi";
import { MdOutlineStars } from "react-icons/md";

const Players = ({ playerPromise, handleSelectPlayer }) => {
    const players = use(playerPromise);

    return (
        <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {players.map((player) => (
                    <div key={player.playerId} className="card bg-amber-100 p-5 rounded-3xl border border-gray-100 
               shadow-md transition-all duration-300 ease-in-out 
               hover:scale-105 hover:shadow-2xl 
               hover:border-[#f2f7c289] hover:ring-2 hover:ring-[#E7FE29] hover:ring-opacity-50">
                        <figure>
                            <img 
                                src={player.image} 
                                alt={player.playerName} 
                                className="rounded-3xl h-64 w-full object-cover" 
                            />
                        </figure>

                        <div className="card-body px-0 py-2">
                          {/* User Icon & Name */}
                            <h2 className="card-title text-2xl font-bold flex items-center gap-3 text-gray-800">
                                <FaUser className="text-gray-500 text-xl" /> {player.playerName}
                            </h2>

                            {/* Country & Type */}
                            <div className="flex justify-between items-center ">
                                <div className="flex items-center gap-2 text-gray-500 font-medium">
                                    <FaFlag className="text-blue-500" /> 
                                    <span>{player.playerCountry}</span>
                                </div>
                             <span 
    className={`px-4 py-1 rounded-full text-sm font-semibold text-white shadow-sm ${
        player.playerType === 'Batter' ? 'bg-[#76badfe9]' : // Green
        player.playerType === 'Bowler' ? 'bg-[#e24694]' : // Red
        player.playerType === 'All-Rounder' ? 'bg-[#f7b864]' : // Sky Blue
        'bg-gray-500' // Default color if type doesn't match
    }`}
>
    {player.playerType}
</span>
                            </div>

                            <hr className="my-1 border-gray-100" />

                            <div className="space-y-2">
                                {/* রেটিং */}
                                <div className="flex items-center gap-2 font-bold text-gray-800">
                                    <MdOutlineStars className="text-yellow-500 text-2xl" /> 
                                    <span>Rating: {player.rating}</span>
                                </div>
                                
                                {/* ব্যাটিং ও বোলিং স্টাইল */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 font-semibold text-gray-700">
                                        <GiCricketBat className="text-orange-500 text-xl" />
                                        <span>{player.battingStyle}</span>
                                    </div>
                                    <div className="flex items-center gap-2 font-semibold text-gray-700">
                                        <FaBaseballBall className="text-red-500 text-lg" />
                                        <span>{player.bowlingStyle}</span>
                                    </div>
                                </div>

                                {/* প্রাইস ও বাটন */}
                                <div className="flex justify-between items-center mt-6">
                                    <p className="font-extrabold text-xl text-gray-900">Price: ${player.price}</p>
                                    <button 
                                        onClick={() => handleSelectPlayer(player)}
                                        className="btn btn-md border-gray-300 bg-white hover:bg-[#29fe82] hover:border-[#E7FE29] font-bold rounded-xl transition-all"
                                    >
                                        Choose Player
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Players;