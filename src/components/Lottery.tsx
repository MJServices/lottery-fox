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
  numbers: number[];
  winningNumbers: number[];
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
    user: 'DaxAli',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '500 USD',
    numbers: [3, 1, 8, 4],
    winningNumbers: [3, 1, 5, 6, 8, 4],
    result: '1 569 USD'
  },
  {
    id: '2',
    user: 'DaxAli',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '500 USD',
    numbers: [3, 1, 8, 4],
    winningNumbers: [3, 1, 5, 6, 8, 4],
    result: '1 569 USD'
  },
  {
    id: '3',
    user: 'DaxAli',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '500 USD',
    numbers: [3, 1, 8, 4],
    winningNumbers: [3, 1, 5, 6, 8, 4],
    result: '1 569 USD'
  },
  {
    id: '4',
    user: 'DaxAli',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '500 USD',
    numbers: [3, 1, 8, 4],
    winningNumbers: [3, 1, 5, 6, 8, 4],
    result: '1 569 USD'
  },
  {
    id: '5',
    user: 'DaxAli',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '500 USD',
    numbers: [3, 1, 8, 4],
    winningNumbers: [3, 1, 5, 6, 8, 4],
    result: '1 569 USD'
  },
  {
    id: '6',
    user: 'DaxAli',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '500 USD',
    numbers: [3, 1, 8, 4],
    winningNumbers: [3, 1, 5, 6, 8, 4],
    result: '1 569 USD'
  },
  {
    id: '7',
    user: 'DaxAli',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '500 USD',
    numbers: [3, 1, 8, 4],
    winningNumbers: [3, 1, 5, 6, 8, 4],
    result: '1 569 USD'
  },
  {
    id: '8',
    user: 'DaxAli',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '500 USD',
    numbers: [3, 1, 8, 4],
    winningNumbers: [3, 1, 5, 6, 8, 4],
    result: '1 569 USD'
  },
  {
    id: '9',
    user: 'DaxAli',
    date: '2 min ago',
    ticketAmount: '2 tickets',
    ticketPrice: '500 USD',
    numbers: [3, 1, 8, 4],
    winningNumbers: [3, 1, 5, 6, 8, 4],
    result: '1 569 USD'
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
  <div className="bg-[#13181D] rounded-xl border border-[#242D36]">
    {/* Header */}
    <div className="flex items-center gap-2 p-4 sm:p-6 pb-4">
      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-400/33">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1L7.09 4.26L11 4.27L8 6.14L8.91 9.09L6 7.77L3.09 9.09L4 6.14L1 4.27L4.91 4.26L6 1Z" fill="white" />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-white">Previous wins</h3>
    </div>

    {/* Tab buttons */}
    <div className="px-4 sm:px-6 pb-4">
      <div className="flex gap-2 sm:gap-4 overflow-x-auto">
        <button className="text-sm font-semibold text-white border-b-2 border-[#BEFF25] pb-2 whitespace-nowrap">
          Best drops
        </button>
        <button className="text-sm font-semibold text-gray-400 pb-2 whitespace-nowrap">
          Highest wins
        </button>
        <button className="text-sm font-semibold text-gray-400 pb-2 whitespace-nowrap">
          My bets
        </button>
      </div>
    </div>

    {/* Table */}
    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-[#242D36]">
              <th className="text-left text-xs font-semibold text-gray-400 pb-3 uppercase">User</th>
              <th className="text-left text-xs font-semibold text-gray-400 pb-3 uppercase">Date</th>
              <th className="text-left text-xs font-semibold text-gray-400 pb-3 uppercase">Ticket amount</th>
              <th className="text-left text-xs font-semibold text-gray-400 pb-3 uppercase">Ticket price</th>
              <th className="text-left text-xs font-semibold text-gray-400 pb-3 uppercase">Numbers</th>
              <th className="text-left text-xs font-semibold text-gray-400 pb-3 uppercase">Winning numbers</th>
              <th className="text-left text-xs font-semibold text-gray-400 pb-3 uppercase">Result</th>
            </tr>
          </thead>
          <tbody>
            {mockPreviousWins.map((win, index) => (
              <tr key={win.id} className={index !== mockPreviousWins.length - 1 ? "border-b border-[#1A1F26]" : ""}>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#2A3441] rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">D</span>
                    </div>
                    <span className="text-sm text-white font-medium">{win.user}</span>
                  </div>
                </td>
                <td className="py-3 text-sm text-gray-400">{win.date}</td>
                <td className="py-3">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-[#BEFF25] rounded flex items-center justify-center">
                      <span className="text-xs text-black font-bold">2</span>
                    </div>
                    <span className="text-sm text-[#BEFF25] font-semibold">{win.ticketAmount}</span>
                  </div>
                </td>
                <td className="py-3">
                  <span className="text-sm text-red-400 font-semibold">{win.ticketPrice}</span>
                </td>
                <td className="py-3">
                  <div className="flex gap-1">
                    {win.numbers.map((num, idx) => (
                      <div key={idx} className="w-6 h-6 bg-[#FF6B35] rounded flex items-center justify-center">
                        <span className="text-xs text-white font-bold">{num}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex gap-1">
                    {win.winningNumbers.map((num, idx) => (
                      <div key={idx} className="w-6 h-6 bg-[#FF6B35] rounded flex items-center justify-center">
                        <span className="text-xs text-white font-bold">{num}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-[#BEFF25] rounded-full flex items-center justify-center">
                      <span className="text-xs text-black font-bold">$</span>
                    </div>
                    <span className="text-sm text-[#BEFF25] font-bold">{win.result}</span>
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
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Active':
        return {
          badge: 'bg-[#BEFF25] text-[#13181D]',
          button: 'bg-[#BEFF25] hover:bg-[#a3d91d] text-[#13181D] shadow-[0_4px_0_0_#8fb810]',
          buttonText: 'Participate'
        };
      case 'Expired':
        return {
          badge: 'bg-[#374151] text-gray-300',
          button: 'bg-[#1F2937] text-gray-500 cursor-not-allowed border border-[#374151]',
          buttonText: 'Result pending'
        };
      case 'Next round':
        return {
          badge: 'bg-[#9333EA] text-white',
          button: 'bg-[#BEFF25] hover:bg-[#a3d91d] text-[#13181D] shadow-[0_4px_0_0_#8fb810]',
          buttonText: 'Participate'
        };
      case 'Coming soon':
        return {
          badge: 'bg-[#F59E0B] text-white',
          button: 'bg-[#374151] text-gray-400 cursor-not-allowed border border-[#374151]',
          buttonText: card.timeLeft || 'Coming soon'
        };
      default:
        return {
          badge: 'bg-gray-500 text-white',
          button: 'bg-gray-500 text-white',
          buttonText: status
        };
    }
  };

  const styles = getStatusStyles(card.status);

  return (
    <div className="bg-[#1A1F26] rounded-2xl p-3 sm:p-4 border border-[#242D36] relative overflow-hidden flex flex-col gap-3 sm:gap-4 group hover:border-[#3A4651] transition-all">
      {/* Header: Badge & Block Number */}
      <div className="flex justify-between items-center">
        <span className={`px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider ${styles.badge}`}>
          {card.status}
        </span>
        <div className="flex items-center gap-1.5 opacity-60">
          <span className="text-[10px] sm:text-xs font-medium text-gray-400">Block</span>
          <span className="text-xs sm:text-sm font-bold text-white">{card.blockNumber}</span>
        </div>
      </div>

      {/* Pools Section - Split Cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {/* Jackpot Box - Purple */}
        <div className="bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] rounded-xl p-2 sm:p-3 relative overflow-hidden flex flex-col justify-center min-h-[80px] sm:min-h-[100px]">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/20 blur-xl rounded-full -mr-8 -mt-8"></div>

          <span className="text-[10px] sm:text-xs font-medium text-purple-200 mb-0.5 sm:mb-1 relative z-10">Jackpot :</span>
          <span className="text-lg sm:text-2xl font-black text-white relative z-10">{card.jackpot || '0'}</span>

          {/* Image */}
          <div className="absolute -right-1 -bottom-2 w-12 h-12 sm:w-16 sm:h-16 opacity-100">
            <img src="/images/lottery.png" alt="Jackpot" className="w-full h-full object-contain drop-shadow-lg transform rotate-12" />
          </div>
        </div>

        {/* Prize Pool Box - Green */}
        <div className="bg-gradient-to-br from-[#4D7C0F] to-[#65A30D] rounded-xl p-2 sm:p-3 relative overflow-hidden flex flex-col justify-center min-h-[80px] sm:min-h-[100px]">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-lime-400/20 blur-xl rounded-full -mr-8 -mt-8"></div>

          <span className="text-[10px] sm:text-xs font-medium text-lime-100 mb-0.5 sm:mb-1 relative z-10">Prize Pool :</span>
          <span className="text-lg sm:text-2xl font-black text-white relative z-10">{card.prizePool || '0'}</span>

          {/* Image */}
          <div className="absolute -right-1 -bottom-2 w-12 h-12 sm:w-16 sm:h-16 opacity-100">
            <img src="/images/gift-icon-removebg-preview.png" alt="Prize" className="w-full h-full object-contain drop-shadow-lg transform -rotate-6" />
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        className={`w-full py-2.5 sm:py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wide transition-all active:scale-[0.98] ${styles.button}`}
        disabled={card.status === 'Expired' || card.status === 'Coming soon'}
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
                src="/images/lottery-banner.png"
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
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
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