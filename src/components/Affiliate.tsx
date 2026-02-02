import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Footer from './Footer';
import { Page } from '../types';
import MobileNavbar from './MobileNavbar';

interface AffiliateProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

interface FormData {
  firstName: string;
  lastName: string;
  mobilePhone: string;
  whatsapp: string;
  telegram: string;
  website: string;
  email: string;
  promotion: string;
  password: string;
  repeatPassword: string;
}

export default function Affiliate({ onLogout, onNavigate, currentPage }: AffiliateProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    mobilePhone: '',
    whatsapp: '',
    telegram: '',
    website: '',
    email: '',
    promotion: '',
    password: '',
    repeatPassword: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

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
                <div className="w-full h-20 sm:h-24 bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] rounded-xl p-3 sm:p-4 relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-white text-xs sm:text-sm font-black mb-1">LUCKY</div>
                    <div className="w-full h-6 sm:h-8 flex items-center justify-center mb-1">
                      <img src="/images/lucky-hour-avatar-1db0ff.png" alt="Lucky Hour" className="w-5 h-5 sm:w-6 sm:h-6 object-contain rounded-full" />
                    </div>

                  </div>
                </div>

                {/* Navigation Items */}
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

                  {/* Lottery */}
                  <button
                    onClick={() => {
                      onNavigate('lottery');
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${currentPage === 'lottery'
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
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${currentPage === 'results'
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
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${currentPage === 'leaders'
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
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${currentPage === 'affiliate'
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
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${currentPage === 'faq'
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

        {/* Hero Section - Full width on mobile (outside all containers) */}
        <div className="w-full lg:hidden">
          <img
            src="/images/post.png"
            alt="Affiliate Post"
            className="w-full h-auto block"
          />
        </div>

        {/* Main Content - Full width on mobile, flexible on desktop */}
        <div className="flex-1 flex flex-col xl:flex-row min-h-0">
          {/* Affiliate Content */}
          <div className="flex-1 overflow-y-auto pb-28 lg:pb-8">
            {/* Main Container with padding for form and desktop layout */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
                  {/* Hero Section - Desktop only */}
                  <div className="hidden lg:block lg:w-[360px] xl:w-[420px] 2xl:w-[480px] flex-shrink-0">
                    <div className="w-full h-[480px] xl:h-[520px] 2xl:h-[560px] overflow-hidden rounded-2xl">
                      <img
                        src="/images/post.png"
                        alt="Affiliate Post"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Form Section */}
                  <div className="flex-1 min-w-0 w-full max-w-lg">
                    <div className="bg-[#11161B] border border-[#25253F] rounded-lg p-3 sm:p-4 md:p-5 w-full h-auto lg:h-[480px] xl:h-[520px] 2xl:h-[560px] flex flex-col justify-center" style={{
                      background: 'linear-gradient(180deg, rgba(37, 37, 63, 1) 0%, rgba(62, 65, 89, 1) 100%)',
                      boxShadow: '0px 2px 0px 0px rgba(40, 40, 69, 0.37)'
                    }}>
                      {/* Form Header */}
                      <div className="flex justify-between items-center mb-2 sm:mb-3">
                        <h2 className="text-sm sm:text-base font-bold text-white leading-tight">Apply for Affiliate program</h2>
                        <button className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#D0D2E9] rounded-md flex items-center justify-center flex-shrink-0 hover:bg-[#B8BAD1] transition-colors">
                          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3">
                            <path d="M12 4L4 12M4 4L12 12" stroke="#525D68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>

                      {/* Form Fields */}
                      <div className="space-y-2 sm:space-y-3">
                        {/* First Row - First Name & Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                          <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-semibold text-[#A2B4C6] tracking-tight block">First name</label>
                            <input
                              type="text"
                              placeholder="Enter name"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className="w-full bg-[#1E242A] border border-[#2A3441] rounded-md px-3 py-2 text-xs font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-1 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-semibold text-[#A2B4C6] tracking-tight block">Last name</label>
                            <input
                              type="text"
                              placeholder="Enter name"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className="w-full bg-[#1E242A] border border-[#2A3441] rounded-md px-3 py-2 text-xs font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-1 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
                            />
                          </div>
                        </div>

                        {/* Second Row - Mobile Phone & WhatsApp */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                          <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-semibold text-[#A2B4C6] tracking-tight block">Mobile phone</label>
                            <input
                              type="tel"
                              placeholder="Enter number"
                              value={formData.mobilePhone}
                              onChange={(e) => handleInputChange('mobilePhone', e.target.value)}
                              className="w-full bg-[#1E242A] border border-[#2A3441] rounded-md px-3 py-2 text-xs font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-1 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-semibold text-[#A2B4C6] tracking-tight block">Whatsapp</label>
                            <input
                              type="tel"
                              placeholder="Enter number"
                              value={formData.whatsapp}
                              onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                              className="w-full bg-[#1E242A] border border-[#2A3441] rounded-md px-3 py-2 text-xs font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-1 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
                            />
                          </div>
                        </div>

                        {/* Third Row - Telegram */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                          <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-semibold text-[#A2B4C6] tracking-tight block">Telegram</label>
                            <input
                              type="text"
                              placeholder="Enter telegram"
                              value={formData.telegram}
                              onChange={(e) => handleInputChange('telegram', e.target.value)}
                              className="w-full bg-[#1E242A] border border-[#2A3441] rounded-md px-3 py-2 text-xs font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-1 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
                            />
                          </div>
                          <div className="hidden md:block"></div>
                        </div>

                        {/* Fourth Row - Website & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                          <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-semibold text-[#A2B4C6] tracking-tight block">Website</label>
                            <input
                              type="url"
                              placeholder="Enter website"
                              value={formData.website}
                              onChange={(e) => handleInputChange('website', e.target.value)}
                              className="w-full bg-[#1E242A] border border-[#2A3441] rounded-md px-3 py-2 text-xs font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-1 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-semibold text-[#A2B4C6] tracking-tight block">E-mail</label>
                            <input
                              type="email"
                              placeholder="Enter e-mail"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full bg-[#1E242A] border border-[#2A3441] rounded-md px-3 py-2 text-xs font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-1 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
                            />
                          </div>
                        </div>

                        {/* Fifth Row - How do you plan to promote */}
                        <div className="space-y-1">
                          <label className="text-[11px] sm:text-xs font-semibold text-[#A2B4C6] tracking-tight block">How do you plan to promote?</label>
                          <input
                            type="text"
                            placeholder="Enter Subject"
                            value={formData.promotion}
                            onChange={(e) => handleInputChange('promotion', e.target.value)}
                            className="w-full bg-[#1E242A] border border-[#2A3441] rounded-md px-3 py-2 text-xs font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-1 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
                          />
                        </div>

                        {/* Sixth Row - Password & Repeat Password */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                          <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-semibold text-[#A2B4C6] tracking-tight block">Password</label>
                            <input
                              type="password"
                              placeholder="Enter here"
                              value={formData.password}
                              onChange={(e) => handleInputChange('password', e.target.value)}
                              className="w-full bg-[#1E242A] border border-[#2A3441] rounded-md px-3 py-2 text-xs font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-1 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[11px] sm:text-xs font-semibold text-[#A2B4C6] tracking-tight block">Repeat password</label>
                            <input
                              type="password"
                              placeholder="Enter here"
                              value={formData.repeatPassword}
                              onChange={(e) => handleInputChange('repeatPassword', e.target.value)}
                              className="w-full bg-[#1E242A] border border-[#2A3441] rounded-md px-3 py-2 text-xs font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-1 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2 sm:pt-3">
                          <button
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] rounded-md px-3 py-3 text-xs sm:text-sm font-extrabold text-white hover:opacity-90 transition-all active:scale-95 shadow-lg"
                          >
                            Send Request
                          </button>
                        </div>
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