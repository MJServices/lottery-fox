import Header from './Header';
import Sidebar from './Sidebar';
import MobileNavbar from './MobileNavbar';
import { useState } from 'react';
import { Page } from '../types';

interface HallOfFameProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function HallOfFame({ onLogout, onNavigate, currentPage }: HallOfFameProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Leaderboard data
  const leaderboardData = [
    { rank: 4, user: 'jackie', purchased: '+ 569 USD', tickets: '2 tickets', prize: '+ 569 USD' },
    { rank: 5, user: 'jackie', purchased: '+ 569 USD', tickets: '2 tickets', prize: '+ 569 USD' },
    { rank: 6, user: 'jackie', purchased: '+ 569 USD', tickets: '2 tickets', prize: '+ 569 USD' },
    { rank: 7, user: 'jackie', purchased: '+ 569 USD', tickets: '2 tickets', prize: '+ 569 USD' },
    { rank: 8, user: 'jackie', purchased: '+ 569 USD', tickets: '2 tickets', prize: '+ 569 USD' },
    { rank: 9, user: 'jackie', purchased: '+ 569 USD', tickets: '2 tickets', prize: '+ 569 USD' },
    { rank: 10, user: 'jackie', purchased: '+ 569 USD', tickets: '2 tickets', prize: '+ 569 USD' },
  ];

  return (
    <div className="min-h-screen bg-[#13181D] text-white">
      <Header
        onLogout={onLogout}
        onNavigate={onNavigate}
        currentPage={currentPage}
      />

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMobileSidebarOpen(false)}>
          <div className="w-64 h-full bg-[#13181D]" onClick={(e) => e.stopPropagation()}>
            <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-74px)]">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col xl:flex-row">
          <div className="flex-1 overflow-y-auto pb-20 lg:pb-0">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="max-w-7xl mx-auto">

                {/* Hero Section */}
                <div className="relative mb-8 text-center pt-8">

                  <div className="relative w-full max-w-4xl mx-auto md:h-[350px] flex items-end justify-center pb-4">
                    {/* Using hall of fame.png as the character/hero image */}
                    <img src="/images/hall of fame.png" alt="Hall of Fame" className="w-auto h-full max-h-[280px] md:max-h-[380px] object-contain drop-shadow-2xl z-10 relative" />

                    {/* Glow Effect behind fox */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-[#BEFF25] opacity-10 blur-[90px] rounded-full pointer-events-none"></div>
                  </div>

                  {/* Stats Tabs */}
                  <div className="flex flex-wrap justify-center gap-2 mt-[-20px] relative z-20">
                    <button className="bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] text-white px-4 md:px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm shadow-lg hover:brightness-110 transition-all uppercase tracking-wide">
                      Biggest single win
                    </button>
                    <button className="bg-[#1A1F26] border border-[#2A3441] text-[#94A3B8] px-4 md:px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm hover:text-white hover:border-[#334155] transition-all uppercase tracking-wide">
                      Most Free Tickets
                    </button>
                    <button className="bg-[#1A1F26] border border-[#2A3441] text-[#94A3B8] px-4 md:px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm hover:text-white hover:border-[#334155] transition-all uppercase tracking-wide">
                      Refferral King
                    </button>
                    <button className="bg-[#1A1F26] border border-[#2A3441] text-[#94A3B8] px-4 md:px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm hover:text-white hover:border-[#334155] transition-all uppercase tracking-wide">
                      Most wins in 24H
                    </button>
                  </div>
                </div>

                {/* Top 3 Trophies Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto mt-16">
                  {/* Card 2 (Left) */}
                  <div className="bg-gradient-to-b from-[#1F252E] to-[#13181D] rounded-2xl p-6 border border-[#2A3441] relative mt-8 pt-12 flex flex-col items-center shadow-xl">
                    <div className="absolute -top-10">
                      <img src="/images/trophy.png" alt="Trophy" className="w-24 h-auto drop-shadow-xl filter grayscale-[0.4] brightness-90" />
                    </div>
                    <div className="flex items-center gap-3 mb-5 mt-4">
                      <img src="/images/profile-avatar-56586a.png" className="w-10 h-10 rounded-full border-2 border-[#FF6F3F]" alt="Avatar" />
                      <span className="text-white font-bold text-lg tracking-wide">BONUSss</span>
                    </div>
                    <div className="bg-[#1A1F26] rounded-xl px-4 py-2.5 flex items-center gap-2 border border-[#333D49] min-w-[140px] justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#3D2C28] flex items-center justify-center border border-[#6B3D30]">
                        <span className="text-[#FF6F3F] text-[10px]">●</span>
                      </div>
                      <span className="text-gray-200 font-bold text-sm">569 USD</span>
                    </div>
                  </div>

                  {/* Card 1 (Center - Biggest) */}
                  <div className="bg-gradient-to-b from-[#252C36] to-[#161B22] rounded-2xl p-8 border border-[#364152] relative mt-0 pt-14 flex flex-col items-center shadow-2xl z-10 transform md:scale-105">
                    <div className="absolute -top-12">
                      <img src="/images/trophy.png" alt="Trophy" className="w-28 h-auto drop-shadow-2xl" />
                    </div>
                    <div className="flex items-center gap-3 mb-5 mt-4">
                      <img src="/images/profile-avatar-56586a.png" className="w-12 h-12 rounded-full border-2 border-[#FF6F3F]" alt="Avatar" />
                      <span className="text-white font-bold text-xl tracking-wide">BONUSss</span>
                    </div>
                    <div className="bg-[#1A1F26] rounded-xl px-5 py-3 flex items-center gap-2 border border-[#333D49] min-w-[160px] justify-center shadow-inner">
                      <div className="w-6 h-6 rounded-full bg-[#3D2C28] flex items-center justify-center border border-[#6B3D30]">
                        <span className="text-[#FF6F3F] text-[10px]">●</span>
                      </div>
                      <span className="text-white font-black text-base">569 USD</span>
                    </div>
                  </div>

                  {/* Card 3 (Right) */}
                  <div className="bg-gradient-to-b from-[#1F252E] to-[#13181D] rounded-2xl p-6 border border-[#2A3441] relative mt-8 pt-12 flex flex-col items-center shadow-xl">
                    <div className="absolute -top-10">
                      <img src="/images/trophy.png" alt="Trophy" className="w-24 h-auto drop-shadow-xl filter sepia-[0.6] brightness-90" />
                    </div>
                    <div className="flex items-center gap-3 mb-5 mt-4">
                      <img src="/images/profile-avatar-56586a.png" className="w-10 h-10 rounded-full border-2 border-[#FF6F3F]" alt="Avatar" />
                      <span className="text-white font-bold text-lg tracking-wide">BONUSss</span>
                    </div>
                    <div className="bg-[#1A1F26] rounded-xl px-4 py-2.5 flex items-center gap-2 border border-[#333D49] min-w-[140px] justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#3D2C28] flex items-center justify-center border border-[#6B3D30]">
                        <span className="text-[#FF6F3F] text-[10px]">●</span>
                      </div>
                      <span className="text-gray-200 font-bold text-sm">569 USD</span>
                    </div>
                  </div>
                </div>

                {/* Leaderboard Table */}
                <div className="bg-[#161B22] rounded-xl overflow-hidden border border-[#242D36] shadow-lg">
                  {/* Header */}
                  <div className="hidden md:grid grid-cols-5 p-4 bg-[#1A1F26] border-b border-[#242D36] text-[11px] uppercase tracking-wider text-[#64748B] font-extrabold">
                    <div className="pl-6">Place</div>
                    <div>User</div>
                    <div>Purchased</div>
                    <div>Tickets</div>
                    <div>Price</div>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-[#1E262E]">
                    {leaderboardData.map((item) => (
                      <div key={item.rank} className="grid grid-cols-1 md:grid-cols-5 p-4 items-center hover:bg-[#1C2229] transition-colors group gap-4 md:gap-0">
                        {/* Rank */}
                        <div className="flex items-center justify-between md:justify-start md:pl-6 w-full md:w-auto">
                          <span className="md:hidden text-[#64748B] text-xs font-bold uppercase">Place</span>
                          <div className="w-8 h-8 bg-[#242932] rounded flex items-center justify-center font-bold text-white text-sm border border-[#333D49]">
                            {item.rank}
                          </div>
                        </div>

                        {/* User */}
                        <div className="flex items-center justify-between md:justify-start gap-3 w-full md:w-auto">
                          <span className="md:hidden text-[#64748B] text-xs font-bold uppercase">User</span>
                          <div className="flex items-center gap-3">
                            <img src="/images/profile-avatar-56586a.png" className="w-8 h-8 rounded-full" alt={item.user} />
                            <span className="text-white font-bold text-sm">{item.user}</span>
                          </div>
                        </div>

                        {/* Purchased */}
                        <div className="flex items-center justify-between md:justify-start gap-2 w-full md:w-auto">
                          <span className="md:hidden text-[#64748B] text-xs font-bold uppercase">Purchased</span>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#BEFF25] shadow-[0_0_8px_0_#BEFF25]"></span>
                            <span className="text-white font-bold text-sm tracking-wide">{item.purchased}</span>
                          </div>
                        </div>

                        {/* Tickets */}
                        <div className="flex items-center justify-between md:justify-start gap-2 w-full md:w-auto">
                          <span className="md:hidden text-[#64748B] text-xs font-bold uppercase">Tickets</span>
                          <div className="flex items-center gap-2">
                            <img src="/images/ticket-prize-icon.png" className="w-4 h-4 object-contain opacity-80" alt="Ticket" />
                            <span className="text-white font-bold text-sm">{item.tickets}</span>
                          </div>
                        </div>

                        {/* Prize */}
                        <div className="flex items-center justify-between md:justify-start gap-2 w-full md:w-auto">
                          <span className="md:hidden text-[#64748B] text-xs font-bold uppercase">Price</span>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#BEFF25] shadow-[0_0_8px_0_#BEFF25]"></span>
                            <span className="text-white font-bold text-sm tracking-wide">{item.prize}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Sidebar - Online Chat */}
          <div className="hidden xl:block w-[350px] bg-[#1A1F26] border-l border-[#2A2F36] flex-shrink-0">
            <div className="p-4 h-full flex flex-col">
              {/* Online Chat Header */}
              <div className="rounded-2xl p-5 mb-4 relative overflow-hidden h-[120px] flex items-center shadow-lg" style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)' }}>
                <div className="relative z-10 flex flex-col">
                  <h2 className="text-2xl font-black italic text-white leading-none tracking-tighter drop-shadow-md">ONLINE</h2>
                  <h2 className="text-2xl font-black italic text-white leading-none tracking-tighter drop-shadow-md">CHAT</h2>

                  <div className="mt-2 flex items-center gap-2 bg-[#000000]/30 w-fit px-2 py-1 rounded backdrop-blur-sm">
                    <span className="w-2 h-2 bg-[#BEFF25] rounded-full animate-pulse shadow-[0_0_8px_#BEFF25]"></span>
                    <span className="text-white text-xs font-bold">544</span>
                  </div>
                </div>
                <img src="/images/lottery-hero-fox.png" className="absolute right-[-40px] bottom-[-40px] w-48 object-contain transform -scale-x-100 opacity-20 mix-blend-overlay" alt="Decor" />
                <img src="/images/chat-background-70d50f.png" className="absolute right-[-10px] bottom-[-10px] w-28 object-contain" alt="Chat Fox" />
              </div>

              {/* Footer Links - Reusing the chat internals */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
                {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                  <div key={i} className="flex gap-3 group">
                    <img src="/images/profile-avatar.png" className="w-8 h-8 rounded-full ring-2 ring-transparent group-hover:ring-[#FF4B0F]/50 transition-all" alt="User" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between">
                        <p className="text-[#FF9F43] text-xs font-bold mb-0.5 truncate">jackie</p>
                        <span className="text-[#4B5563] text-[10px]">12:03</span>
                      </div>
                      <p className="text-gray-300 text-xs leading-snug break-words">dealer just pulled 21 again</p>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF9F43] flex items-center justify-center text-white font-bold text-xs ring-2 ring-[#1A1F26]">CR</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between">
                      <p className="text-[#FF9F43] text-xs font-bold mb-0.5">cryptoWolf</p>
                      <span className="text-[#4B5563] text-[10px]">12:03</span>
                    </div>
                    <p className="text-gray-300 text-xs leading-snug break-words">live bj still paying a bit</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-[#2A3441]">
                <div className="relative">
                  <input type="text" placeholder="Placeholder" className="w-full bg-[#0b0e11] border border-[#2A3441] rounded-lg py-3 px-4 pr-20 text-sm text-white focus:outline-none focus:border-[#FF4B0F] placeholder-gray-600 transition-colors" />
                  <button className="absolute right-1 top-1 bottom-1 bg-[#FF4B0F] hover:bg-[#E03E00] text-white px-4 rounded-md text-xs font-bold transition-colors shadow-lg shadow-orange-900/20">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden">
        <MobileNavbar onNavigate={onNavigate} currentPage={currentPage} />
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1F26] border-t border-[#2A2F36] py-8 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/images/fox-logo.svg" className="w-8 h-8" />
              <span className="text-2xl font-black text-white tracking-tighter">LOTTERY</span>
            </div>

            <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-wide">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Help</a>
              <a href="#" className="hover:text-white transition-colors">Developers</a>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2A3441] rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#334155] transition-all cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </div>
              <div className="w-8 h-8 bg-[#2A3441] rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#334155] transition-all cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </div>
              <div className="w-8 h-8 bg-[#2A3441] rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#334155] transition-all cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.996 0c-6.628 0-12 5.372-12 12s5.372 12 12 12 12-5.372 12-12-5.372-12-12-12zm4.496 16.591l-1.649-5.118 4.29-3.264h-5.268l-1.869-5.429-1.869 5.429h-5.268l4.29 3.264-1.649 5.118 4.496-3.327 4.496 3.327z" /></svg>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-[#2A3441] pt-4 text-center text-[10px] text-gray-500">
            © 2024 Fox Lottery. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}