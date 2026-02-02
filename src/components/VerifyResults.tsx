import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Page } from '../types';
import MobileNavbar from './MobileNavbar';

interface VerifyResultsProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function VerifyResults({ onLogout, onNavigate, currentPage }: VerifyResultsProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

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
        {/* Desktop Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block">
          <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
        </div>

        {/* Main Content - Full width on mobile, flexible on desktop */}
        <div className="flex-1 flex flex-col xl:flex-row">
          {/* Verify Results Content */}
          <div className="flex-1 overflow-y-auto pb-20 lg:pb-0">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-8 rounded-3xl overflow-hidden">
                  <img
                    src="/images/verify-t.png"
                    alt="Verify Results"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-6">
                  {/* Left Column: Search & Filter */}
                  <div className="bg-[#1A1F26] rounded-2xl p-6 border border-[#242D36] h-fit">
                    <div className="space-y-6">
                      {/* Search Input */}
                      <div className="space-y-2">
                        <label className="text-[#A2B4C6] text-xs font-bold uppercase tracking-wider">Search for the draw</label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Enter ID"
                            className="w-full bg-[#13181D] border border-[#2A3441] rounded-lg px-4 py-3 text-white placeholder-[#525D68] focus:outline-none focus:border-[#FF4B0F] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Select Dropdown */}
                      <div className="space-y-2">
                        <label className="text-[#A2B4C6] text-xs font-bold uppercase tracking-wider">Select from the draws</label>
                        <div className="relative">
                          <button className="w-full bg-[#13181D] border border-[#2A3441] rounded-lg px-4 py-3 text-white flex items-center justify-between hover:border-[#3A4651] transition-colors">
                            <span className="font-bold">Draw</span>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#A2B4C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Results */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* First BTC Lottery Result */}
                      <div className="bg-[#1A1F26] rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl p-6 border border-[#242D36] relative overflow-hidden">
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                          First BTC Lottery Result
                        </h3>

                        <div className="space-y-5">
                          {/* Block Number */}
                          <div className="flex gap-4">
                            <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" stroke="#FF6B35" strokeWidth="2" />
                                <path d="M9 10a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" stroke="#FF6B35" strokeWidth="2" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-[#A2B4C6] text-xs mb-1">Block #</div>
                              <div className="text-white font-bold">494302-44</div>
                            </div>
                          </div>

                          {/* Full Block Hash */}
                          <div className="flex gap-4">
                            <div className="w-10 h-10 bg-[#00D68F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#00D68F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="overflow-hidden">
                              <div className="text-[#A2B4C6] text-xs mb-1">Full block hash</div>
                              <div className="text-white font-mono text-xs break-all leading-relaxed">
                                000000000000000000<br />
                                DCB798A7FE3F22C381791C26DD4 <span className="text-[#FF6B35] bg-[#FF6B35]/10 px-1 rounded">5C4E2E</span>
                              </div>
                            </div>
                          </div>

                          {/* Winning Number */}
                          <div className="flex gap-4">
                            <div className="w-10 h-10 bg-[#FFD700]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-[#A2B4C6] text-xs mb-2">Winning 6-digit number</div>
                              <div className="flex gap-1">
                                {['J', '4', 'b', '6', 'J', '0'].map((char, i) => (
                                  <div key={i} className={`w-8 h-8 ${isNaN(Number(char)) ? 'bg-[#2A3441] text-[#A2B4C6]' : 'bg-[#2A3441] text-[#8FD811]'} rounded flex items-center justify-center font-bold text-sm border border-[#3A4651]`}>
                                    {char}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Blockchain Result */}
                      <div className="bg-[#1A1F26] md:rounded-tr-2xl md:rounded-bl-none p-6 border border-[#242D36] border-l-0 relative overflow-hidden">
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                          Blockchain result
                        </h3>

                        <div className="space-y-5">
                          {/* Block Number */}
                          <div className="flex gap-4">
                            <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" stroke="#FF6B35" strokeWidth="2" />
                                <path d="M9 10a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" stroke="#FF6B35" strokeWidth="2" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-[#A2B4C6] text-xs mb-1">Block #</div>
                              <div className="text-white font-bold">494302-44</div>
                            </div>
                          </div>

                          {/* Full Block Hash */}
                          <div className="flex gap-4">
                            <div className="w-10 h-10 bg-[#A2B4C6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#A2B4C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="overflow-hidden">
                              <div className="text-[#A2B4C6] text-xs mb-1">Full block hash</div>
                              <div className="text-white font-mono text-xs break-all leading-relaxed">
                                000000000000000000<br />
                                DCB798A7FE3F22C381791C26DD4 <span className="text-[#FF6B35] bg-[#FF6B35]/10 px-1 rounded">5C4E2E</span>
                              </div>
                            </div>
                          </div>

                          {/* Winning Number */}
                          <div className="flex gap-4">
                            <div className="w-10 h-10 bg-[#FFD700]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-[#A2B4C6] text-xs mb-2">Winning 6-digit number</div>
                              <div className="flex gap-1">
                                {['J', '4', 'b', '6', 'J', '0'].map((char, i) => (
                                  <div key={i} className={`w-8 h-8 ${isNaN(Number(char)) ? 'bg-[#2A3441] text-[#A2B4C6]' : 'bg-[#2A3441] text-[#8FD811]'} rounded flex items-center justify-center font-bold text-sm border border-[#3A4651]`}>
                                    {char}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Verified Footer */}
                    <div className="bg-[#2A3441]/50 border border-[#8FD811]/30 rounded-b-2xl md:rounded-2xl p-4 flex items-center justify-center md:col-span-2">
                      <div className="flex items-center gap-2 text-[#8FD811]">
                        <div className="w-5 h-5 bg-[#8FD811] rounded-full flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#13181D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="font-bold">Last 6 digit match - block verified</span>
                      </div>
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
        <div className="xl:hidden border-t border-[#242D36] bg-[#13181D] p-3 pb-20">
          <button className="w-full p-3 text-left text-white font-bold text-sm bg-gradient-to-r from-[#9726E3] to-[#FF4B0F] rounded-lg hover:opacity-90 transition-opacity flex items-center justify-between">
            <span>💬 Open Chat</span>
            <span className="text-xs opacity-80">544 online</span>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar onNavigate={onNavigate} currentPage={currentPage} />

      {/* Full Width Footer Section */}
      <footer className="bg-[#1A1F26] border-t border-[#2A2F36] w-full">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Logo and Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-3 sm:mb-4">
                <img src="/images/fox-logo.svg" alt="Fox Logo" className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
                <span className="text-lg sm:text-xl font-bold text-white font-luckiest">LOTTERY</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Experience the thrill of winning with Fox Lottery. Fair, transparent, and exciting lottery games with amazing prizes.
              </p>
            </div>

            {/* About Links */}
            <div>
              <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">About</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Refund policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Help</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Troubleshooting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Affiliate</a></li>
              </ul>
            </div>

            {/* Developers Links */}
            <div>
              <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Developers</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Bug Bounty</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Audits</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#2A2F36] flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Fox Lottery. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
              <button className="bg-[#2A2F36] hover:bg-[#3A3F46] px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-white text-xs sm:text-sm font-medium transition-colors">
                Support
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}