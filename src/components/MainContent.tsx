import PreviousWins from './PreviousWins';
import FigmaLotteryCard from './FigmaLotteryCard';
import LuckyHourCard from './LuckyHourCard';

export default function MainContent() {
  return (
    <main className="flex-1 bg-[#13181D] p-3 md:p-4 lg:p-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Content Grid - Responsive Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Left Column - Main Lottery Card */}
          <div className="xl:col-span-2">
            <FigmaLotteryCard />
          </div>
          
          {/* Right Column */}
          <div className="xl:col-span-1 flex flex-col gap-4 md:gap-6">
            {/* Lucky Hour Card - 100% Accurate Figma Design */}
            <LuckyHourCard />
            
            {/* Latest Bitcoin Block */}
            <div className="bg-gradient-to-br from-[#13181D] to-[#1F262E] rounded-xl p-4 md:p-6 border border-[#242D36] min-h-[140px] md:h-[160px] relative overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute right-0 top-0 w-32 md:w-40 h-32 md:h-40 bg-[#BEFF25] rounded-full blur-[80px] md:blur-[100px] opacity-30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/images/bitcoin-icon.png" alt="Bitcoin" className="w-4 md:w-5 h-4 md:h-5" />
                  <h3 className="text-[#A2B4C6] text-[14px] md:text-[16px] font-extrabold tracking-wide">LATEST BITCOIN BLOCK #</h3>
                </div>
                <div className="text-white text-[24px] md:text-[28px] font-extrabold mb-3 md:mb-4 tracking-tight">4390J3</div>
                
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-1 overflow-x-auto">
                    {['5', '3', '8', '9', 'K', 'J'].map((digit, i) => (
                      <div key={i} className="w-[28px] md:w-[32px] h-[24px] md:h-[28px] bg-gradient-to-b from-[#1F1813] to-[#E36826] rounded border border-[#FF8962] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#FFF0C4] text-[12px] md:text-[14px] font-bold">{digit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="bg-gradient-to-r from-[#8FD811] to-[#E1FF75] text-[#253703] px-3 md:px-4 py-2 rounded-lg text-[12px] md:text-[14px] font-bold border border-[#BEFF25] flex items-center gap-1 md:gap-2 whitespace-nowrap">
                    <img src="/images/checkmark-badge-icon.svg" alt="Verify" className="w-3 md:w-4 h-3 md:h-4" />
                    <span className="hidden sm:inline">Verify</span>
                    <span className="sm:hidden">✓</span>
                  </button>
                </div>
                
                <div className="text-[#A2B4C6] text-[12px] md:text-[14px] font-bold mt-2 md:mt-3">Winning digits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section - Responsive Design */}
        <div className="bg-gradient-to-br from-[#13181D] to-[#1F262E] rounded-xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 border border-[#242D36] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
            <div className="flex items-start sm:items-center gap-3 md:gap-6">
              <div className="w-[60px] md:w-[80px] h-[66px] md:h-[88px] rounded-lg overflow-hidden relative flex-shrink-0">
                <img src="/images/ticket-prize-icon.png" alt="Demo Ticket" className="w-full h-full object-cover" />
                {/* Game icon overlay */}
                <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-[24px] md:w-[30px] h-[24px] md:h-[30px] bg-gradient-to-br from-[#8FD811] to-[#E1FF75] rounded-full p-1 md:p-1.5 border-2 border-[#13181D]">
                  <img src="/images/game-icon.svg" alt="Game" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start sm:items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <h3 className="text-white text-[18px] md:text-[22px] lg:text-[26px] font-extrabold leading-tight">See how the game works</h3>
                  <img src="/images/cursor-info-icon.svg" alt="Info" className="w-4 md:w-5 h-4 md:h-5 opacity-70 flex-shrink-0 mt-1 sm:mt-0" />
                </div>
                <p className="text-white/70 text-[12px] md:text-[14px] lg:text-[15px] font-bold leading-relaxed max-w-[400px]">
                  No wallet. No risk. Just a demo.<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>This is an example draw using real Bitcoin block logic
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3 md:gap-5 mt-2 lg:mt-0">
              <div className="flex gap-1 md:gap-2 overflow-x-auto pb-2 w-full justify-center">
                {/* First two numbers filled */}
                <div className="w-[45px] md:w-[55px] lg:w-[60px] h-[55px] md:h-[65px] lg:h-[70px] bg-[#313C47] border border-[#525D68] rounded-lg shadow-[0px_3px_0px_0px_#33383D] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-extrabold text-[20px] md:text-[24px] lg:text-[28px]">0</span>
                </div>
                <div className="w-[45px] md:w-[55px] lg:w-[60px] h-[55px] md:h-[65px] lg:h-[70px] bg-gradient-to-b from-[#1F1813] to-[#E36826] border border-[#FF8962] rounded-lg shadow-[0px_3px_0px_0px_#C3502B] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-extrabold text-[20px] md:text-[24px] lg:text-[28px]">0</span>
                </div>
                {/* Remaining question marks */}
                {['?', '?', '?', '?'].map((num, i) => (
                  <div key={i} className="w-[45px] md:w-[55px] lg:w-[60px] h-[55px] md:h-[65px] lg:h-[70px] bg-[#13181D] border border-[#525D68] rounded-lg shadow-[0px_3px_0px_0px_#33383D] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#525D68] font-extrabold text-[20px] md:text-[24px] lg:text-[28px]">{num}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-[14px] md:text-[16px] border border-[#FF8962] shadow-lg whitespace-nowrap">
                Randomize as demo
              </button>
            </div>
          </div>
        </div>

        {/* Prize Matching Section - Responsive Design */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-[#A2B4C6] text-[14px] md:text-[16px] font-semibold mb-4 md:mb-6">Prizes if your digit match</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
            {/* 2 Digit Match */}
            <div className="bg-gradient-to-br from-[#13181D] to-[#1F262E] rounded-xl p-3 md:p-4 lg:p-6 text-center border border-[#252F38] min-h-[140px] md:h-[160px] lg:h-[180px] flex flex-col justify-between">
              <div className="w-[50px] md:w-[60px] lg:w-[70px] h-[28px] md:h-[32px] lg:h-[36px] bg-gradient-to-b from-[#2B3540] to-[#4A5968] rounded-lg mx-auto flex items-center justify-center border border-[#46566B]">
                <span className="text-white font-bold text-[12px] md:text-[14px] lg:text-[16px]">2</span>
              </div>
              <div className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-semibold">Digit match</div>
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <div className="w-[32px] md:w-[38px] lg:w-[42px] h-[34px] md:h-[40px] lg:h-[44px] rounded overflow-hidden">
                  <img src="/images/coin-prize-icon.png" alt="Free Ticket" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-[#525D68] text-[10px] md:text-[11px] lg:text-[12px] font-bold">Prize</div>
                  <div className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-semibold">Free ticket</div>
                </div>
              </div>
            </div>

            {/* 3 Digit Match */}
            <div className="bg-gradient-to-br from-[#13181D] to-[#1F262E] rounded-xl p-3 md:p-4 lg:p-6 text-center border border-[#252F38] relative overflow-hidden min-h-[140px] md:h-[160px] lg:h-[180px] flex flex-col justify-between">
              <div className="absolute -top-[50px] md:-top-[60px] lg:-top-[74px] left-[8px] md:left-[10px] lg:left-[13px] w-[150px] md:w-[180px] lg:w-[223px] h-[60px] md:h-[70px] lg:h-[86px] bg-[#B45401] rounded-full blur-[50px] md:blur-[60px] lg:blur-[72px] opacity-35"></div>
              <div className="w-[50px] md:w-[60px] lg:w-[70px] h-[28px] md:h-[32px] lg:h-[36px] bg-gradient-to-b from-[#1F1813] to-[#E36826] rounded-lg mx-auto flex items-center justify-center border border-[#FF8962] relative z-10">
                <span className="text-[#FFF0C4] font-bold text-[12px] md:text-[14px] lg:text-[16px]">3</span>
              </div>
              <div className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-semibold relative z-10">Digit match</div>
              <div className="flex items-center justify-center gap-2 md:gap-3 relative z-10">
                <div className="w-[32px] md:w-[38px] lg:w-[42px] h-[34px] md:h-[40px] lg:h-[44px] rounded overflow-hidden">
                  <img src="/images/coin-prize-icon.png" alt="$300 Prize" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-[#525D68] text-[10px] md:text-[11px] lg:text-[12px] font-bold">Prize</div>
                  <div className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-semibold">$300</div>
                </div>
              </div>
            </div>

            {/* 4 Digit Match */}
            <div className="bg-gradient-to-br from-[#13181D] to-[#1F262E] rounded-xl p-3 md:p-4 lg:p-6 text-center border border-[#252F38] relative overflow-hidden min-h-[140px] md:h-[160px] lg:h-[180px] flex flex-col justify-between">
              <div className="absolute -top-[50px] md:-top-[60px] lg:-top-[74px] left-[8px] md:left-[10px] lg:left-[13px] w-[150px] md:w-[180px] lg:w-[223px] h-[60px] md:h-[70px] lg:h-[86px] bg-[#FF5100] rounded-full blur-[50px] md:blur-[60px] lg:blur-[72px] opacity-80"></div>
              <div className="w-[50px] md:w-[60px] lg:w-[70px] h-[28px] md:h-[32px] lg:h-[36px] bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] rounded-lg mx-auto flex items-center justify-center border border-[#FF8962] relative z-10">
                <span className="text-white font-bold text-[12px] md:text-[14px] lg:text-[16px]">4</span>
              </div>
              <div className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-semibold relative z-10">Digit match</div>
              <div className="flex items-center justify-center gap-2 md:gap-3 relative z-10">
                <div className="w-[32px] md:w-[38px] lg:w-[42px] h-[34px] md:h-[40px] lg:h-[44px] rounded overflow-hidden">
                  <img src="/images/coin-prize-icon.png" alt="$3,000 Prize" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-[#525D68] text-[10px] md:text-[11px] lg:text-[12px] font-bold">Prize</div>
                  <div className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-semibold">$3 000</div>
                </div>
              </div>
            </div>

            {/* 5 Digit Match */}
            <div className="bg-gradient-to-br from-[#13181D] to-[#1F262E] rounded-xl p-3 md:p-4 lg:p-6 text-center border border-[#252F38] relative overflow-hidden min-h-[140px] md:h-[160px] lg:h-[180px] flex flex-col justify-between">
              <div className="absolute -top-[50px] md:-top-[60px] lg:-top-[74px] left-[8px] md:left-[10px] lg:left-[12px] w-[150px] md:w-[180px] lg:w-[223px] h-[60px] md:h-[70px] lg:h-[86px] bg-[#7BFF00] rounded-full blur-[50px] md:blur-[60px] lg:blur-[72px] opacity-80"></div>
              <div className="w-[50px] md:w-[60px] lg:w-[70px] h-[28px] md:h-[32px] lg:h-[36px] bg-gradient-to-b from-[#8FD811] to-[#E1FF75] rounded-lg mx-auto flex items-center justify-center border border-[#BEFF25] relative z-10">
                <span className="text-[#253703] font-bold text-[12px] md:text-[14px] lg:text-[16px]">5</span>
              </div>
              <div className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-semibold relative z-10">Digit match</div>
              <div className="flex items-center justify-center gap-2 md:gap-3 relative z-10">
                <div className="w-[32px] md:w-[38px] lg:w-[42px] h-[34px] md:h-[40px] lg:h-[44px] rounded overflow-hidden">
                  <img src="/images/coin-prize-icon.png" alt="$50,000 Prize" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-[#525D68] text-[10px] md:text-[11px] lg:text-[12px] font-bold">Prize</div>
                  <div className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-semibold">$50 000</div>
                </div>
              </div>
            </div>

            {/* 6 Digit Match - Jackpot */}
            <div className="bg-gradient-to-br from-[#13181D] to-[#1F262E] rounded-xl p-3 md:p-4 lg:p-6 text-center border border-[#252F38] relative overflow-hidden min-h-[140px] md:h-[160px] lg:h-[180px] flex flex-col justify-between col-span-2 sm:col-span-1">
              <div className="absolute -top-[50px] md:-top-[60px] lg:-top-[74px] left-[8px] md:left-[10px] lg:left-[13px] w-[150px] md:w-[180px] lg:w-[223px] h-[60px] md:h-[70px] lg:h-[86px] bg-[#9000FF] rounded-full blur-[50px] md:blur-[60px] lg:blur-[72px] opacity-80"></div>
              <div className="w-[50px] md:w-[60px] lg:w-[70px] h-[28px] md:h-[32px] lg:h-[36px] bg-gradient-to-b from-[#1A131F] to-[#9726E3] rounded-lg mx-auto flex items-center justify-center border border-[#AF3FFF] relative z-10">
                <span className="text-white font-bold text-[12px] md:text-[14px] lg:text-[16px]">6</span>
              </div>
              <div className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-semibold relative z-10">Digit match</div>
              <div className="flex items-center justify-center gap-2 md:gap-3 relative z-10">
                <div className="w-[32px] md:w-[38px] lg:w-[42px] h-[34px] md:h-[40px] lg:h-[44px] rounded overflow-hidden">
                  <img src="/images/jackpot-icon.png" alt="Jackpot Prize" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-[#525D68] text-[10px] md:text-[11px] lg:text-[12px] font-bold">Prize</div>
                  <div className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-semibold">Jackpot</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Wins Section */}
        <PreviousWins />
      </div>
    </main>
  );
}