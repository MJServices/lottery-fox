import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Footer from './Footer';
import { Page } from '../types';
import MobileNavbar from './MobileNavbar';

interface CreateTicketProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
  onBack: () => void;
}

export default function CreateTicket({ onLogout, onNavigate, currentPage, onBack }: CreateTicketProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    category: 'Wallet',
    priority: 'High',
    lotteryTicketId: '',
    contactEmail: '',
    transactionHash: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Creating ticket:', formData);
    onBack(); // Return to previous page after submission
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
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${
                      currentPage === 'home' 
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
                    className={`w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all ${
                      currentPage === 'profile' 
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
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          {/* Create Ticket Content */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8 pb-28 lg:pb-8">
            <div className="max-w-4xl mx-auto w-full">
              
              {/* Create Ticket Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#8FD811] rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5v14M5 12h14" stroke="#253703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Create support ticket</h1>
                  <p className="text-[#A2B4C6] text-sm">Describe your issue and we'll help you resolve it efficiently.</p>
                </div>
              </div>

              {/* Create Ticket Form */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Form Fields */}
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    {/* Subject of Injury */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Subject of Injury</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="w-full bg-[#242D36] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#A2B4C6] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                        placeholder="Enter subject"
                      />
                    </div>

                    {/* Category and Priority */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Category</label>
                        <select
                          value={formData.category}
                          onChange={(e) => handleInputChange('category', e.target.value)}
                          className="w-full bg-[#242D36] border border-[#3A4651] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                        >
                          <option value="Wallet">Wallet</option>
                          <option value="Lottery">Lottery</option>
                          <option value="Payment">Payment</option>
                          <option value="Technical">Technical</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Priority</label>
                        <select
                          value={formData.priority}
                          onChange={(e) => handleInputChange('priority', e.target.value)}
                          className="w-full bg-[#242D36] border border-[#3A4651] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                        >
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>
                    </div>

                    {/* Lottery ticket ID */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Lottery ticket ID</label>
                      <input
                        type="text"
                        value={formData.lotteryTicketId}
                        onChange={(e) => handleInputChange('lotteryTicketId', e.target.value)}
                        className="w-full bg-[#242D36] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#A2B4C6] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                        placeholder="Enter lottery ticket ID"
                      />
                    </div>

                    {/* Contact Email */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Contact Email</label>
                      <input
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                        className="w-full bg-[#242D36] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#A2B4C6] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                        placeholder="Please enter that this is your ticket history or transaction receipt"
                      />
                    </div>

                    {/* Transaction Hash */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Transaction Hash</label>
                      <input
                        type="text"
                        value={formData.transactionHash}
                        onChange={(e) => handleInputChange('transactionHash', e.target.value)}
                        className="w-full bg-[#242D36] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#A2B4C6] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                        placeholder="Transaction hash"
                      />
                    </div>

                    {/* Your problem description */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Your problem description</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={6}
                        className="w-full bg-[#242D36] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#A2B4C6] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all resize-none"
                        placeholder="Please provide as much detail as possible about your issue.
What were you trying to do?
What happened instead?
When did this happen?
Any other relevant information?"
                      />
                    </div>

                    {/* Create Ticket Button */}
                    <div className="flex justify-start">
                      <button 
                        onClick={handleSubmit}
                        className="px-8 py-3 bg-[#FF6B35] text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
                      >
                        Create ticket
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Attach Screenshots */}
                <div className="lg:col-span-1">
                  <div className="bg-[#1A2027] rounded-xl p-6 border border-[#242D36] h-fit">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#FFB366] rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5" stroke="white" strokeWidth="2"/>
                          <polyline points="21,15 16,10 5,21" stroke="white" strokeWidth="2"/>
                        </svg>
                      </div>
                      
                      <h3 className="text-white font-bold text-lg mb-2">Attach screenshots</h3>
                      
                      <button className="w-full px-4 py-3 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-medium hover:text-white hover:bg-[#3A4651] transition-all mb-4">
                        Attach
                      </button>
                      
                      <p className="text-[#A2B4C6] text-xs leading-relaxed">
                        Screenshots can help us understand your issue better. You can attach multiple files.
                      </p>
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