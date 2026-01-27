import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Footer from './Footer';
import { Page } from '../types';
import MobileNavbar from './MobileNavbar';
import SupportTicketDetail from './SupportTicketDetail';
import CreateTicket from './CreateTicket';

interface ProfileProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function Profile({ onLogout, onNavigate, currentPage }: ProfileProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'refer' | 'support' | 'logout'>('refer');
  const [showTicketDetail, setShowTicketDetail] = useState(false);
  const [showCreateTicket, setShowCreateTicket] = useState(false);
  const [profileData, setProfileData] = useState({
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    address: 'New York',
    currentPassword: '',
    newPassword: '',
    repeatPassword: ''
  });

  const handleViewDetails = () => {
    setShowTicketDetail(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const purchaseHistory = [
    { date: '3 min ago', tickets: 2, price: '500 USD', numbers: [1, 5, 8, 9], result: '+ 500 USD' },
    { date: '3 min ago', tickets: 2, price: '500 USD', numbers: [1, 5, 8, 9], result: '+ 500 USD' },
    { date: '3 min ago', tickets: 2, price: '500 USD', numbers: [1, 5, 8, 9], result: '+ 500 USD' },
    { date: '3 min ago', tickets: 2, price: '500 USD', numbers: [1, 5, 8, 9], result: '+ 500 USD' },
    { date: '3 min ago', tickets: 2, price: '500 USD', numbers: [1, 5, 8, 9], result: '+ 500 USD' },
    { date: '3 min ago', tickets: 2, price: '500 USD', numbers: [1, 5, 8, 9], result: '+ 500 USD' },
    { date: '3 min ago', tickets: 2, price: '500 USD', numbers: [1, 5, 8, 9], result: '+ 500 USD' },
    { date: '3 min ago', tickets: 2, price: '500 USD', numbers: [1, 5, 8, 9], result: '+ 500 USD' },
    { date: '3 min ago', tickets: 2, price: '500 USD', numbers: [1, 5, 8, 9], result: '+ 500 USD' },
    { date: '3 min ago', tickets: 2, price: '500 USD', numbers: [1, 5, 8, 9], result: '+ 500 USD' }
  ];

  // Show create ticket page if requested
  if (showCreateTicket) {
    return (
      <CreateTicket
        onLogout={onLogout}
        onNavigate={onNavigate}
        currentPage={currentPage}
        onBack={() => setShowCreateTicket(false)}
      />
    );
  }

  // Show support ticket detail if requested
  if (showTicketDetail) {
    return (
      <SupportTicketDetail
        onLogout={onLogout}
        onNavigate={onNavigate}
        currentPage={currentPage}
        onBack={() => setShowTicketDetail(false)}
      />
    );
  }

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
          {/* Profile Content */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8 pb-28 lg:pb-8">
            <div className="max-w-7xl mx-auto w-full">

              {/* Profile Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#8FD811] rounded-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h1 className="text-xl font-bold text-white">Your profile</h1>
                </div>

                {/* User Profile Info with Badges - Desktop Only */}
                <div className="hidden lg:flex items-center gap-6">
                  {/* Your badges */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#A2B4C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[#A2B4C6] text-sm font-medium">Your badges</span>
                    </div>
                    <button className="text-[#A2B4C6] text-sm hover:text-white transition-colors">View all</button>
                  </div>

                  {/* Badge Icons */}
                  <div className="flex items-center gap-3 bg-[#1A1F25] p-2 rounded-xl border border-[#242D36]">
                    <div className="w-12 h-12 bg-gradient-to-b from-[#2A3441] to-[#1A1F25] rounded-lg flex items-center justify-center p-1 border border-[#3A4651] relative group cursor-pointer hover:border-[#FFD700] transition-colors">
                      <img src="/images/golden-fox-card.png" className="w-full h-full object-contain" alt="Golden Fox" />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">Golden Fox</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-b from-[#2A3441] to-[#1A1F25] rounded-lg flex items-center justify-center p-1 border border-[#3A4651] relative group cursor-pointer hover:border-[#8FD811] transition-colors">
                      <img src="/images/lucky-fox-card-126e3c.png" className="w-full h-full object-contain" alt="Lucky Fox" />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">Lucky Fox</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-b from-[#2A3441] to-[#1A1F25] rounded-lg flex items-center justify-center p-1 border border-[#3A4651] relative group cursor-pointer hover:border-[#4A90E2] transition-colors">
                      <img src="/images/legend-fox-card.png" className="w-full h-full object-contain" alt="Legend" />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">Legend</div>
                    </div>
                  </div>

                  {/* User Profile */}
                  <div className="flex items-center gap-3 bg-[#1A2027] rounded-xl p-3 border border-[#242D36]">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF6B35]">
                      <img
                        src="/images/profile-avatar.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">John Doe</div>
                      <div className="text-[#A2B4C6] text-xs">Age: 28</div>
                    </div>
                  </div>
                </div>

                {/* Mobile User Profile */}
                <div className="lg:hidden flex items-center justify-between">
                  <div className="flex items-center gap-3 bg-[#1A2027] rounded-xl p-3 border border-[#242D36]">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF6B35]">
                      <img
                        src="/images/profile-avatar.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">John Doe</div>
                      <div className="text-[#A2B4C6] text-xs">Age: 28</div>
                    </div>
                  </div>

                  {/* Mobile Badges - Updated to use Fox Images */}
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-b from-[#2A3441] to-[#1A1F25] rounded-lg flex items-center justify-center p-0.5 border border-[#3A4651] relative">
                      <img src="/images/golden-fox-card.png" className="w-full h-full object-contain" alt="Badge 1" />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-b from-[#2A3441] to-[#1A1F25] rounded-lg flex items-center justify-center p-0.5 border border-[#3A4651] relative">
                      <img src="/images/lucky-fox-card-126e3c.png" className="w-full h-full object-contain" alt="Badge 2" />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-b from-[#2A3441] to-[#1A1F25] rounded-lg flex items-center justify-center p-0.5 border border-[#3A4651] relative">
                      <img src="/images/legend-fox-card.png" className="w-full h-full object-contain" alt="Badge 3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex gap-8 mb-8 border-b border-[#242D36]">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`pb-3 font-medium border-b-2 transition-colors ${activeTab === 'dashboard'
                    ? 'text-white border-[#8FD811]'
                    : 'text-[#A2B4C6] border-transparent hover:text-white'
                    }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('refer')}
                  className={`pb-3 font-medium border-b-2 transition-colors ${activeTab === 'refer'
                    ? 'text-white border-[#8FD811]'
                    : 'text-[#A2B4C6] border-transparent hover:text-white'
                    }`}
                >
                  Refer a friend
                </button>
                <button
                  onClick={() => setActiveTab('support')}
                  className={`pb-3 font-medium border-b-2 transition-colors ${activeTab === 'support'
                    ? 'text-white border-[#8FD811]'
                    : 'text-[#A2B4C6] border-transparent hover:text-white'
                    }`}
                >
                  Support tickets
                </button>
                <button
                  onClick={() => onNavigate('verify-results')}
                  className="pb-3 text-[#A2B4C6] font-medium hover:text-white border-b-2 border-transparent transition-colors"
                >
                  Verify results
                </button>
                <button
                  onClick={() => {
                    setActiveTab('logout');
                    onLogout();
                  }}
                  className="pb-3 text-[#A2B4C6] font-medium hover:text-white border-b-2 border-transparent transition-colors"
                >
                  Log out
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'dashboard' && (
                <>
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
                    {/* Balance Card */}
                    <div className="bg-[#1A2027] rounded-xl p-5 border border-[#242D36] hover:border-[#3A4651] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-[#8FD811] rounded-lg flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[#A2B4C6] text-sm font-medium">Total balance</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-white">12 900 485</div>
                    </div>

                    {/* Spent Card */}
                    <div className="bg-[#1A2027] rounded-xl p-5 border border-[#242D36] hover:border-[#3A4651] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[#A2B4C6] text-sm font-medium">Total spent</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-white">1 900</div>
                    </div>

                    {/* Tickets Card */}
                    <div className="bg-[#1A2027] rounded-xl p-5 border border-[#242D36] hover:border-[#3A4651] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-[#9A76FF] rounded-lg flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[#A2B4C6] text-sm font-medium">Purchasing tickets</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-white">24 569</div>
                    </div>

                    {/* Winnings Card */}
                    <div className="bg-[#1A2027] rounded-xl p-5 border border-[#242D36] hover:border-[#3A4651] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-[#FFD700] rounded-lg flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[#A2B4C6] text-sm font-medium">Total winnings</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-white">1 699</div>
                    </div>
                  </div>

                  {/* Purchase History */}
                  <div className="bg-[#1A2027] rounded-xl p-6 border border-[#242D36] mb-8">
                    <h2 className="text-lg font-bold text-white mb-6">Purchase History</h2>

                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-6 gap-4 pb-4 border-b border-[#242D36] text-[#A2B4C6] text-sm font-medium">
                      <div>Date</div>
                      <div>Ticket amount</div>
                      <div>Ticket price</div>
                      <div>Numbers</div>
                      <div>Winning numbers</div>
                      <div>Result</div>
                    </div>

                    {/* Mobile Table Header */}
                    <div className="md:hidden grid grid-cols-3 gap-2 pb-4 border-b border-[#242D36] text-[#A2B4C6] text-xs font-medium">
                      <div>Date</div>
                      <div>Details</div>
                      <div>Result</div>
                    </div>

                    {/* Table Rows - Desktop */}
                    <div className="hidden md:block space-y-4 mt-4 max-h-80 overflow-y-auto">
                      {purchaseHistory.map((item, index) => (
                        <div key={index} className="grid grid-cols-6 gap-4 py-3 text-sm items-center">
                          <div className="text-[#A2B4C6]">{item.date}</div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#8FD811] rounded-full"></div>
                            <span className="text-white">{item.tickets} tickets</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                            <span className="text-white">{item.price}</span>
                          </div>
                          <div className="flex gap-1">
                            {item.numbers.map((num, i) => (
                              <div key={i} className="w-6 h-6 bg-[#FF6B35] rounded text-white text-xs flex items-center justify-center font-bold">
                                {num}
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-1">
                            {item.numbers.map((num, i) => (
                              <div key={i} className="w-6 h-6 bg-[#FF6B35] rounded text-white text-xs flex items-center justify-center font-bold">
                                {num}
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[#8FD811] text-lg">+</span>
                            <div className="w-2 h-2 bg-[#8FD811] rounded-full"></div>
                            <span className="text-[#8FD811] font-bold">{item.result}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Table Rows - Mobile */}
                    <div className="md:hidden space-y-4 mt-4 max-h-80 overflow-y-auto">
                      {purchaseHistory.slice(0, 5).map((item, index) => (
                        <div key={index} className="grid grid-cols-3 gap-2 py-3 text-xs">
                          <div className="text-[#A2B4C6]">{item.date}</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-[#8FD811] rounded-full"></div>
                              <span className="text-white text-xs">{item.tickets} tickets</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></div>
                              <span className="text-white text-xs">{item.price}</span>
                            </div>
                            <div className="flex gap-0.5">
                              {item.numbers.map((num, i) => (
                                <div key={i} className="w-4 h-4 bg-[#FF6B35] rounded text-white text-[10px] flex items-center justify-center font-bold">
                                  {num}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-[#8FD811] text-sm">+</span>
                            <div className="w-1.5 h-1.5 bg-[#8FD811] rounded-full"></div>
                            <span className="text-[#8FD811] font-bold text-xs">{item.result}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View More Button */}
                    <div className="flex justify-center mt-6">
                      <button className="px-6 py-3 bg-[#2A3441] border border-[#3A4651] rounded-lg text-[#A2B4C6] hover:text-white hover:bg-[#3A4651] transition-all font-medium">
                        View more
                      </button>
                    </div>
                  </div>

                  {/* Forms Section */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
                    {/* Update Profile */}
                    <div className="bg-[#1A2027] rounded-xl p-6 border border-[#242D36]">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                        <h2 className="text-lg font-bold text-white">Update profile</h2>
                        <button className="px-6 py-2.5 bg-[#8FD811] text-[#253703] rounded-lg font-bold hover:opacity-90 transition-opacity text-sm">
                          Save changes
                        </button>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label className="block text-[#A2B4C6] text-sm font-medium mb-2">E-mail</label>
                          <input
                            type="email"
                            value={profileData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full bg-[#2A3441] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#525D68] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                            placeholder="Enter your email"
                          />
                        </div>

                        <div>
                          <label className="block text-[#A2B4C6] text-sm font-medium mb-2">Phone number</label>
                          <input
                            type="tel"
                            className="w-full bg-[#2A3441] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#525D68] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                            placeholder="Enter your phone"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[#A2B4C6] text-sm font-medium mb-2">First name</label>
                            <input
                              type="text"
                              value={profileData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className="w-full bg-[#2A3441] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#525D68] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="block text-[#A2B4C6] text-sm font-medium mb-2">Last name</label>
                            <input
                              type="text"
                              value={profileData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className="w-full bg-[#2A3441] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#525D68] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[#A2B4C6] text-sm font-medium mb-2">Address</label>
                          <input
                            type="text"
                            value={profileData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            className="w-full bg-[#2A3441] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#525D68] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                            placeholder="New York"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="bg-[#1A2027] rounded-xl p-6 border border-[#242D36]">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                        <h2 className="text-lg font-bold text-white">Password</h2>
                        <button className="px-6 py-2.5 bg-[#8FD811] text-[#253703] rounded-lg font-bold hover:opacity-90 transition-opacity text-sm">
                          Save changes
                        </button>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label className="block text-[#A2B4C6] text-sm font-medium mb-2">Current password</label>
                          <input
                            type="password"
                            value={profileData.currentPassword}
                            onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                            className="w-full bg-[#2A3441] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#525D68] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                            placeholder="Enter current password"
                          />
                        </div>

                        <div>
                          <label className="block text-[#A2B4C6] text-sm font-medium mb-2">New password</label>
                          <input
                            type="password"
                            value={profileData.newPassword}
                            onChange={(e) => handleInputChange('newPassword', e.target.value)}
                            className="w-full bg-[#2A3441] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#525D68] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                            placeholder="Enter password"
                          />
                        </div>

                        <div>
                          <label className="block text-[#A2B4C6] text-sm font-medium mb-2">Repeat password</label>
                          <input
                            type="password"
                            value={profileData.repeatPassword}
                            onChange={(e) => handleInputChange('repeatPassword', e.target.value)}
                            className="w-full bg-[#2A3441] border border-[#3A4651] rounded-lg px-4 py-3 text-white placeholder-[#525D68] focus:outline-none focus:ring-2 focus:ring-[#8FD811] focus:border-[#8FD811] transition-all"
                            placeholder="Repeat password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Support Tickets Tab */}
              {activeTab === 'support' && (
                <>
                  {/* Support Tickets Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-xl font-bold text-white">Your tickets</h1>
                        <p className="text-[#A2B4C6] text-sm">Manage your support requests and track their progress.</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowCreateTicket(true)}
                        className="px-6 py-2.5 bg-[#FF6B35] text-white rounded-lg font-bold hover:opacity-90 transition-opacity text-sm"
                      >
                        Create ticket
                      </button>
                      <button className="px-6 py-2.5 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-bold hover:text-white hover:bg-[#3A4651] transition-all text-sm">
                        Browse FAQ
                      </button>
                    </div>
                  </div>

                  {/* Ticket Status Tabs */}
                  <div className="flex gap-2 mb-6 flex-wrap">
                    <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                      All (50)
                    </button>
                    <button className="px-4 py-2 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-medium text-sm hover:text-white hover:bg-[#3A4651] transition-all">
                      Open (30)
                    </button>
                    <button className="px-4 py-2 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-medium text-sm hover:text-white hover:bg-[#3A4651] transition-all">
                      Pending (15)
                    </button>
                    <button className="px-4 py-2 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-medium text-sm hover:text-white hover:bg-[#3A4651] transition-all">
                      Resolved (9)
                    </button>
                    <button className="px-4 py-2 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-medium text-sm hover:text-white hover:bg-[#3A4651] transition-all">
                      Closed (2)
                    </button>
                  </div>

                  {/* Support Tickets List */}
                  <div className="space-y-4">
                    {/* Ticket 1 - Active */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 py-4 border-b border-[#242D36]">
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2">Lottery prize not credited after draw</h3>
                        <p className="text-[#A2B4C6] text-sm mb-3">
                          Hello I have a problem in the lottery draw live.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-[#A2B4C6] mb-3">
                          <span>ID: 4563456</span>
                          <span>Priority: High</span>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                        <div className="flex items-center gap-3">
                          <div className="px-3 py-1 bg-[#FF6B35] text-white rounded-full text-xs font-bold">
                            Lottery Ticket
                          </div>
                          <span className="text-[#A2B4C6] text-sm">#4563456</span>
                          <span className="text-[#A2B4C6] text-sm">2 min ago</span>
                          <div className="px-2 py-1 bg-[#8FD811] text-[#253703] rounded text-xs font-bold">
                            Active
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button className="px-4 py-2 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-medium text-sm hover:text-white hover:bg-[#3A4651] transition-all">
                            Close as solved
                          </button>
                          <button
                            onClick={handleViewDetails}
                            className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                          >
                            View details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Ticket 2 - Active */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 py-4 border-b border-[#242D36]">
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2">Lottery prize not credited after draw</h3>
                        <p className="text-[#A2B4C6] text-sm mb-3">
                          Hello I have a problem in the lottery draw live.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-[#A2B4C6] mb-3">
                          <span>ID: 4563456</span>
                          <span>Priority: High</span>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                        <div className="flex items-center gap-3">
                          <div className="px-3 py-1 bg-[#FF6B35] text-white rounded-full text-xs font-bold">
                            Lottery Ticket
                          </div>
                          <span className="text-[#A2B4C6] text-sm">#4563456</span>
                          <span className="text-[#A2B4C6] text-sm">2 min ago</span>
                          <div className="px-2 py-1 bg-[#8FD811] text-[#253703] rounded text-xs font-bold">
                            Active
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button className="px-4 py-2 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-medium text-sm hover:text-white hover:bg-[#3A4651] transition-all">
                            Close as solved
                          </button>
                          <button
                            onClick={handleViewDetails}
                            className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                          >
                            View details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Ticket 3 - Expired */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 py-4 border-b border-[#242D36]">
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2">Lottery prize not credited after draw</h3>
                        <p className="text-[#A2B4C6] text-sm mb-3">
                          Hello I have a problem in the lottery draw live.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-[#A2B4C6] mb-3">
                          <span>ID: 4563456</span>
                          <span>Priority: High</span>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                        <div className="flex items-center gap-3">
                          <div className="px-3 py-1 bg-[#FF6B35] text-white rounded-full text-xs font-bold">
                            Lottery Ticket
                          </div>
                          <span className="text-[#A2B4C6] text-sm">#4563456</span>
                          <span className="text-[#A2B4C6] text-sm">2 min ago</span>
                          <div className="px-2 py-1 bg-[#6B7280] text-white rounded text-xs font-bold">
                            Expired
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={handleViewDetails}
                            className="px-4 py-2 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-medium text-sm hover:text-white hover:bg-[#3A4651] transition-all"
                          >
                            View details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Ticket 4 - Expired */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 py-4">
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2">Lottery prize not credited after draw</h3>
                        <p className="text-[#A2B4C6] text-sm mb-3">
                          Hello I have a problem in the lottery draw live.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-[#A2B4C6] mb-3">
                          <span>ID: 4563456</span>
                          <span>Priority: High</span>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                        <div className="flex items-center gap-3">
                          <div className="px-3 py-1 bg-[#FF6B35] text-white rounded-full text-xs font-bold">
                            Lottery Ticket
                          </div>
                          <span className="text-[#A2B4C6] text-sm">#4563456</span>
                          <span className="text-[#A2B4C6] text-sm">2 min ago</span>
                          <div className="px-2 py-1 bg-[#6B7280] text-white rounded text-xs font-bold">
                            Expired
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={handleViewDetails}
                            className="px-4 py-2 bg-[#2A3441] border border-[#3A4651] text-[#A2B4C6] rounded-lg font-medium text-sm hover:text-white hover:bg-[#3A4651] transition-all"
                          >
                            View details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Refer a Friend Tab */}
              {activeTab === 'refer' && (
                <>
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
                    {/* Balance Card */}
                    <div className="bg-[#1A2027] rounded-xl p-5 border border-[#242D36] hover:border-[#3A4651] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-[#8FD811] rounded-lg flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[#A2B4C6] text-sm font-medium">Total balance</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-white">12 900 485</div>
                    </div>

                    {/* Spent Card */}
                    <div className="bg-[#1A2027] rounded-xl p-5 border border-[#242D36] hover:border-[#3A4651] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[#A2B4C6] text-sm font-medium">Total spent</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-white">1 900</div>
                    </div>

                    {/* Tickets Card */}
                    <div className="bg-[#1A2027] rounded-xl p-5 border border-[#242D36] hover:border-[#3A4651] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-[#9A76FF] rounded-lg flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[#A2B4C6] text-sm font-medium">Purchasing tickets</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-white">24 569</div>
                    </div>

                    {/* Winnings Card */}
                    <div className="bg-[#1A2027] rounded-xl p-5 border border-[#242D36] hover:border-[#3A4651] transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-[#FFD700] rounded-lg flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[#A2B4C6] text-sm font-medium">Total winnings</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-white">1 699</div>
                    </div>
                  </div>

                  {/* Profile Banner Image - Full Width */}
                  <img
                    src="/images/profile-bannner.png"
                    alt="Profile Banner"
                    className="w-full h-auto object-cover mb-8"
                  />

                  {/* Rewards Section */}
                  <div className="mb-8">
                    {/* Rewards You Can Earn */}
                    <div className="bg-[#1A2027] rounded-xl p-6 border border-[#242D36] mb-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">Rewards You Can Earn</h3>
                            <p className="text-[#A2B4C6] text-sm">Unlock free tickets & USDT by inviting friends</p>
                          </div>
                        </div>

                        {/* Progress Card - Right Side */}
                        <div className="hidden lg:block bg-gradient-to-br from-[#FF6B35] to-[#FFB366] rounded-xl p-6 relative overflow-hidden" style={{ width: '320px' }}>
                          {/* Background Banner Image */}
                          <div className="absolute inset-0">
                            <img
                              src="/images/profile-bannner.png"
                              alt="Profile Banner"
                              className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/70 to-[#FFB366]/60 rounded-xl"></div>
                          </div>

                          {/* Background coin decoration */}
                          <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-300/30 rounded-full blur-lg"></div>
                          <div className="absolute bottom-2 left-4 w-8 h-8 bg-orange-300/30 rounded-full blur-md"></div>

                          <div className="relative z-10 text-center text-white">
                            <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white" />
                              </svg>
                            </div>
                            <h4 className="text-lg font-bold mb-1">Invite 3 Friends & Get 2 Free Tickets</h4>
                            <p className="text-white/80 text-sm mb-4">2 / 3 friends invited</p>

                            {/* Progress bar */}
                            <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                              <div className="bg-white h-2 rounded-full" style={{ width: '66%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Rewards Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {/* 1 Friend Reward */}
                        <div className="bg-[#242D36] rounded-xl p-4 text-center">
                          <div className="w-12 h-12 mx-auto mb-3 bg-[#8FD811] rounded-lg flex items-center justify-center">
                            <span className="text-[#253703] font-bold text-lg">1</span>
                          </div>
                          <div className="text-white font-medium text-sm mb-1">1 Friend</div>
                          <div className="text-white font-medium text-sm mb-2">Invited</div>
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <div className="w-4 h-4 bg-[#8FD811] rounded flex items-center justify-center">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17l-5-5" stroke="#253703" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <span className="text-[#8FD811] font-bold text-xs">1 Free Ticket</span>
                          </div>
                        </div>

                        {/* 3 Friend Reward */}
                        <div className="bg-[#242D36] rounded-xl p-4 text-center">
                          <div className="w-12 h-12 mx-auto mb-3 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">3</span>
                          </div>
                          <div className="text-white font-medium text-sm mb-1">3 Friend</div>
                          <div className="text-white font-medium text-sm mb-2">Invited</div>
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <div className="w-4 h-4 bg-[#FF6B35] rounded flex items-center justify-center">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <span className="text-[#FF6B35] font-bold text-xs">3 Free Ticket</span>
                          </div>
                        </div>

                        {/* 5 Friend Reward */}
                        <div className="bg-[#242D36] rounded-xl p-4 text-center">
                          <div className="w-12 h-12 mx-auto mb-3 bg-[#9A76FF] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">5</span>
                          </div>
                          <div className="text-white font-medium text-sm mb-1">5 Friend</div>
                          <div className="text-white font-medium text-sm mb-2">Invited</div>
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <div className="w-4 h-4 bg-[#9A76FF] rounded flex items-center justify-center">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <span className="text-[#9A76FF] font-bold text-xs">5 Free Ticket</span>
                          </div>
                        </div>

                        {/* 10 Friend Reward */}
                        <div className="bg-[#242D36] rounded-xl p-4 text-center">
                          <div className="w-12 h-12 mx-auto mb-3 bg-[#9A76FF] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">10</span>
                          </div>
                          <div className="text-white font-medium text-sm mb-1">10 Friend</div>
                          <div className="text-white font-medium text-sm mb-2">Invited</div>
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <div className="w-4 h-4 bg-[#9A76FF] rounded flex items-center justify-center">
                              <span className="text-white font-bold text-[8px]">$</span>
                            </div>
                            <span className="text-[#9A76FF] font-bold text-xs">$10 USDT</span>
                          </div>
                        </div>

                        {/* 25 Friend Reward */}
                        <div className="bg-[#242D36] rounded-xl p-4 text-center">
                          <div className="w-12 h-12 mx-auto mb-3 bg-[#9A76FF] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">25</span>
                          </div>
                          <div className="text-white font-medium text-sm mb-1">25 Friend</div>
                          <div className="text-white font-medium text-sm mb-2">Invited</div>
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <div className="w-4 h-4 bg-[#00F2FF] rounded flex items-center justify-center">
                              <span className="text-[#003A3D] font-bold text-[8px]">$</span>
                            </div>
                            <span className="text-[#00F2FF] font-bold text-xs">$30 USDT</span>
                          </div>
                          <div className="text-[#00F2FF] text-xs">12 tickets</div>
                        </div>
                      </div>

                      {/* Mobile Progress Card */}
                      <div className="lg:hidden mt-6 bg-gradient-to-br from-[#FF6B35] to-[#FFB366] rounded-xl p-6 relative overflow-hidden">
                        {/* Background Banner Image */}
                        <div className="absolute inset-0">
                          <img
                            src="/images/profile-bannner.png"
                            alt="Profile Banner"
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/70 to-[#FFB366]/60 rounded-xl"></div>
                        </div>

                        <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-300/30 rounded-full blur-lg"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white" />
                            </svg>
                          </div>
                          <h4 className="text-lg font-bold mb-1">Invite 3 Friends & Get 2 Free Tickets</h4>
                          <p className="text-white/80 text-sm mb-4">2 / 3 friends invited</p>

                          <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                            <div className="bg-white h-2 rounded-full" style={{ width: '66%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Your Invited Friends */}
                  <div className="bg-[#1A2027] rounded-xl p-6 border border-[#242D36]">
                    <h2 className="text-lg font-bold text-white mb-6">Your Invited Friends</h2>

                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-4 gap-4 pb-4 border-b border-[#242D36] text-[#A2B4C6] text-sm font-medium">
                      <div>User</div>
                      <div>Date</div>
                      <div>Total reward</div>
                      <div>Ticket amount</div>
                    </div>

                    {/* Table Rows */}
                    <div className="space-y-4 mt-4">
                      {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 py-3 text-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xs">J</span>
                            </div>
                            <div>
                              <div className="text-white font-medium">james</div>
                              <div className="text-[#A2B4C6] text-xs md:hidden">2 min ago</div>
                            </div>
                          </div>
                          <div className="text-[#A2B4C6] hidden md:block">2 min ago</div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#8FD811] rounded-full"></div>
                            <span className="text-[#8FD811] font-bold">+ 500 USD</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#8FD811] rounded-full"></div>
                            <span className="text-white">2 tickets</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View More Button */}
                    <div className="flex justify-center mt-6">
                      <button className="px-6 py-3 bg-[#2A3441] border border-[#3A4651] rounded-lg text-[#A2B4C6] hover:text-white hover:bg-[#3A4651] transition-all font-medium">
                        View more
                      </button>
                    </div>
                  </div>
                </>
              )}
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