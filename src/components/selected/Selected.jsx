import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const Selected = ({ selectedPlayers, handleRemovePlayer, onAddMore }) => {
    return (
        <div className="px-4 container mx-auto">
            <div className="flex flex-col gap-4">
                {selectedPlayers.length === 0 ? (
                    <div className="text-center py-10 border-1 border-dashed rounded-2xl">
                        <p className="text-gray-400">No players selected yet!</p>
                    </div>
                ) : (
                    selectedPlayers.map((player) => (
                        <div 
                            key={player.playerId} 
                            className="flex items-center justify-between border p-4 rounded-2xl shadow-sm bg-white"
                        >
                            <div className="flex items-center gap-4">
                                <img 
                                    src={player.image} 
                                    className="w-20 h-20 rounded-xl object-cover" 
                                    alt={player.playerName} 
                                />
                                <div>
                                    <h3 className="font-bold text-xl text-gray-800">{player.playerName}</h3>
                                    <p className="text-gray-500">{player.battingStyle} | {player.playerType}</p>
                                    <p className="font-bold text-blue-600 mt-1">${player.price}</p>
                                </div>
                            </div>

                            
                            <button 
    onClick={() => handleRemovePlayer(player)} 
    className="p-2 hover:bg-red-50 rounded-full transition-all group"
>
    <MdDeleteForever className="text-xxl text-red-400 group-hover:text-red-600" />
</button>
                        </div>
                    ))
                )}
            </div>
            
            
            <div className="mt-8 border border-black  rounded-xl inline-block">
                <button 
                    onClick={onAddMore} 
                    className="btn bg-[#E7FE29] hover:bg-[#e9d524] text-black border-none px-6 font-bold rounded-xl"
                >
                    Add More Player
                </button>
            </div>
        </div>
    );
};

export default Selected;