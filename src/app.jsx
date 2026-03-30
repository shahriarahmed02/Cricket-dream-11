import { useState, Suspense } from 'react';
import Navbar from "./components/navbar/Navbar";
import Banner from './components/banner/Banner';
import Players from './components/players/Players';
import Selected from './components/selected/Selected';
import Footer from "./components/footer/Footer";

// Fetching player data
const playerPromise = fetch("./data.json").then((res) => res.json());

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isActive, setIsActive] = useState({ available: true });

  // ... (Your existing logic for AddCoins, SelectPlayer, RemovePlayer)
  const handleAddCoins = () => {
    setCoins(prev => prev + 6000000);
    alert("6,000,000 Credits added to your account!");
  };

  const handleSelectPlayer = (player) => {
    const isExist = selectedPlayers.find(p => p.playerId === player.playerId);
    if (isExist) { alert("Player already selected!"); return; }
    if (selectedPlayers.length >= 11) { alert("Team is full! Limit is 11 players."); return; }
    if (coins < player.price) { alert("Not enough coins! Click 'Claim Free Credit'."); return; }

    setCoins(coins - player.price);
    setSelectedPlayers([...selectedPlayers, player]); 
    alert(`${player.playerName} added to your squad!`);
  };

  const handleRemovePlayer = (player) => {
    const remaining = selectedPlayers.filter(p => p.playerId !== player.playerId);
    setSelectedPlayers(remaining);
    setCoins(coins + player.price); 
    alert(`${player.playerName} removed. Credits refunded!`);
  };

  return (
    <div className="min-h-screen bg-white"> {/* Removed pb-20 because Footer adds its own margin */}
      <Navbar coins={coins} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-36"> {/* Added pb-36 to give room for the overlapping newsletter */}
        <Banner handleAddCoins={handleAddCoins} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 my-10 px-2">
          <h2 className="text-xl text-gray-600 md:text-2xl font-bold">
            {isActive.available ? "Available Players" : `Selected (${selectedPlayers.length}/11)`}
          </h2>

          <div className="join border rounded-xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setIsActive({available: true})} 
              className={`btn join-item px-6 md:px-10 border-none transition-all ${isActive.available ? "bg-[#E7FE29] text-black font-bold" : "bg-white text-gray-500"}`}>
              Available
            </button>
            <button 
              onClick={() => setIsActive({available: false})} 
              className={`btn join-item px-6 md:px-10 border-none transition-all ${!isActive.available ? "bg-[#E7FE29] text-black font-bold" : "bg-white text-gray-500"}`}>
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>

        <section>
          {isActive.available ? (
            <Suspense fallback={
              <div className="flex justify-center my-20">
                <span className="loading loading-spinner loading-lg text-[#E7FE29]"></span>
              </div>
            }>
              <Players playerPromise={playerPromise} handleSelectPlayer={handleSelectPlayer} />
            </Suspense>
          ) : (
            <Selected 
              selectedPlayers={selectedPlayers} 
              handleRemovePlayer={handleRemovePlayer}
              onAddMore={() => setIsActive({available: true})} 
            />
          )}
        </section>
      </main>

      {/* 2. Footer sits outside main to span the whole screen width */}
      <Footer />
    </div>
  );
}

export default App;