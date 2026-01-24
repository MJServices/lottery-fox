import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Footer from './Footer';
import { Page } from '../types';
import MobileNavbar from './MobileNavbar';

type Tab = 'completed' | 'active' | 'pending';

interface ResultsProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

interface LotteryResult {
  id: string;
  blockNumber: string;
  status: 'completed';
  prizePool: string;
  drawDate: string;
  totalTickets: string;
  winningNumber: string;
  winners: {
    matches: number;
    count: number;
  }[];
}

const mockResults: LotteryResult[] = [
  {
    id: '1',
    blockNumber: '#239504',
    status: 'completed',
    prizePool: '17.6K USDT',
    drawDate: 'December 21, 2025',
    totalTickets: '8 900',
    winningNumber: 'B3A840',
    winners: [
      { matches: 6, count: 0 },
      { matches: 5, count: 12 },
      { matches: 3, count: 11 },
      { matches: 2, count: 88 },
      { matches: 1, count: 1 }
    ]
  },
  {
    id: '2',
    blockNumber: '#239503',
    status: 'completed',
    prizePool: '15.2K USDT',
    drawDate: 'December 20, 2025',
    totalTickets: '7 650',
    winningNumber: 'A2C940',
    winners: [
      { matches: 6, count: 1 },
      { matches: 5, count: 8 },
      { matches: 3, count: 15 },
      { matches: 2, count: 92 },
      { matches: 1, count: 3 }
    ]
  },
  {
    id: '3',
    blockNumber: '#239502',
    status: 'completed',
    prizePool: '19.8K USDT',
    drawDate: 'December 19, 2025',
    totalTickets: '9 200',
    winningNumber: 'C5F123',
    winners: [
      { matches: 6, count: 0 },
      { matches: 5, count: 6 },
      { matches: 3, count: 22 },
      { matches: 2, count: 105 },
      { matches: 1, count: 2 }
    ]
  },
  {
    id: '4',
    blockNumber: '#239501',
    status: 'completed',
    prizePool: '22.1K USDT',
    drawDate: 'December 18, 2025',
    totalTickets: '10 500',
    winningNumber: 'D8A567',
    winners: [
      { matches: 6, count: 2 },
      { matches: 5, count: 14 },
      { matches: 3, count: 18 },
      { matches: 2, count: 78 },
      { matches: 1, count: 4 }
    ]
  },
  {
    id: '5',
    blockNumber: '#239500',
    status: 'completed',
    prizePool: '16.4K USDT',
    drawDate: 'December 17, 2025',
    totalTickets: '8 100',
    winningNumber: 'E9B234',
    winners: [
      { matches: 6, count: 0 },
      { matches: 5, count: 9 },
      { matches: 3, count: 13 },
      { matches: 2, count: 67 },
      { matches: 1, count: 1 }
    ]
  },
  {
    id: '6',
    blockNumber: '#239499',
    status: 'completed',
    prizePool: '18.7K USDT',
    drawDate: 'December 16, 2025',
    totalTickets: '9 800',
    winningNumber: 'F1C890',
    winners: [
      { matches: 6, count: 1 },
      { matches: 5, count: 11 },
      { matches: 3, count: 25 },
      { matches: 2, count: 95 },
      { matches: 1, count: 3 }
    ]
  }
];

const ChessKingIcon = () => (
  <img src="/images/chess-king.svg" alt="Chess King" className="w-4 h-4" />
);

const StarIcon = () => (
  <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-400/33">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 1L7.09 4.26L11 4.27L8 6.14L8.91 9.09L6 7.77L3.09 9.09L4 6.14L1 4.27L4.91 4.26L6 1Z" fill="white"/>
    </svg>
  </div>
);

const ResultCard = ({ result }: { result: LotteryResult }) => (
  <div className="bg-gradient-to-r from-[#13181D] to-[#1F262E] border border-[#242D36] rounded-xl p-3">
    {/* Header */}
    <div className="flex justify-center items-center mb-3">
      <span className="bg-[#4A5568] text-white px-2 py-1 rounded-md text-xs font-bold">
        Completed
      </span>
    </div>
    
    <div className="text-center mb-3">
      <div className="text-xs text-gray-400 mb-1">Block</div>
      <div className="text-xl font-extrabold text-[#D0D2E9]">{result.blockNumber}</div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 gap-2 mb-4">
      <div className="bg-[#E5F1FF]/5 rounded-lg p-2 text-center">
        <div className="text-xs text-gray-400 mb-1">Prize Pool</div>
        <div className="text-sm font-bold text-white">{result.prizePool}</div>
      </div>
      <div className="bg-[#E5F1FF]/5 rounded-lg p-2 text-center">
        <div className="text-xs text-gray-400 mb-1">Draw Date</div>
        <div className="text-sm font-bold text-white">{result.drawDate}</div>
      </div>
      <div className="bg-[#E5F1FF]/5 rounded-lg p-2 text-center">
        <div className="text-xs text-gray-400 mb-1">Total Tickets</div>
        <div className="text-sm font-bold text-white">{result.totalTickets}</div>
      </div>
      <div className="bg-[#E5F1FF]/5 rounded-lg p-2 text-center">
        <div className="text-xs text-gray-400 mb-1">Winning Number</div>
        <div className="text-sm font-bold text-white">{result.winningNumber}</div>
      </div>
    </div>

    {/* Winner Breakdown */}
    <div className="text-center mb-3">
      <div className="flex items-center justify-center gap-1 mb-2">
        <ChessKingIcon />
        <span className="text-xs font-bold text-white">Winner Breakdown</span>
      </div>
      <span className="text-xs font-bold text-[#00F2FF]">{result.winners.reduce((sum, w) => sum + w.count, 0)} users</span>
    </div>
    
    <div className="bg-[#E5F1FF]/5 rounded-lg p-2 flex justify-center gap-2 flex-wrap">
      {result.winners.map((winner, idx) => (
        <div key={idx} className="flex items-center gap-1">
          <div className="w-5 h-5 bg-[#BEFF25] rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-[#253703]">{winner.matches}</span>
          </div>
          <span className="text-sm font-bold text-white">{winner.count}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Results({ onLogout, onNavigate, currentPage }: ResultsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('completed');
  const [visibleResults, setVisibleResults] = useState(6);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleViewMore = () => {
    setVisibleResults(prev => Math.min(prev + 6, mockResults.length));
  };

  return (
    <div className="min-h-screen bg-[#13181D] text-white">
      {/* Header */}
      <Header onLogout={onLogout} onNavigate={onNavigate} currentPage={currentPage} />
      
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileSidebarOpen(false)}>
          <div className="w-[280px] h-full bg-[#13181D] border-r border-gray-800" onClick={(e) => e.stopPropagation()}>
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-white">Menu</h2>
                <button 
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              {/* Mobile Navigation Items */}
              <div className="space-y-3">
                {/* Lucky Hour Card */}
                <div className="w-full h-20 bg-gradient-to-b from-[#4CAF50] to-[#66BB6A] rounded-lg p-3 relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-white text-sm font-black mb-1">LUCKY</div>
                    <div className="w-full h-6 flex items-center justify-center mb-1">
                      <img src="/images/lucky-hour-avatar-1db0ff.png" alt="Lucky Hour" className="w-5 h-5 object-contain rounded-full" />
                    </div>
                    <div className="text-white text-sm font-black">HOUR</div>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="space-y-2">
                  {/* Home */}
                  <button 
                    onClick={() => {
                      onNavigate('home');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${
                      currentPage === 'home' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/home-icon.png" alt="Home" className="w-6 h-6 object-contain" />
                    <span className={`font-bold ${currentPage === 'home' ? 'text-white' : 'text-gray-400'}`}>Home</span>
                  </button>

                  {/* Lottery */}
                  <button 
                    onClick={() => {
                      onNavigate('lottery');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${
                      currentPage === 'lottery' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/lottery-icon.png" alt="Lottery" className="w-6 h-6 object-contain" />
                    <span className={`font-bold ${currentPage === 'lottery' ? 'text-white' : 'text-gray-400'}`}>Lottery</span>
                  </button>

                  {/* Results */}
                  <button 
                    onClick={() => {
                      onNavigate('results');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${
                      currentPage === 'results' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/checkmark-badge-icon.svg" alt="Results" className="w-6 h-6 object-contain" />
                    <span className={`font-bold ${currentPage === 'results' ? 'text-white' : 'text-gray-400'}`}>Results</span>
                  </button>

                  {/* Leaders */}
                  <button 
                    onClick={() => {
                      onNavigate('leaders');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${
                      currentPage === 'leaders' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/champion-icon.svg" alt="Leaders" className="w-6 h-6 object-contain" />
                    <span className={`font-bold ${currentPage === 'leaders' ? 'text-white' : 'text-gray-400'}`}>Leaders</span>
                  </button>

                  {/* Affiliate */}
                  <button 
                    onClick={() => {
                      onNavigate('affiliate');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${
                      currentPage === 'affiliate' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/user-multiple-icon.svg" alt="Affiliate" className="w-6 h-6 object-contain" />
                    <span className={`font-bold ${currentPage === 'affiliate' ? 'text-white' : 'text-gray-400'}`}>Affiliate</span>
                  </button>

                  {/* FAQ */}
                  <button 
                    onClick={() => {
                      onNavigate('faq');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${
                      currentPage === 'faq' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/chat-question-icon.svg" alt="FAQ" className="w-6 h-6 object-contain" />
                    <span className={`font-bold ${currentPage === 'faq' ? 'text-white' : 'text-gray-400'}`}>FAQ</span>
                  </button>
                </div>

                {/* Log out */}
                <button 
                  onClick={() => {
                    onLogout();
                    setIsMobileSidebarOpen(false);
                  }}
                  className="w-full h-16 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 rounded-lg p-3 flex items-center gap-3 hover:border-gray-600 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-400 font-bold">Log out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-74px)]">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block">
          <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
        </div>
        
        {/* Main Content - Full width on mobile, flexible on desktop */}
        <div className="flex-1 flex flex-col xl:flex-row">
          {/* Results Content */}
          <div className="flex-1 p-4 lg:p-6 xl:p-8">
            {/* Hero Section */}
            <div className="relative mb-8 w-full">
              {/* Banner Background Image - Full width without container */}
              <img 
                src="/images/banner-1.png" 
                alt="Results Banner" 
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

            {/* Tabs and Title */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center gap-2">
                <StarIcon />
                <h2 className="text-lg font-bold">Live & Upcoming</h2>
              </div>
              
              <div className="flex bg-[#1A1A2E]/50 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all relative ${
                    activeTab === 'completed'
                      ? 'bg-gradient-to-r from-green-400/20 to-green-600/20 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeTab === 'completed' && (
                    <div className="absolute inset-0 bg-[#BEFF25] rounded-md opacity-20 blur-md"></div>
                  )}
                  <span className="relative">Completed</span>
                </button>
                <button
                  onClick={() => setActiveTab('active')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                    activeTab === 'active'
                      ? 'bg-gradient-to-r from-green-400/20 to-green-600/20 text-white relative'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                    activeTab === 'pending'
                      ? 'bg-gradient-to-r from-green-400/20 to-green-600/20 text-white relative'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Pending
                </button>
              </div>
            </div>

            {/* Results Grid */}
            <div className="space-y-3 mb-8">
              {/* First row - 3 cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {mockResults.slice(0, Math.min(3, visibleResults)).map((result) => (
                  <ResultCard key={result.id} result={result} />
                ))}
              </div>
              
              {/* Second row - 3 cards */}
              {visibleResults > 3 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  {mockResults.slice(3, Math.min(6, visibleResults)).map((result) => (
                    <ResultCard key={result.id} result={result} />
                  ))}
                </div>
              )}
            </div>

            {/* View More Button */}
            {visibleResults < mockResults.length && (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1216] to-transparent h-32 pointer-events-none"></div>
                <div className="flex justify-center pt-16">
                  <button
                    onClick={handleViewMore}
                    className="bg-gradient-to-r from-[#2B3540] to-[#4A5968] border border-[#4A5968] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  >
                    View more
                  </button>
                </div>
              </div>
            )}
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