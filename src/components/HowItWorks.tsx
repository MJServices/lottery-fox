import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Page } from '../types';
import MobileNavbar from './MobileNavbar';

interface HowItWorksProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function HowItWorks({ onLogout, onNavigate, currentPage }: HowItWorksProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'privacy-policy' | 'terms-conditions' | 'bug-bounty'>('privacy-policy');

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
          {/* How It Works Content */}
          <div className="flex-1 overflow-y-auto pb-20 lg:pb-0">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="max-w-7xl mx-auto">
                {/* Banner Image */}
                <div className="relative w-full mb-8">
                  <img
                    src="/images/privacy-banner.png"
                    alt="How It Works Banner"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>

                {/* Tab Navigation */}
                <div className="mb-8">
                  <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
                    <button
                      onClick={() => setActiveTab('privacy-policy')}
                      className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                        activeTab === 'privacy-policy'
                          ? 'bg-[#8FD811] text-[#253703]'
                          : 'bg-[#2A2F36] text-[#A2B4C6] hover:bg-[#3A3F46] hover:text-white'
                      }`}
                    >
                      Privacy Policy
                    </button>
                    <button
                      onClick={() => setActiveTab('terms-conditions')}
                      className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                        activeTab === 'terms-conditions'
                          ? 'bg-[#8FD811] text-[#253703]'
                          : 'bg-[#2A2F36] text-[#A2B4C6] hover:bg-[#3A3F46] hover:text-white'
                      }`}
                    >
                      Terms & Conditions
                    </button>
                    <button
                      onClick={() => setActiveTab('bug-bounty')}
                      className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                        activeTab === 'bug-bounty'
                          ? 'bg-[#8FD811] text-[#253703]'
                          : 'bg-[#2A2F36] text-[#A2B4C6] hover:bg-[#3A3F46] hover:text-white'
                      }`}
                    >
                      Bug Bounty
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="bg-[#1A1F26] rounded-xl p-6 lg:p-8 border border-[#2A2F36] mb-8">
                  {/* Company Info */}
                  <div className="mb-8 text-center">
                    <p className="text-[#A2B4C6] text-sm">
                      Operating: INFO CHOICE TRADE CONSULTING SERVICES Ltd (referred to herein as "we", "us", or "our")
                    </p>
                  </div>

                  {activeTab === 'privacy-policy' && (
                    <div className="space-y-8">
                      {/* 1. Introduction */}
                      <section>
                        <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed">
                          Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and 
                          safeguard your personal information when you use firstblocklottery.com (the "Website"). By 
                          accessing or using our services, you consent to the practices described in this policy.
                        </p>
                      </section>

                      {/* 2. Information We Collect */}
                      <section>
                        <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed mb-4">
                          We may collect the following types of information:
                        </p>
                        
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">a) Personal Information:</h3>
                            <ul className="space-y-2 text-[#A2B4C6] text-sm lg:text-base ml-4">
                              <li>• Email address</li>
                              <li>• Wallet address</li>
                              <li>• Contact details (when voluntarily submitted)</li>
                              <li>• Transaction data (for KYC/AML purposes if applicable)</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">b) Non-Personal Information:</h3>
                            <ul className="space-y-2 text-[#A2B4C6] text-sm lg:text-base ml-4">
                              <li>• IP address</li>
                              <li>• Browser type and version</li>
                              <li>• Device information</li>
                              <li>• Pages visited</li>
                              <li>• Usage data (pages visited, time on site, etc.)</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">c) Cookies and Tracking Technologies:</h3>
                            <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed">
                              We use cookies and similar technologies to enhance your user experience and for analytics 
                              purposes.
                            </p>
                          </div>
                        </div>
                      </section>

                      {/* 3. How We Use Your Information */}
                      <section>
                        <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed mb-4">
                          We may use the information we collect for the following purposes:
                        </p>
                        <ul className="space-y-2 text-[#A2B4C6] text-sm lg:text-base ml-4">
                          <li>• To provide and maintain the lottery platform</li>
                          <li>• To process lottery entries</li>
                          <li>• To process transactions</li>
                          <li>• To ensure platform integrity and security</li>
                          <li>• To comply with legal requirements (including anti-money laundering regulations)</li>
                          <li>• For customer support and dispute resolution</li>
                          <li>• For analytics and performance optimization</li>
                        </ul>
                      </section>
                    </div>
                  )}

                  {activeTab === 'terms-conditions' && (
                    <div className="space-y-8">
                      <section>
                        <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">Terms & Conditions</h2>
                        <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed">
                          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                      </section>
                      
                      <section>
                        <h3 className="text-lg font-semibold text-white mb-3">1. Use License</h3>
                        <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed">
                          Permission is granted to temporarily download one copy of the materials on FirstBlockLottery's website for personal, non-commercial transitory viewing only.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-white mb-3">2. Disclaimer</h3>
                        <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed">
                          The materials on FirstBlockLottery's website are provided on an 'as is' basis. FirstBlockLottery makes no warranties, expressed or implied.
                        </p>
                      </section>
                    </div>
                  )}

                  {activeTab === 'bug-bounty' && (
                    <div className="space-y-8">
                      <section>
                        <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">Bug Bounty Program</h2>
                        <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed">
                          We welcome security researchers to help us keep FirstBlockLottery secure. Our bug bounty program rewards researchers who find and report security vulnerabilities.
                        </p>
                      </section>
                      
                      <section>
                        <h3 className="text-lg font-semibold text-white mb-3">Scope</h3>
                        <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed">
                          Our bug bounty program covers security vulnerabilities in our main website and smart contracts.
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-white mb-3">Rewards</h3>
                        <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed">
                          Rewards are determined based on the severity and impact of the vulnerability discovered.
                        </p>
                      </section>
                    </div>
                  )}
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