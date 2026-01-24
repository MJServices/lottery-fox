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
                {/* Page Title */}
                <div className="mb-6 lg:mb-8">
                  <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">
                    Verify Results
                  </h1>
                  <p className="text-[#A2B4C6] text-sm lg:text-base">
                    Check results on the website and compare them to blockchain
                  </p>
                </div>

                {/* Verify Results Image */}
                <div className="mb-8">
                  <img 
                    src="/images/verify-t.png" 
                    alt="Verify Results" 
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-4 mb-8 flex-wrap">
                  <button className="px-4 py-2 bg-[#8FD811] text-[#253703] rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                    Select from the draw
                  </button>
                  <button className="px-4 py-2 bg-[#2A2F36] text-[#A2B4C6] rounded-lg font-medium text-sm hover:bg-[#3A3F46] hover:text-white transition-all">
                    Select from the draw
                  </button>
                </div>

                {/* Results Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
                  {/* First BTC Lottery Result */}
                  <div className="bg-[#1A1F26] rounded-xl p-6 border border-[#2A2F36] hover:border-[#3A3F46] transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">First BTC Lottery Result</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#FF6B35] rounded flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[#FF6B35] font-bold">484302.44</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Draw Info */}
                      <div className="flex items-center gap-3">
                        <span className="text-[#A2B4C6] text-sm">Draw</span>
                        <span className="text-white font-medium">484302.44</span>
                      </div>

                      {/* Blockchain Hash */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="text-[#A2B4C6] text-sm">Blockchain hash</span>
                        </div>
                        <div className="bg-[#2A2F36] rounded-lg p-3 font-mono text-xs text-[#A2B4C6] break-all">
                          00000000000000000002E6256258<br />
                          DC5F99A4F7E8C4F79F2B004
                        </div>
                      </div>

                      {/* Winning Numbers */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <span className="text-[#A2B4C6] text-sm">Winning 6-digit number</span>
                        </div>
                        <div className="flex gap-2">
                          {[2, 5, 8, 6, 2, 0].map((num, index) => (
                            <div key={index} className="w-8 h-8 bg-[#FF6B35] rounded flex items-center justify-center text-white font-bold text-sm">
                              {num}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blockchain Result */}
                  <div className="bg-[#1A1F26] rounded-xl p-6 border border-[#2A2F36] hover:border-[#3A3F46] transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">Blockchain result</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#FF6B35] rounded flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[#FF6B35] font-bold">484302.44</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Block Info */}
                      <div className="flex items-center gap-3">
                        <span className="text-[#A2B4C6] text-sm">Block #</span>
                        <span className="text-white font-medium">484302.44</span>
                      </div>

                      {/* Blockchain Hash */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="text-[#A2B4C6] text-sm">Blockchain hash</span>
                        </div>
                        <div className="bg-[#2A2F36] rounded-lg p-3 font-mono text-xs text-[#A2B4C6] break-all">
                          00000000000000000002E6256258<br />
                          DC5F99A4F7E8C4F79F2B004
                        </div>
                      </div>

                      {/* Winning Numbers */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <span className="text-[#A2B4C6] text-sm">Winning 6-digit number</span>
                        </div>
                        <div className="flex gap-2">
                          {[2, 5, 8, 6, 2, 0].map((num, index) => (
                            <div key={index} className="w-8 h-8 bg-[#FF6B35] rounded flex items-center justify-center text-white font-bold text-sm">
                              {num}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verification Status */}
                <div className="bg-[#1A1F26] rounded-xl p-6 border border-[#2A2F36] mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-green-400 font-bold text-lg">Last 6 digits match - block verified</span>
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
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
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