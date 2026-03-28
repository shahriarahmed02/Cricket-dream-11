import bannerimg from "../../assets/Frame 8 (1).png"

const Banner = ({ handleAddCoins }) => {
    return (
        <div className="container mx-auto px-4 mt-8">
           
            <div className="relative text-center flex flex-col items-center justify-center shadow-2xl rounded-3xl overflow-hidden bg-black">
                
               
                <img 
                    src={bannerimg} 
                    alt="Cricket Gear" 
                    className="w-full h-auto object-cover" 
                />

            
                <div className="absolute bottom-8 md:bottom-12">
                    <div className="border border-[#E7FE29]  rounded-xl inline-block">
                        <button onClick={handleAddCoins} className="btn bg-[#E7FE29] hover:bg-[#e9d524] text-black border-none rounded-xl px-8 py-2 font-bold h-auto min-h-0">
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;