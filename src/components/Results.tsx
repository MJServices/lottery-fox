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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
  }
];

const CrownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.8333 3.5L10.5 7L12.25 10.5H1.75L3.5 7L1.16667 3.5L4.66667 4.66667L7 1.16667L9.33333 4.66667L12.8333 3.5Z" fill="#F97316" />
  </svg>
);

const ResultCard = ({ result }: { result: LotteryResult }) => (
  <div className="bg-[#0F1318] border border-[#1F262E] rounded-xl p-4 flex flex-col h-full shadow-md">
    {/* Badge */}
    <div className="flex justify-center mb-1">
      <span className="bg-[#1A1F26] border border-[#242D36] text-[#94A3B8] px-4 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
        Completed
      </span>
    </div>

    {/* Header */}
    <div className="text-center mb-6">
      <div className="text-[10px] text-[#64748B] font-bold uppercase tracking-widest mb-1.5">Block</div>
      <div className="text-2xl font-black text-white leading-none">{result.blockNumber}</div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 gap-x-2 gap-y-4 mb-6 bg-[#13181D] rounded-lg p-3 border border-[#1F262E]">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-[#64748B] font-bold uppercase tracking-wide">Prize Pool</span>
        <span className="text-[13px] font-black text-white">{result.prizePool}</span>
      </div>
      <div className="flex flex-col gap-1 pl-2 border-l border-[#1F262E]">
        <span className="text-[10px] text-[#64748B] font-bold uppercase tracking-wide">Draw Date</span>
        <span className="text-[13px] font-black text-white">{result.drawDate}</span>
      </div>
      <div className="flex flex-col gap-1 pt-3 border-t border-[#1F262E]">
        <span className="text-[10px] text-[#64748B] font-bold uppercase tracking-wide">Total Tickets</span>
        <span className="text-[13px] font-black text-white">{result.totalTickets}</span>
      </div>
      <div className="flex flex-col gap-1 pt-3 pl-2 border-t border-l border-[#1F262E]">
        <span className="text-[10px] text-[#64748B] font-bold uppercase tracking-wide">Winning Number</span>
        <span className="text-[13px] font-black text-white">{result.winningNumber}</span>
      </div>
    </div>

    {/* Winner Breakdown */}
    <div className="mt-auto">
      <div className="flex justify-between items-center mb-3 px-1">
        <div className="flex items-center gap-1.5">
          <CrownIcon />
          <span className="text-[11px] font-bold text-white tracking-wide">Winner Breakdown</span>
        </div>
        <span className="text-[11px] font-bold text-[#38BDF8] tracking-wide">{result.winners.reduce((acc, curr) => acc + curr.count, 0)} users</span>
      </div>

      <div className="flex justify-between items-center px-1">
        {result.winners.map((winner, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <div className="w-[18px] h-[18px] bg-[#BEFF25] rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(190,255,37,0.3)]">
              <span className="text-[9px] font-black text-[#13181D]">{winner.matches}</span>
            </div>
            <span className="text-[11px] font-bold text-[#94A3B8]">{winner.count}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Results({ onLogout, onNavigate, currentPage }: ResultsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('completed');
  const [visibleResults, setVisibleResults] = useState(6);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleViewMore = () => {
    setVisibleResults(prev => Math.min(prev + 3, mockResults.length));
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
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${currentPage === 'home'
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
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${currentPage === 'lottery'
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
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${currentPage === 'results'
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
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${currentPage === 'leaders'
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
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${currentPage === 'affiliate'
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
                    className={`w-full h-16 rounded-lg p-3 flex items-center gap-3 transition-colors ${currentPage === 'faq'
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
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            {/* Tabs */}
            <div className="flex justify-center mb-8 bg-[#0b0e11] pt-4">
              <div className="flex gap-12">
                {[
                  { id: 'completed', label: 'Completed' },
                  { id: 'active', label: 'Active' },
                  { id: 'pending', label: 'Pending' }
                ].map((tab) => (
                  <div key={tab.id} className="relative pb-2">
                    {activeTab === tab.id && (
                      <div className="absolute -top-4 inset-x-0 h-8 bg-gradient-to-b from-[#BEFF25]/20 to-transparent blur-md"></div>
                    )}
                    <button
                      onClick={() => setActiveTab(tab.id as Tab)}
                      className={`relative font-bold text-sm tracking-wide transition-colors ${activeTab === tab.id ? 'text-white' : 'text-[#64748B] hover:text-gray-400'
                        }`}
                    >
                      {tab.label}
                    </button>
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#BEFF25] shadow-[0_0_10px_#BEFF25]"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Results Grid - 3 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-8">
              {mockResults.slice(0, visibleResults).map((result) => (
                <ResultCard key={result.id} result={result} />
              ))}
            </div>

            {/* View More Button */}
            {visibleResults < mockResults.length && (
              <div className="relative mt-8">
                <div className="absolute inset-0 bg-gradient-to-t from-[#13181D] via-[#13181D]/80 to-transparent -top-20 pointer-events-none"></div>
                <div className="flex justify-center relative z-10">
                  <button
                    onClick={handleViewMore}
                    className="bg-[#1F2937] border border-[#374151] text-[#9CA3AF] text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-[#374151] hover:text-white transition-colors shadow-lg"
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