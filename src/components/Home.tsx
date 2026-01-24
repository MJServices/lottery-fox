import { useState } from 'react';
import { LotteryGame, User, Page } from '../types/index';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Chat from './Chat';
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';
import ResponsiveLayout from './ResponsiveLayout';

interface HomeProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
  onNavigateToWallet?: () => void;
  onNavigateToHistory?: () => void;
  onNavigateToSettings?: () => void;
  onGameSelect?: (game: LotteryGame) => void;
  onTicketPurchase?: (numbers: number[], powerball?: number, ticketCount?: number) => void;
  selectedGame?: LotteryGame | null;
  user?: User;
}

export default function Home({ onLogout, onNavigate, currentPage }: HomeProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#13181D] text-white">
      {/* Header */}
      <Header onLogout={onLogout} onNavigate={onNavigate} currentPage={currentPage} />
      
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileSidebarOpen(false)}>
          <div className="w-[280px] sm:w-[320px] h-full bg-[#13181D] border-r border-gray-800" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-white">Menu</h2>
                <button 
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="text-gray-400 hover:text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              {/* Mobile Navigation Items */}
              <div className="space-y-3 sm:space-y-4">
                {/* Lucky Hour Card */}
                <button className="w-full h-20 sm:h-24 bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] rounded-xl p-3 sm:p-4 relative overflow-hidden hover:from-[#5CBF60] hover:to-[#7BC87B] transition-all cursor-pointer shadow-lg">
                  <div className="text-center relative z-10">
                    <div className="text-white text-xs sm:text-sm font-black mb-1 drop-shadow-md">LUCKY</div>
                    <div className="w-full h-6 sm:h-8 flex items-center justify-center mb-1">
                      <img src="/images/lucky-hour-avatar-1db0ff.png" alt="Lucky Hour" className="w-5 h-5 sm:w-6 sm:h-6 object-contain rounded-full border-2 border-white/30" />
                    </div>
                    
                  </div>
                  
                  {/* Background decorative elements for better contrast */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/15 rounded-full"></div>
                  
                  {/* Subtle overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-xl"></div>
                </button>

                {/* Navigation Items */}
                <div className="space-y-2 sm:space-y-3">
                  {/* Home */}
                  <button 
                    onClick={() => {
                      onNavigate('home');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${
                      currentPage === 'home' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/home-icon.png" alt="Home" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                    <span className={`font-bold text-base sm:text-lg ${currentPage === 'home' ? 'text-white' : 'text-gray-400'}`}>Home</span>
                  </button>

                  {/* Lottery */}
                  <button 
                    onClick={() => {
                      onNavigate('lottery');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${
                      currentPage === 'lottery' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/lottery-icon.png" alt="Lottery" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                    <span className={`font-bold text-base sm:text-lg ${currentPage === 'lottery' ? 'text-white' : 'text-gray-400'}`}>Lottery</span>
                  </button>

                  {/* Results */}
                  <button 
                    onClick={() => {
                      onNavigate('results');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${
                      currentPage === 'results' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/checkmark-badge-icon.svg" alt="Results" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                    <span className={`font-bold text-base sm:text-lg ${currentPage === 'results' ? 'text-white' : 'text-gray-400'}`}>Results</span>
                  </button>

                  {/* Leaders */}
                  <button 
                    onClick={() => {
                      onNavigate('leaders');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${
                      currentPage === 'leaders' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/champion-icon.svg" alt="Leaders" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                    <span className={`font-bold text-base sm:text-lg ${currentPage === 'leaders' ? 'text-white' : 'text-gray-400'}`}>Leaders</span>
                  </button>

                  {/* Affiliate */}
                  <button 
                    onClick={() => {
                      onNavigate('affiliate');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${
                      currentPage === 'affiliate' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/user-multiple-icon.svg" alt="Affiliate" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                    <span className={`font-bold text-base sm:text-lg ${currentPage === 'affiliate' ? 'text-white' : 'text-gray-400'}`}>Affiliate</span>
                  </button>

                  {/* FAQ */}
                  <button 
                    onClick={() => {
                      onNavigate('faq');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${
                      currentPage === 'faq' 
                        ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg' 
                        : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img src="/images/chat-question-icon.svg" alt="FAQ" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                    <span className={`font-bold text-base sm:text-lg ${currentPage === 'faq' ? 'text-white' : 'text-gray-400'}`}>FAQ</span>
                  </button>
                </div>

                {/* Log out */}
                <button 
                  onClick={() => {
                    onLogout();
                    setIsMobileSidebarOpen(false);
                  }}
                  className="w-full h-14 sm:h-16 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:border-gray-600 transition-all mt-4 sm:mt-6"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-400 font-bold text-base sm:text-lg">Log out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-74px)] relative">
        {/* Desktop Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block flex-shrink-0">
          <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
        </div>
        
        {/* Main Content - Full width on mobile, flexible on desktop */}
        <div className="flex-1 flex flex-col xl:flex-row min-h-0 w-full overflow-hidden">
          {/* Home Content */}
          <div className="flex-1 overflow-y-auto pb-20 lg:pb-0 w-full">
            <ResponsiveLayout>
              <MainContent />
            </ResponsiveLayout>
          </div>
          
          {/* Chat - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden xl:block flex-shrink-0">
            <Chat />
          </div>
        </div>
        
        {/* Mobile Chat Button - Show on mobile only */}
        <div className="xl:hidden border-t border-[#242D36] bg-[#13181D] p-3 sm:p-4 absolute bottom-0 left-0 right-0 z-10">
          <button className="w-full p-3 sm:p-4 text-left text-white font-bold text-sm sm:text-base bg-gradient-to-r from-[#9726E3] to-[#FF4B0F] rounded-lg hover:opacity-90 transition-opacity flex items-center justify-between">
            <span>💬 Open Chat</span>
            <span className="text-xs sm:text-sm opacity-80">544 online</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Navbar */}
      <MobileNavbar onNavigate={onNavigate} currentPage={currentPage} />
      
      {/* Footer - Add bottom padding for mobile navbar */}
      <div className="pb-20 lg:pb-0">
        <Footer />
      </div>
    </div>
  );
}