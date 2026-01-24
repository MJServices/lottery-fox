import { Page } from '../types';
import { createPortal } from 'react-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  currentPage: Page;
}

export default function MobileMenu({ isOpen, onClose, onNavigate, onLogout, currentPage }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  const menuItems = [
    {
      id: 'lucky',
      label: 'LUCKY',
      icon: '🎲',
      bgColor: 'bg-gradient-to-r from-[#4CAF50] to-[#66BB6A]',
      textColor: 'text-white',
      page: 'home' as Page,
      isSpecial: true
    },
    {
      id: 'home',
      label: 'Home',
      icon: '🏠',
      bgColor: 'bg-[#2A3441]',
      textColor: 'text-white',
      page: 'home' as Page
    },
    {
      id: 'lottery',
      label: 'Lottery',
      icon: '🎱',
      bgColor: 'bg-[#2A3441]',
      textColor: 'text-white',
      page: 'lottery' as Page
    },
    {
      id: 'results',
      label: 'Results',
      icon: '✅',
      bgColor: 'bg-[#2A3441]',
      textColor: 'text-white',
      page: 'results' as Page
    },
    {
      id: 'leaders',
      label: 'Leaders',
      icon: '👑',
      bgColor: 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F]',
      textColor: 'text-white',
      page: 'hallOfFame' as Page,
      isSpecial: true
    },
    {
      id: 'affiliate',
      label: 'Affiliate',
      icon: '👥',
      bgColor: 'bg-[#2A3441]',
      textColor: 'text-white',
      page: 'affiliate' as Page
    },
    {
      id: 'awards',
      label: 'Awards',
      icon: '🏆',
      bgColor: 'bg-[#2A3441]',
      textColor: 'text-white',
      page: 'awards' as Page
    },
    {
      id: 'faq',
      label: 'FAQ',
      icon: '❓',
      bgColor: 'bg-[#2A3441]',
      textColor: 'text-white',
      page: 'faq' as Page
    },
    {
      id: 'how-it-works',
      label: 'How it works',
      icon: '📖',
      bgColor: 'bg-[#2A3441]',
      textColor: 'text-white',
      page: 'how-it-works' as Page
    },
    {
      id: 'verify-results',
      label: 'Verify results',
      icon: '🔍',
      bgColor: 'bg-[#2A3441]',
      textColor: 'text-white',
      page: 'verify-results' as Page
    }
  ];

  const menuContent = (
    <div className="mobile-menu-overlay fixed inset-0 z-[999999] lg:hidden" style={{ zIndex: 999999, isolation: 'isolate' }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
        style={{ zIndex: 999999 }}
      />
      
      {/* Menu Panel */}
      <div 
        className="mobile-menu-panel absolute left-0 top-0 bottom-0 w-[320px] bg-[#13181D] border-r border-[#242D36] flex flex-col"
        style={{ zIndex: 1000000, isolation: 'isolate', height: '100vh', maxHeight: '100vh' }}
      >
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-4 border-b border-[#242D36] flex-shrink-0">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="mobile-menu-scroll flex-1 overflow-y-auto overflow-x-hidden" style={{ maxHeight: 'calc(100vh - 80px)' }}>
          {/* User Profile Section */}
          <div className="p-4 border-b border-[#242D36]">
            <button
              onClick={() => handleNavigate('profile')}
              className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#2A3441] to-[#1A1F26] hover:from-[#3A4451] hover:to-[#2A2F36] transition-all duration-200 mb-3"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF4B0F]/30">
                <img
                  src="/images/profile-avatar.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <div className="text-white font-bold text-sm">Your Profile</div>
                <div className="text-gray-400 text-xs">View and edit profile</div>
              </div>
              <div className="text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center gap-2 p-2 rounded-lg bg-[#1A1F26] hover:bg-[#2A2F36] transition-colors">
                <span className="text-lg">💰</span>
                <span className="text-white text-xs font-medium">Wallet</span>
              </button>
              <button className="flex items-center gap-2 p-2 rounded-lg bg-[#1A1F26] hover:bg-[#2A2F36] transition-colors">
                <span className="text-lg">⚙️</span>
                <span className="text-white text-xs font-medium">Settings</span>
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.page)}
                className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-200 hover:opacity-90 ${
                  item.bgColor
                } ${
                  currentPage === item.page ? 'ring-2 ring-[#FF4B0F]' : ''
                }`}
              >
                <div className="text-2xl">
                  {item.icon}
                </div>
                <span className={`text-lg font-bold ${item.textColor}`}>
                  {item.label}
                </span>
                {currentPage === item.page && (
                  <div className="ml-auto w-2 h-2 bg-[#FF4B0F] rounded-full" />
                )}
              </button>
            ))}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-200 hover:opacity-90 bg-[#2A3441] border border-[#FF4B0F]/30"
            >
              <div className="text-2xl">
                🚪
              </div>
              <span className="text-lg font-bold text-white">
                Log out
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[#242D36] mt-8">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/fox-logo.svg" alt="Fox Logo" className="w-8 h-8" />
              <span className="text-lg font-bold text-white font-luckiest">LOTTERY</span>
            </div>
            <p className="text-sm text-gray-400">
              Experience the thrill of winning with Fox Lottery
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Render using portal to bypass stacking context issues
  return createPortal(menuContent, document.body);
}