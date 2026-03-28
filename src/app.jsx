import { useState, Suspense } from 'react';
import Navbar from "./components/navbar/Navbar";
import Banner from './components/banner/Banner';
import Players from './components/players/Players';
import Selected from './components/selected/Selected';

const playerPromise = fetch("/data.json").then((res) => res.json());

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isActive, setIsActive] = useState({ available: true });

  const handleAddCoins = () => {
    setCoins(prev => prev + 6000000);
  };

  const handleSelectPlayer = (player) => {
    // ১. চেক করা প্লেয়ারটি আগে থেকে আছে কি না (ID দিয়ে চেক)
    const isExist = selectedPlayers.find(p => p.playerId === player.playerId);
    
    if (isExist) {
        alert("Player already selected!");
        return;
    }

    // ২. ১১ জন লিমিট চেক
    if (selectedPlayers.length >= 11) {
        alert("Team is full! Limit is 11 players.");
        return;
    }

    // ৩. কয়েন চেক
    if (coins < player.price) {
        alert("Not enough coins!");
        return;
    }

    // ৪. স্টেট আপডেট
    setCoins(coins - player.price);
    setSelectedPlayers([...selectedPlayers, player]); // ... ব্যবহার নিশ্চিত করুন
    alert(`${player.playerName} added!`);
  };

const handleRemovePlayer = (player) => {
    // ১. প্লেয়ার রিমুভ করা
    const remaining = selectedPlayers.filter(p => p.playerId !== player.playerId);
    setSelectedPlayers(remaining);

    // ২. রিফান্ড অপশন: প্লেয়ারের দাম কয়েনে ফেরত দেওয়া
    setCoins(coins + player.price);

    alert(`${player.playerName} removed and $${player.price} refunded!`);
};
  return (
    <div className="container mx-auto">
      <Navbar coins={coins} />
      <Banner handleAddCoins={handleAddCoins} />

      <div className="flex justify-between items-center my-10 px-4">
        <h2 className="text-2xl font-bold">
          {isActive.available ? "Available Players" : `Selected (${selectedPlayers.length}/11)`}
        </h2>
        <div className="join border rounded-xl overflow-hidden shadow-sm">
          <button onClick={() => setIsActive({available: true})} 
            className={`btn join-item px-8 border-none ${isActive.available ? "bg-[#E7FE29]" : "bg-white"}`}>Available</button>
          <button onClick={() => setIsActive({available: false})} 
            className={`btn join-item px-8 border-none ${!isActive.available ? "bg-[#E7FE29]" : "bg-white"}`}>Selected ({selectedPlayers.length})</button>
        </div>
      </div>

      {isActive.available ? (
        <Suspense fallback={<div className="loading loading-spinner loading-lg"></div>}>
          <Players playerPromise={playerPromise} handleSelectPlayer={handleSelectPlayer} />
        </Suspense>
      ) : (
        <Selected 
          selectedPlayers={selectedPlayers} 
          handleRemovePlayer={handleRemovePlayer}
          onAddMore={() => setIsActive({available: true})} 
        />
      )}
    </div>
  );
}

export default App;