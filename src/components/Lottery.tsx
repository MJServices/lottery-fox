import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Footer from './Footer';
import { Page } from '../types';
import MobileNavbar from './MobileNavbar';

interface LotteryProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

interface PreviousWin {
  id: string;
  user: string;
  date: string;
  ticketAmount: string;
  ticketPrice: string;
  numbers: (number | string)[];
  winningNumbers: (number | string)[];
  result: string;
}

interface LotteryCard {
  id: string;
  blockNumber: string;
  status: 'Expired' | 'Active' | 'Next round' | 'Coming soon';
  jackpot?: string;
  prizePool?: string;
  timeLeft?: string;
  participants?: string;
}

const mockPreviousWins: PreviousWin[] = [
  {
    id: '1',
    user: '0xA9f',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '569 USD',
    numbers: [5, 3, 8, 9, 'K', 'J'],
    winningNumbers: [5, 3, 8, 9, 'K', 'J'],
    result: '569 USD'
  },
  {
    id: '2',
    user: '0xA9f',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '569 USD',
    numbers: [5, 3, 8, 9, 'K', 'J'],
    winningNumbers: [5, 3, 8, 9, 'K', 'J'],
    result: '569 USD'
  },
  {
    id: '3',
    user: '0xA9f',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '569 USD',
    numbers: [5, 3, 8, 9, 'K', 'J'],
    winningNumbers: [5, 3, 8, 9, 'K', 'J'],
    result: '569 USD'
  },
  {
    id: '4',
    user: '0xA9f',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '569 USD',
    numbers: [5, 3, 8, 9, 'K', 'J'],
    winningNumbers: [5, 3, 8, 9, 'K', 'J'],
    result: '569 USD'
  },
  {
    id: '5',
    user: '0xA9f',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '569 USD',
    numbers: [5, 3, 8, 9, 'K', 'J'],
    winningNumbers: [5, 3, 8, 9, 'K', 'J'],
    result: '569 USD'
  },
  {
    id: '6',
    user: '0xA9f',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '569 USD',
    numbers: [5, 3, 8, 9, 'K', 'J'],
    winningNumbers: [5, 3, 8, 9, 'K', 'J'],
    result: '569 USD'
  },
  {
    id: '7',
    user: '0xA9f',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '569 USD',
    numbers: [5, 3, 8, 9, 'K', 'J'],
    winningNumbers: [5, 3, 8, 9, 'K', 'J'],
    result: '569 USD'
  },
  {
    id: '8',
    user: '0xA9f',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '569 USD',
    numbers: [5, 3, 8, 9, 'K', 'J'],
    winningNumbers: [5, 3, 8, 9, 'K', 'J'],
    result: '569 USD'
  },
  {
    id: '9',
    user: '0xA9f',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '569 USD',
    numbers: [5, 3, 8, 9, 'K', 'J'],
    winningNumbers: [5, 3, 8, 9, 'K', 'J'],
    result: '569 USD'
  }
];

const mockLotteryCards: LotteryCard[] = [
  {
    id: '1',
    blockNumber: '#239504',
    status: 'Expired',
    jackpot: '17.6K',
    prizePool: '17.6K',
    participants: 'Results pending'
  },
  {
    id: '2',
    blockNumber: '#239504',
    status: 'Active',
    jackpot: '17.6K',
    prizePool: '17.6K',
    participants: 'Participate'
  },
  {
    id: '3',
    blockNumber: '#239504',
    status: 'Next round',
    jackpot: '17.6K',
    prizePool: '17.6K',
    participants: 'Participate'
  },
  {
    id: '4',
    blockNumber: '#239504',
    status: 'Coming soon',
    timeLeft: 'Starts in 09:44'
  }
];

const PreviousWinsTable = () => (
  <div className="w-full">
    {/* Section Header */}
    <div className="flex items-center justify-center gap-2 mb-6">
      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-400/33">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 1.5H8.5V0.5H3.5V1.5H2.5C1.4 1.5 0.5 2.4 0.5 3.5C0.5 4.6 1.4 5.5 2.5 5.5H3.5V6.5C3.5 7.88 4.62 9 6 9C7.38 9 8.5 7.88 8.5 6.5V5.5H9.5C10.6 5.5 11.5 4.6 11.5 3.5C11.5 2.4 10.6 1.5 9.5 1.5ZM2.5 4.5C1.95 4.5 1.5 4.05 1.5 3.5C1.5 2.95 1.95 2.5 2.5 2.5H3.5V4.5H2.5ZM6 8C5.17 8 4.5 7.33 4.5 6.5V1.5H7.5V6.5C7.5 7.33 6.83 8 6 8ZM9.5 4.5H8.5V2.5H9.5C10.05 2.5 10.5 2.95 10.5 3.5C10.5 4.05 10.05 4.5 9.5 4.5ZM7 9.5H5V10.5H7V9.5ZM8 10.5H4V11.5H8V10.5Z" fill="white" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white">Previous wins</h3>
    </div>

    <div className="bg-[#0b0e11] rounded-2xl overflow-hidden border border-[#1A1F26] p-1">
      {/* Tabs */}
      <div className="flex justify-center mb-2 bg-[#0b0e11] pt-4">
        <div className="flex gap-8">
          <div className="relative pb-2">
            <div className="absolute -top-4 inset-x-0 h-8 bg-gradient-to-b from-[#BEFF25]/20 to-transparent blur-md"></div>
            <button className="relative text-white font-bold text-sm tracking-wide">
              Best drops
            </button>
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#BEFF25] shadow-[0_0_10px_#BEFF25]"></div>
          </div>

          <button className="text-[#64748B] font-bold text-sm tracking-wide hover:text-gray-400 pb-2">
            Highest wins
          </button>
          <button className="text-[#64748B] font-bold text-sm tracking-wide hover:text-gray-400 pb-2">
            My bets
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-[#0b0e11] px-4 pb-4">
        <table className="w-full min-w-[1000px] border-collapse">
          <thead>
            <tr className="border-b border-transparent">
              <th className="py-4 px-4 text-left text-[#475569] text-[10px] font-bold uppercase tracking-wider pl-6">User</th>
              <th className="py-4 px-4 text-left text-[#475569] text-[10px] font-bold uppercase tracking-wider">Date</th>
              <th className="py-4 px-4 text-left text-[#475569] text-[10px] font-bold uppercase tracking-wider">Ticket amount</th>
              <th className="py-4 px-4 text-left text-[#475569] text-[10px] font-bold uppercase tracking-wider">Ticket price</th>
              <th className="py-4 px-4 text-left text-[#475569] text-[10px] font-bold uppercase tracking-wider">Numbers</th>
              <th className="py-4 px-4 text-left text-[#475569] text-[10px] font-bold uppercase tracking-wider">Winning numbers</th>
              <th className="py-4 px-4 text-left text-[#475569] text-[10px] font-bold uppercase tracking-wider">Profit</th>
            </tr>
          </thead>
          <tbody className="space-y-1">
            {mockPreviousWins.map((win, index) => (
              <tr key={index} className="group hover:bg-[#13181D] transition-colors rounded-xl">
                <td className="py-3 px-4 pl-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#242D36] ring-1 ring-[#242D36]">
                      <img src="/images/lottery.png" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white text-[13px] font-bold tracking-wide">{win.user}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2 text-[#64748B] group-hover:text-gray-400 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
                      <path d="M12 6V12L16 14" stroke="#0F1318" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[12px] font-bold">{win.date}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <img src="/images/ticket-prize-icon.png" alt="Ticket" className="w-4 h-4 object-contain brightness-0 invert opacity-80" style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(21%) saturate(935%) hue-rotate(39deg) brightness(103%) contrast(104%)' }} />
                    <span className="text-white text-[12px] font-bold tracking-wide">{win.ticketAmount}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444] shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                    <span className="text-white text-[12px] font-bold tracking-wide">{win.ticketPrice}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-1.5">
                    {win.numbers.map((num, idx) => (
                      <div key={idx} className="w-[22px] h-[22px] rounded-[6px] bg-gradient-to-t from-[#B0451B] to-[#F17538] border-t border-[#FF9F7A]/50 flex items-center justify-center shadow-lg">
                        <span className="text-white text-[11px] font-black drop-shadow-md">{num}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-1.5">
                    {win.winningNumbers.map((num, idx) => (
                      <div key={idx} className="w-[22px] h-[22px] rounded-[6px] bg-gradient-to-t from-[#B0451B] to-[#F17538] border-t border-[#FF9F7A]/50 flex items-center justify-center shadow-lg">
                        <span className="text-white text-[11px] font-black drop-shadow-md">{num}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <div className="w-4 h-4 rounded-full bg-[#BEFF25] flex justify-center items-center text-[#13181D] font-black text-[12px] shadow-[0_0_8px_rgba(190,255,37,0.4)]">+</div>
                    <span className="text-white text-[12px] font-bold tracking-wide whitespace-nowrap">+ {win.result}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const LotteryCardComponent = ({ card }: { card: LotteryCard }) => {
  const isComingSoon = card.status === 'Coming soon';

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Active':
        return {
          container: 'border-[#BEFF25] shadow-[0_0_20px_rgba(190,255,37,0.25)] bg-gradient-to-b from-[#BEFF25]/20 to-[#BEFF25]/5',
          badge: 'bg-[#BEFF25] text-[#13181D]',
          button: 'bg-[#BEFF25] hover:bg-[#a3d91d] text-[#13181D] shadow-[0_4px_0_0_#8fb810]',
          buttonText: 'Participate',
          glow: 'from-[#BEFF25]/60 via-[#BEFF25]/10 to-transparent',
          badgeText: 'ACTIVE'
        };
      case 'Expired':
        return {
          container: 'border-[#334155] bg-gradient-to-b from-[#334155]/20 to-[#1A1F26]',
          badge: 'bg-[#334155] text-[#94A3B8]',
          button: 'bg-[#1F2937] text-[#64748B] cursor-not-allowed border border-[#2A3441]',
          buttonText: 'Result pending',
          glow: 'from-[#475569]/20 to-transparent',
          badgeText: 'EXPIRED'
        };
      case 'Next round':
        return {
          container: 'border-[#A855F7] shadow-[0_0_20px_rgba(168,85,247,0.25)] bg-gradient-to-b from-[#A855F7]/20 to-[#A855F7]/5',
          badge: 'bg-[#A855F7] text-white',
          button: 'bg-[#BEFF25] hover:bg-[#a3d91d] text-[#13181D] shadow-[0_4px_0_0_#8fb810]',
          buttonText: 'Participate',
          glow: 'from-[#A855F7]/60 via-[#A855F7]/10 to-transparent',
          badgeText: 'NEXT ROUND'
        };
      case 'Coming soon':
        return {
          container: 'border-[#242D36] bg-[#1A1F26] flex flex-col justify-center items-center',
          badge: 'bg-[#F97316] text-[#13181D]', // Orange badge
          button: 'bg-[#1F2937] text-[#4B5563] border border-[#2A3441] cursor-not-allowed uppercase text-[10px] font-bold tracking-wider',
          buttonText: 'Participate',
          glow: '',
          badgeText: 'COMING SOON'
        };
      default:
        return {
          container: 'border-[#242D36]',
          badge: 'bg-gray-500 text-white',
          button: 'bg-gray-500 text-white',
          buttonText: status,
          glow: '',
          badgeText: status
        };
    }
  };

  const styles = getStatusStyles(card.status);

  if (isComingSoon) {
    return (
      <div className={`rounded-2xl p-4 border relative overflow-hidden flex flex-col items-center justify-between text-center min-h-[220px] ${styles.container}`}>
        <span className={`px-2 py-0.5 rounded-sm text-[10px] font-black uppercase tracking-wide mb-4 ${styles.badge}`}>
          {styles.badgeText}
        </span>

        <div className="flex flex-col items-center gap-1 mb-6">
          <span className="text-[#94A3B8] text-[9px] uppercase font-bold tracking-widest">Block</span>
          <span className="text-white text-2xl font-black">{card.blockNumber}</span>
          <span className="text-[#94A3B8] text-[11px] font-medium mt-1">{card.timeLeft}</span>
        </div>

        <button className={`w-full py-3 rounded-xl ${styles.button}`}>
          {styles.buttonText}
        </button>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl p-3 sm:p-4 border relative overflow-hidden flex flex-col gap-3 sm:gap-4 group transition-all min-h-[220px] ${styles.container}`}>
      {/* Top Glow Gradient */}
      {styles.glow && (
        <div className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b ${styles.glow} pointer-events-none`}></div>
      )}

      {/* Header: Badge & Block Number */}
      <div className="flex justify-between items-center z-10">
        <span className={`px-2.5 py-1 rounded-sm text-[10px] sm:text-[11px] font-black uppercase tracking-wider ${styles.badge}`}>
          {styles.badgeText}
        </span>
        <div className="flex flex-col items-end leading-tight">
          <span className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider">Block</span>
          <span className="text-sm font-bold text-white">{card.blockNumber}</span>
        </div>
      </div>

      {/* Pools Section - Split Cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 flex-1 relative z-10">
        {/* Jackpot Box - Purple */}
        <div className="bg-[#1E1B2E] rounded-xl p-2 sm:p-3 relative overflow-hidden flex flex-col justify-end min-h-[80px] sm:min-h-[100px] border border-[#4C1D95]/30 group-hover:border-[#4C1D95]/60 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2E1065]/40 rounded-xl"></div>
          <span className="text-[9px] sm:text-[10px] font-bold text-[#C4B5FD] uppercase mb-0.5 relative z-10 tracking-wide">Jackpot :</span>
          <span className="text-lg sm:text-[20px] font-black text-white relative z-10 leading-none">{card.jackpot}</span>

          {/* 3D Bag Image */}
          <div className="absolute -right-1 top-1 w-12 h-12 sm:w-16 sm:h-16 z-20 pointer-events-none">
            <img src="/images/lottery.png" alt="Jackpot" className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]" />
          </div>
        </div>

        {/* Prize Pool Box - Green */}
        <div className="bg-[#142111] rounded-xl p-2 sm:p-3 relative overflow-hidden flex flex-col justify-end min-h-[80px] sm:min-h-[100px] border border-[#365314]/30 group-hover:border-[#365314]/60 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#14532D]/40 rounded-xl"></div>
          <span className="text-[9px] sm:text-[10px] font-bold text-[#D9F99D] uppercase mb-0.5 relative z-10 tracking-wide">Prize Pool :</span>
          <span className="text-lg sm:text-[20px] font-black text-white relative z-10 leading-none">{card.prizePool}</span>

          {/* 3D Gift Image */}
          <div className="absolute -right-2 top-0 w-12 h-12 sm:w-16 sm:h-16 z-20 pointer-events-none">
            <img src="/images/gift-icon-removebg-preview.png" alt="Prize" className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]" />
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        className={`w-full py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wide transition-all active:scale-[0.98] z-10 ${styles.button}`}
        disabled={card.status === 'Expired'}
      >
        {styles.buttonText}
      </button>
    </div>
  );
};

export default function Lottery({ onLogout, onNavigate, currentPage }: LotteryProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#13181D] text-white">
      {/* Header */}
      <Header onLogout={onLogout} onNavigate={onNavigate} currentPage={currentPage} />

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileSidebarOpen(false)}>
          <div className="w-[320px] h-full bg-[#13181D] border-r border-gray-800" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="text-gray-400 hover:text-white p-2"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                {/* Lucky Hour Card */}
                <div className="w-full h-24 bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] rounded-xl p-4 relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-white text-sm font-black mb-1">LUCKY</div>
                    <div className="w-full h-8 flex items-center justify-center mb-1">
                      <img src="/images/lucky-hour-avatar-1db0ff.png" alt="Lucky Hour" className="w-6 h-6 object-contain rounded-full" />
                    </div>
                    <div className="text-white text-sm font-black">HOUR</div>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="space-y-3">
                  {/* Home */}
                  <button
                    onClick={() => {
                      onNavigate('home');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-xl p-4 flex items-center gap-4 transition-all ${currentPage === 'home'
                      ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg'
                      : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                      }`}
                  >
                    <img src="/images/home-icon.png" alt="Home" className="w-7 h-7 object-contain" />
                    <span className={`font-bold text-lg ${currentPage === 'home' ? 'text-white' : 'text-gray-400'}`}>Home</span>
                  </button>

                  {/* Lottery */}
                  <button
                    onClick={() => {
                      onNavigate('lottery');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-xl p-4 flex items-center gap-4 transition-all ${currentPage === 'lottery'
                      ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg'
                      : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                      }`}
                  >
                    <img src="/images/lottery-icon.png" alt="Lottery" className="w-7 h-7 object-contain" />
                    <span className={`font-bold text-lg ${currentPage === 'lottery' ? 'text-white' : 'text-gray-400'}`}>Lottery</span>
                  </button>

                  {/* Results */}
                  <button
                    onClick={() => {
                      onNavigate('results');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-xl p-4 flex items-center gap-4 transition-all ${currentPage === 'results'
                      ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg'
                      : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                      }`}
                  >
                    <img src="/images/checkmark-badge-icon.svg" alt="Results" className="w-7 h-7 object-contain" />
                    <span className={`font-bold text-lg ${currentPage === 'results' ? 'text-white' : 'text-gray-400'}`}>Results</span>
                  </button>

                  {/* Leaders */}
                  <button
                    onClick={() => {
                      onNavigate('leaders');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-xl p-4 flex items-center gap-4 transition-all ${currentPage === 'leaders'
                      ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg'
                      : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                      }`}
                  >
                    <img src="/images/champion-icon.svg" alt="Leaders" className="w-7 h-7 object-contain" />
                    <span className={`font-bold text-lg ${currentPage === 'leaders' ? 'text-white' : 'text-gray-400'}`}>Leaders</span>
                  </button>

                  {/* Affiliate */}
                  <button
                    onClick={() => {
                      onNavigate('affiliate');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-xl p-4 flex items-center gap-4 transition-all ${currentPage === 'affiliate'
                      ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg'
                      : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                      }`}
                  >
                    <img src="/images/user-multiple-icon.svg" alt="Affiliate" className="w-7 h-7 object-contain" />
                    <span className={`font-bold text-lg ${currentPage === 'affiliate' ? 'text-white' : 'text-gray-400'}`}>Affiliate</span>
                  </button>

                  {/* FAQ */}
                  <button
                    onClick={() => {
                      onNavigate('faq');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-xl p-4 flex items-center gap-4 transition-all ${currentPage === 'faq'
                      ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg'
                      : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                      }`}
                  >
                    <img src="/images/chat-question-icon.svg" alt="FAQ" className="w-7 h-7 object-contain" />
                    <span className={`font-bold text-lg ${currentPage === 'faq' ? 'text-white' : 'text-gray-400'}`}>FAQ</span>
                  </button>
                </div>

                {/* Log out */}
                <button
                  onClick={() => {
                    onLogout();
                    setIsMobileSidebarOpen(false);
                  }}
                  className="w-full h-16 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 rounded-xl p-4 flex items-center gap-4 hover:border-gray-600 transition-all mt-6"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-gray-400 font-bold text-lg">Log out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-74px)]">
        {/* Desktop Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block">
          <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
        </div>

        {/* Main Content - Full width on mobile, flexible on desktop */}
        <div className="flex-1 flex flex-col xl:flex-row">
          {/* Lottery Content */}
          <div className="flex-1 p-3 sm:p-4 lg:p-6 xl:p-8">
            {/* Hero Section */}
            <div className="relative mb-6 sm:mb-8 w-full">
              {/* Banner Background Image - Full width */}
              <img
                src="/images/lottery-hero-main.png"
                alt="Lottery Banner"
                className="w-full h-auto rounded-xl"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  display: 'block',
                  maxWidth: '100%'
                }}
              />
            </div>

            {/* Live & Upcoming Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-400/33">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1L7.09 4.26L11 4.27L8 6.14L8.91 9.09L6 7.77L3.09 9.09L4 6.14L1 4.27L4.91 4.26L6 1Z" fill="white" />
                  </svg>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Live & Upcoming</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
                {mockLotteryCards.map((card) => (
                  <LotteryCardComponent key={card.id} card={card} />
                ))}
              </div>
            </div>

            {/* Previous Wins */}
            <div className="mb-6 sm:mb-8">
              <PreviousWinsTable />
            </div>
          </div>

          {/* Chat - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden xl:block">
            <Chat />
          </div>
        </div>

        {/* Mobile Chat Button - Show on mobile only */}
        <div className="xl:hidden border-t border-[#242D36] bg-[#13181D] p-3 pb-20">
          <button className="w-full p-3 text-left text-white font-bold text-sm bg-gradient-to-r from-[#9726E3] to-[#FF4B0F] rounded-lg hover:opacity-90 transition-opacity flex items-center justify-between">
            <span>💬 Open Chat</span>
            <span className="text-xs opacity-80">544 online</span>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar onNavigate={onNavigate} currentPage={currentPage} />

      {/* Footer */}
      <Footer />
    </div>
  );
}