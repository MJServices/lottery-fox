
import LotteryHero from './LotteryHero';
import VerifiableBanner from './VerifiableBanner';
import LuckyHourCard from './LuckyHourCard';
import LotteryRounds from './LotteryRounds';

export default function MainContent() {
  return (
    <main className="flex-1 bg-[#13181D] p-3 md:p-4 lg:p-6 overflow-x-hidden">
      {/* Main Content Grid - Responsive Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 w-full">
        {/* Left Column - Main Lottery Card + Bitcoin Block */}
        <div className="xl:col-span-2 w-full max-w-full overflow-hidden space-y-4 md:space-y-6">

          {/* Coded Hero Component - Visible on ALL devices */}
          <div className="w-full">
            <LotteryHero />

            {/* Verifiable Banner - Added per highlighted request */}
            <div className="mt-4 lg:hidden">
              <VerifiableBanner />
            </div>
          </div>


        </div>

        {/* Right Column */}
        <div className="xl:col-span-1 flex flex-col gap-4 md:gap-6 w-full max-w-full">
          {/* Lucky Hour Card - 100% Accurate Figma Design */}
          <div className="hidden lg:block w-full overflow-hiddn">
            <LuckyHourCard />
          </div>

          {/* Latest Bitcoin Block - Positioned in Right Column */}
          <div className="bg-[#1A1F26] rounded-xl p-4 border border-[#2A3441] relative overflow-hidden w-full min-h-[140px] flex flex-col justify-between group shadow-lg">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#FFB366] to-transparent opacity-[0.07] rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            {/* New Green Gradient for Verify Button Area */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#BEFF25] opacity-[0.25] rounded-full blur-3xl -mr-12 -mb-12 pointer-events-none"></div>

            {/* Floating Coins - Decorative */}
            <div className="absolute top-4 right-8 w-8 h-8 animate-pulse pointer-events-none z-0" style={{ animationDuration: '3s' }}>
              <img src="/images/awards-coin-1.png" alt="" className="w-full h-full object-contain opacity-90 rotate-12 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-6 right-24 w-10 h-10 animate-bounce pointer-events-none z-0" style={{ animationDuration: '4s' }}>
              <img src="/images/awards-coin-2.png" alt="" className="w-full h-full object-contain drop-shadow-xl -rotate-12 opacity-80" />
            </div>
            {/* New Coins */}
            <div className="absolute top-12 right-2 w-6 h-6 animate-pulse pointer-events-none z-0" style={{ animationDuration: '5s' }}>
              <img src="/images/awards-coin-1.png" alt="" className="w-full h-full object-contain opacity-60 -rotate-45 blur-[1px]" />
            </div>
            <div className="absolute -bottom-2 right-12 w-12 h-12 animate-bounce pointer-events-none z-0" style={{ animationDuration: '6s' }}>
              <img src="/images/awards-coin-2.png" alt="" className="w-full h-full object-contain opacity-40 rotate-45 blur-[2px]" />
            </div>
            <div className="absolute top-16 right-36 w-8 h-8 animate-pulse pointer-events-none z-0" style={{ animationDuration: '7s' }}>
              <img src="/images/awards-coin-1.png" alt="" className="w-full h-full object-contain opacity-20 -rotate-12 blur-[1px]" />
            </div>

            <div className="relative z-10 font-sans w-full">

              {/* Block Number & Label */}
              <div className="mb-6 relative">
                <div className="text-white text-[21px] md:text-[24px] font-black tracking-tight leading-none drop-shadow-md">
                  4390J3
                </div>
                <div className="flex items-center gap-2 mb-1 opacity-80 m-1 ">
                  <h3 className="text-[#A2B4C6] text-[11px] font-bold uppercase tracking-[0.2em] ">LATEST BITCOIN BLOCK #</h3>
                </div>
              </div>

              {/* Winning Digits Row */}
              <div className="flex items-end justify-between mt-auto w-full">
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    {['5', '3', '8', '9', 'K', 'J'].map((digit, i) => (
                      <div key={i} className={`w-[18px] h-[18px] md:w-[20px] md:h-[20px] rounded-[4px] flex items-center justify-center border shadow-[0_2px_0_rgba(0,0,0,0.2)] ${['K', 'J', '5', '3', '8', '9'].includes(digit)
                        ? 'bg-gradient-to-b from-[#9F3513] to-[#E36826] border-[#FF8962]'
                        : 'bg-[#242D36] border-[#374151]'
                        }`}>
                        <span className={`text-[8px] md:text-[9px] font-extrabold ${['K', 'J', '5', '3', '8', '9'].includes(digit) ? 'text-[#FF0C4]' : 'text-white'}`}>{digit}</span>

                      </div>
                    ))}
                  </div>
                  <div className="text-[#64748B] text-[7px] font-bold uppercase tracking-wider pl-1">Winning digits</div>
                </div>

                {/* Live & Verify - Stacked Right */}
                <div className="flex flex-col items-end gap-2 mb-0.5">
                  <div className="flex items-center gap-1 bg-[#BEFF25]/10 px-1.5 py-0.5 rounded-full border border-[#BEFF25]/20">
                    <div className="relative flex h-1 w-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BEFF25] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1 w-1 bg-[#BEFF25]"></span>
                    </div>
                    <span className="text-[#BEFF25] text-[7px] font-bold uppercase tracking-wider">Live</span>
                  </div>

                  <button className="bg-[#BEFF25] hover:bg-[#aef50a] text-[#13181D] px-3 py-1.5 rounded-lg text-[8px] font-extrabold shadow-[0_2px_0_0_#8fb810] transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none uppercase tracking-wider min-w-[60px]">
                    Verify
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Demo Section - Responsive Design */}
      <div className="bg-[#13181D] rounded-xl p-4 md:p-6 mb-6 md:mb-8 border border-[#242D36] relative overflow-hidden">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] flex-shrink-0">
              <img src="/images/faq-sidebar-image.png" alt="Demo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-white text-[20px] md:text-[22px] font-extrabold leading-tight mb-1">See how the game works</h3>
              <p className="text-[#64748B] text-[12px] md:text-[13px] font-medium leading-tight">
                No wallet. No risk. Just a demo.<br />
                This is an example draw using real Bitcoin block logic
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-2">
              {/* Box 1: 0 */}
              <div className="w-[40px] md:w-[48px] h-[48px] md:h-[56px] bg-[#1F262E] border border-[#2A3441] rounded shadow-inner flex items-center justify-center">
                <span className="text-white font-extrabold text-[18px] md:text-[20px]">0</span>
              </div>
              {/* Box 2: Orange 0 */}
              <div className="w-[40px] md:w-[48px] h-[48px] md:h-[56px] bg-gradient-to-b from-[#E36826] to-[#9F3513] border border-[#FF8962] rounded shadow-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-[18px] md:text-[20px]">0</span>
              </div>
              {/* Star Boxes */}
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="w-[40px] md:w-[48px] h-[48px] md:h-[56px] bg-[#1F262E] border border-[#2A3441] rounded shadow-inner flex items-center justify-center">
                  <img src="/images/star-icon.png" alt="Star" className="w-19 h-19 object-contain opacity-90" />
                </div>
              ))}
            </div>
            <button className="bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] text-white px-6 py-3 rounded-lg font-bold text-[13px] md:text-[14px] shadow-lg whitespace-nowrap hover:brightness-110 transition-all w-full sm:w-auto">
              Randomize as demo
            </button>
          </div>
        </div>
      </div>

      {/* Prize Matching Section - Responsive Design */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-[#64748B] text-[13px] md:text-[14px] font-bold mb-3 md:mb-4">Prizes if your digit match</h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-1 w-full">
          {/* 2 Digit Match */}
          <div className="bg-[#0b0e11] rounded-xl p-3 md:p-4 border border-[#1E262E] flex flex-col items-center justify-center relative overflow-hidden h-[130px] md:h-[140px] group">
            {/* Spotlight */}
            <div className="absolute top-0 inset-x-0 h-[50px] bg-gradient-to-b from-[#334155]/20 to-transparent blur-xl"></div>

            <div className="w-[50px] md:w-[60px] h-[26px] md:h-[30px] bg-gradient-to-b from-[#334155] to-[#475569] rounded-lg flex items-center justify-center mb-3 border-t border-[#64748B]/50 shadow-[0_4px_12px_rgba(0,0,0,0.3)] relative z-10">
              <span className="text-white text-[13px] md:text-[14px] font-black drop-shadow-sm">2</span>
            </div>

            <p className="text-white text-[10px] md:text-[11px] font-medium mb-4 text-center relative z-10">Digit match</p>

            <div className="flex items-center gap-3 relative z-10">
              <img src="/images/ticket-prize-icon.png" alt="Free" className="w-5 h-5 md:w-6 md:h-6 object-contain drop-shadow-md" />
              <div>
                <p className="text-[#64748B] text-[8px] md:text-[9px] font-bold uppercase leading-none mb-0.5">Prize</p>
                <p className="text-white text-[11px] md:text-[12px] font-bold leading-none">Free ticket</p>
              </div>
            </div>
          </div>

          {/* 3 Digit Match */}
          <div className="bg-[#0b0e11] rounded-xl p-3 md:p-4 border border-[#1E262E] flex flex-col items-center justify-center relative overflow-hidden h-[130px] md:h-[140px] group">
            <div className="absolute top-0 inset-x-0 h-[50px] bg-gradient-to-b from-[#F59E0B]/30 to-transparent blur-xl"></div>

            <div className="w-[50px] md:w-[60px] h-[26px] md:h-[30px] bg-gradient-to-b from-[#92400E] to-[#D97706] rounded-lg flex items-center justify-center mb-3 border-t border-[#F59E0B]/50 shadow-[0_4px_12px_rgba(0,0,0,0.3)] relative z-10">
              <span className="text-white text-[13px] md:text-[14px] font-black drop-shadow-sm">3</span>
            </div>

            <p className="text-white text-[10px] md:text-[11px] font-medium mb-4 text-center relative z-10">Digit match</p>

            <div className="flex items-center gap-3 relative z-10">
              <img src="/images/coin-prize-icon.png" alt="Coin" className="w-5 h-5 md:w-6 md:h-6 object-contain drop-shadow-md" />
              <div>
                <p className="text-[#64748B] text-[8px] md:text-[9px] font-bold uppercase leading-none mb-0.5">Prize</p>
                <p className="text-white text-[11px] md:text-[12px] font-bold leading-none">$300</p>
              </div>
            </div>
          </div>

          {/* 4 Digit Match */}
          <div className="bg-[#0b0e11] rounded-xl p-3 md:p-4 border border-[#1E262E] flex flex-col items-center justify-center relative overflow-hidden h-[130px] md:h-[140px] group">
            <div className="absolute top-0 inset-x-0 h-[50px] bg-gradient-to-b from-[#F97316]/30 to-transparent blur-xl"></div>

            <div className="w-[50px] md:w-[60px] h-[26px] md:h-[30px] bg-gradient-to-b from-[#C2410C] to-[#FB923C] rounded-lg flex items-center justify-center mb-3 border-t border-[#FDBA74]/50 shadow-[0_4px_12px_rgba(0,0,0,0.3)] relative z-10">
              <span className="text-white text-[13px] md:text-[14px] font-black drop-shadow-sm">4</span>
            </div>

            <p className="text-white text-[10px] md:text-[11px] font-medium mb-4 text-center relative z-10">Digit match</p>

            <div className="flex items-center gap-3 relative z-10">
              <img src="/images/coin-prize-icon.png" alt="Coin" className="w-5 h-5 md:w-6 md:h-6 object-contain drop-shadow-md" />
              <div>
                <p className="text-[#64748B] text-[8px] md:text-[9px] font-bold uppercase leading-none mb-0.5">Prize</p>
                <p className="text-white text-[11px] md:text-[12px] font-bold leading-none">$3 000</p>
              </div>
            </div>
          </div>

          {/* 5 Digit Match */}
          <div className="bg-[#0b0e11] rounded-xl p-3 md:p-4 border border-[#1E262E] flex flex-col items-center justify-center relative overflow-hidden h-[130px] md:h-[140px] group">
            <div className="absolute top-0 inset-x-0 h-[50px] bg-gradient-to-b from-[#84CC16]/30 to-transparent blur-xl"></div>

            <div className="w-[50px] md:w-[60px] h-[26px] md:h-[30px] bg-gradient-to-b from-[#4D7C0F] to-[#A3E635] rounded-lg flex items-center justify-center mb-3 border-t border-[#BEFF25]/50 shadow-[0_4px_12px_rgba(0,0,0,0.3)] relative z-10">
              <span className="text-[#0b0e11] text-[13px] md:text-[14px] font-black drop-shadow-sm">5</span>
            </div>

            <p className="text-white text-[10px] md:text-[11px] font-medium mb-4 text-center relative z-10">Digit match</p>

            <div className="flex items-center gap-3 relative z-10">
              <img src="/images/coin-prize-icon.png" alt="Coin" className="w-5 h-5 md:w-6 md:h-6 object-contain drop-shadow-md" />
              <div>
                <p className="text-[#64748B] text-[8px] md:text-[9px] font-bold uppercase leading-none mb-0.5">Prize</p>
                <p className="text-white text-[11px] md:text-[12px] font-bold leading-none">$50 000</p>
              </div>
            </div>
          </div>

          {/* 6 Digit Match */}
          <div className="bg-[#0b0e11] rounded-xl p-3 md:p-4 border border-[#1E262E] flex flex-col items-center justify-center relative overflow-hidden h-[130px] md:h-[140px] col-span-2 md:col-span-1 group">
            <div className="absolute top-0 inset-x-0 h-[50px] bg-gradient-to-b from-[#A855F7]/30 to-transparent blur-xl"></div>

            <div className="w-[50px] md:w-[60px] h-[26px] md:h-[30px] bg-gradient-to-b from-[#6B21A8] to-[#C084FC] rounded-lg flex items-center justify-center mb-3 border-t border-[#E879F9]/50 shadow-[0_4px_12px_rgba(0,0,0,0.3)] relative z-10">
              <span className="text-white text-[13px] md:text-[14px] font-black drop-shadow-sm">6</span>
            </div>

            <p className="text-white text-[10px] md:text-[11px] font-medium mb-4 text-center relative z-10">Digit match</p>

            <div className="flex items-center gap-3 relative z-10">
              <img src="/images/coin-prize-icon.png" alt="Jackpot" className="w-5 h-5 md:w-6 md:h-6 object-contain drop-shadow-md" />
              <div>
                <p className="text-[#64748B] text-[8px] md:text-[9px] font-bold uppercase leading-none mb-0.5">Prize</p>
                <p className="text-white text-[11px] md:text-[12px] font-bold leading-none">Jackpot</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lottery Rounds Section */}
      <LotteryRounds />

      {/* Previous Wins Section */}
      <div className="mt-8 mb-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/images/champion-icon.svg" alt="Wins" className="w-5 h-5 object-contain" />
          <h3 className="text-white text-[16px] md:text-[18px] font-bold">Previous wins</h3>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center bg-[#0F1318] rounded-lg p-1 border border-[#1F262E]">
            <button className="px-6 py-2 rounded-md bg-[#182614] border border-[#2E451B] text-[#BEFF25] text-[12px] font-bold shadow-[0_0_15px_rgba(190,255,37,0.1)]">Best drops</button>
            <button className="px-6 py-2 rounded-md text-[#64748B] text-[12px] font-bold hover:text-white transition-colors">Highest wins</button>
            <button className="px-6 py-2 rounded-md text-[#64748B] text-[12px] font-bold hover:text-white transition-colors">My bets</button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-[#13181D] border border-[#242D36] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead>
                <tr className="bg-[#161C22] border-b border-[#242D36]">
                  <th className="py-4 px-6 text-left text-[#64748B] text-[10px] font-bold uppercase tracking-wider">User</th>
                  <th className="py-4 px-6 text-left text-[#64748B] text-[10px] font-bold uppercase tracking-wider">Date</th>
                  <th className="py-4 px-6 text-left text-[#64748B] text-[10px] font-bold uppercase tracking-wider">Ticket amount</th>
                  <th className="py-4 px-6 text-left text-[#64748B] text-[10px] font-bold uppercase tracking-wider">Ticket price</th>
                  <th className="py-4 px-6 text-left text-[#64748B] text-[10px] font-bold uppercase tracking-wider">Numbers</th>
                  <th className="py-4 px-6 text-left text-[#64748B] text-[10px] font-bold uppercase tracking-wider">Winning numbers</th>
                  <th className="py-4 px-6 text-left text-[#64748B] text-[10px] font-bold uppercase tracking-wider">Profit</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(8)].map((_, i) => (
                  <tr key={i} className="border-b border-[#1F262E] hover:bg-[#1A1F26]/50 transition-colors group">
                    {/* User */}
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#242D36] border border-[#333D49]">
                          <img src="/images/profile-avatar.png" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-white text-[12px] font-bold">0xA9f</span>
                      </div>
                    </td>
                    {/* Date */}
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2 text-[#94A3B8]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#64748B" />
                          <path d="M12 6V12L16 14" stroke="#13181D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[12px] font-bold text-[#A2B4C6]">2 min ago</span>
                      </div>
                    </td>
                    {/* Ticket Amount */}
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <img src="/images/ticket-prize-icon.png" alt="Ticket" className="w-4 h-4 object-contain brightness-0 invert opacity-60" /> {/* Placeholder icon styling */}
                        <span className="text-white text-[12px] font-bold">2 tickets</span>
                      </div>
                    </td>
                    {/* Ticket Price */}
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#EF4444] border border-[#F87171] flex flex-col justify-center items-center shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
                        <span className="text-white text-[12px] font-bold">569 USD</span>
                      </div>
                    </td>
                    {/* Numbers */}
                    <td className="py-3 px-6">
                      <div className="flex gap-1">
                        {['5', '3', '8', '9', 'K', 'J'].map((d, index) => (
                          <div key={index} className="w-[20px] h-[20px] rounded-[4px] bg-gradient-to-b from-[#9F3513] to-[#E36826] border border-[#FF8962] flex items-center justify-center shadow-sm">
                            <span className="text-[#FFF0C4] text-[10px] font-extrabold">{d}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    {/* Winning Numbers */}
                    <td className="py-3 px-6">
                      <div className="flex gap-1">
                        {['5', '3', '8', '9', 'K', 'J'].map((d, index) => (
                          <div key={index} className="w-[20px] h-[20px] rounded-[4px] bg-gradient-to-b from-[#9F3513] to-[#E36826] border border-[#FF8962] flex items-center justify-center shadow-sm">
                            <span className="text-[#FFF0C4] text-[10px] font-extrabold">{d}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    {/* Profit */}
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#BEFF25] flex justify-center items-center text-black font-bold text-[10px]">+</div>
                        <span className="text-white text-[12px] font-bold">+ 569 USD</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}