import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Footer from './Footer';
import { Page } from '../types';
import MobileNavbar from './MobileNavbar';

interface SupportTicketDetailProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
  onBack: () => void;
}

export default function SupportTicketDetail({ onLogout, onNavigate, currentPage, onBack }: SupportTicketDetailProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [message, setMessage] = useState('');

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
                  className="text-gray-400 hover:text-white p-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                    <div className="text-white text-xs sm:text-sm font-black drop-shadow-md">HOUR</div>
                  </div>

                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/15 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-xl"></div>
                </button>

                <div className="space-y-2 sm:space-y-3">
                  {/* Home */}
                  <button
                    onClick={() => {
                      onNavigate('home');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${currentPage === 'home'
                      ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg'
                      : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                      }`}
                  >
                    <img src="/images/home-icon.png" alt="Home" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                    <span className={`font-bold text-base sm:text-lg ${currentPage === 'home' ? 'text-white' : 'text-gray-400'}`}>Home</span>
                  </button>

                  {/* Profile */}
                  <button
                    onClick={() => {
                      onNavigate('profile');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${currentPage === 'profile'
                      ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] shadow-lg'
                      : 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
                      }`}
                  >
                    <img src="/images/profile-avatar.png" alt="Profile" className="w-6 h-6 sm:w-7 sm:h-7 object-contain rounded-full" />
                    <span className={`font-bold text-base sm:text-lg ${currentPage === 'profile' ? 'text-white' : 'text-gray-400'}`}>Your Profile</span>
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
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-gray-400 font-bold text-base sm:text-lg">Log out</span>
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
        <div className="flex-1 flex flex-col xl:flex-row min-h-0">
          {/* Support Ticket Detail Content */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8 pb-28 lg:pb-8">
            <div className="max-w-7xl mx-auto w-full">

              {/* Ticket Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-[#A2B4C6] text-sm">ID: 4563456</div>
                  <div className="text-[#A2B4C6] text-sm">Priority: High</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={onBack}
                    className="px-4 py-2 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-medium text-sm hover:text-white hover:bg-[#3A4651] transition-all"
                  >
                    Close ticket
                  </button>
                  <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                    Solved
                  </button>
                </div>
              </div>

              {/* Ticket Title */}
              <h1 className="text-white font-bold text-xl mb-4">Lottery prize not credited after draw</h1>
              <p className="text-[#A2B4C6] text-sm mb-4">Hello, I participated in the lottery draw tha...</p>

              {/* Ticket Meta Row */}
              <div className="flex items-center gap-3 mb-8">
                <div className="px-3 py-1.5 bg-gradient-to-r from-[#1F1813] to-[#E36826] text-white rounded-lg text-xs font-bold flex items-center gap-2 border border-[#E36826]/30">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 2v7h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Lottery Ticket 66454244
                </div>
                <div className="flex items-center gap-1 text-[#A2B4C6] text-xs font-medium">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  2 min ago
                </div>
                <div className="px-2 py-1 bg-[#8FD811] text-[#13181D] rounded text-xs font-black uppercase">
                  Active
                </div>
              </div>

              {/* Ticket Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Left Column - Ticket Info */}
                <div className="lg:col-span-1">
                  <div className="bg-[#1A2027] rounded-xl p-6 border border-[#242D36]">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="text-[#A2B4C6] text-sm font-medium">Ticket ID</div>
                        <div className="text-white text-sm font-bold flex items-center gap-2">
                          4483902
                          <div className="w-5 h-5 bg-[#00C3FF]/20 rounded flex items-center justify-center cursor-pointer hover:bg-[#00C3FF]/30 transition-colors">
                            <svg className="w-3.5 h-3.5 text-[#00C3FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-[#A2B4C6] text-sm font-medium">Status</div>
                        <div className="px-3 py-1 bg-[#8FD811] text-[#13181D] rounded text-xs font-black uppercase shadow-[0_0_10px_rgba(143,216,17,0.3)]">
                          OPEN
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-[#A2B4C6] text-sm font-medium">Priority</div>
                        <div className="px-3 py-1 bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] text-white rounded text-xs font-black uppercase shadow-[0_0_10px_rgba(255,75,15,0.3)]">
                          HIGH
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-[#A2B4C6] text-sm font-medium">Category</div>
                        <div className="text-white text-sm font-bold">Wallet Connection</div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-[#A2B4C6] text-sm font-medium">Last Updated</div>
                        <div className="text-white text-sm font-bold">Dec 22, 2025 5:43:08 PM</div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-[#A2B4C6] text-sm font-medium">Created</div>
                        <div className="text-white text-sm font-bold">Dec 22, 2025 5:43:08 PM</div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-[#A2B4C6] text-sm font-medium">Lottery Ticket Id</div>
                        <div className="text-white text-sm font-bold">66454244</div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-8">
                      <button className="flex-1 px-4 py-3 bg-gradient-to-b from-[#3A4651] to-[#2A3441] border border-[#3A4651] text-white rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg">
                        Browse FAQ
                      </button>
                      <button className="flex-1 px-4 py-3 bg-gradient-to-r from-[#1F1813] to-[#E36826] text-white rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(227,104,38,0.4)]">
                        Create ticket
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Conversation */}
                <div className="lg:col-span-2">
                  <div className="bg-[#1A2027] rounded-xl p-4 border border-[#242D36] h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-white font-bold text-sm">Conversation</h3>
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                    </div>

                    {/* Support Agent Message */}
                    <div className="mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#9726E3] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-white font-bold text-sm">Support (Helpdesk Agent)</span>
                          </div>
                          <div className="bg-[#242D36] rounded-lg p-3 mb-2">
                            <p className="text-white text-sm leading-relaxed">
                              Hello,<br />
                              Thank you for contacting us.<br />
                              We've received your request and are currently reviewing the lottery<br />
                              draw records.<br />
                              Please note that payouts may take some time to process. We'll update<br />
                              you shortly.
                            </p>
                          </div>
                          <div className="text-[#A2B4C6] text-xs">Aug 16, 2024 - 5:43 PM</div>
                        </div>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">H</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-white font-bold text-sm">Hello,</span>
                          </div>
                          <div className="bg-[#242D36] rounded-lg p-3 mb-2">
                            <p className="text-white text-sm leading-relaxed">
                              I participated in today's lottery draw, and my ticket shows as a<br />
                              winning one, but the prize hasn't been credited to my account yet.<br />
                              Could you please check this?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter message..."
                        className="flex-1 bg-[#242D36] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#A2B4C6] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-all"
                      />
                      <button className="px-4 py-3 bg-[#FF6B35] text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden xl:block">
            <Chat />
          </div>
        </div>

        {/* Mobile Chat Button - Show on mobile only */}
        <div className="xl:hidden border-t border-[#242D36] bg-[#13181D] p-3 sm:p-4">
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