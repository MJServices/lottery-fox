import { Page } from '../types';

interface MobileNavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function MobileNavbar({ onNavigate, currentPage }: MobileNavbarProps) {
  const navItems = [
    { page: 'home' as Page, icon: '/images/home-icon.png', label: 'Home' },
    { page: 'lottery' as Page, icon: '/images/lottery-icon.png', label: 'Lottery' },
    { page: 'results' as Page, icon: '/images/checkmark-badge-icon.svg', label: 'Results' },
    { page: 'faq' as Page, icon: '/images/chat-question-icon.svg', label: 'FAQ' },
    { page: 'profile' as Page, icon: '/images/profile-avatar.png', label: 'Profile' }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#13181D] border-t border-[#242D36] z-30 safe-area-inset-bottom">
      <div className="flex justify-around items-center py-2 sm:py-3 px-2">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg transition-all duration-200 min-w-0 flex-1 max-w-[80px] ${currentPage === item.page
                ? 'text-[#FF4B0F] scale-105'
                : 'text-gray-400 hover:text-white hover:scale-105'
              }`}
          >
            <div className={`w-5 h-5 sm:w-6 sm:h-6 mb-1 flex items-center justify-center transition-all duration-200 ${currentPage === item.page ? 'opacity-100 scale-110' : 'opacity-70'
              }`}>
              <img
                src={item.icon}
                alt={item.label}
                className={`w-full h-full object-contain ${item.page === 'profile' ? 'rounded-full' : ''}`}
                style={{
                  filter: currentPage === item.page
                    ? 'brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(2000%) hue-rotate(15deg) brightness(100%) contrast(100%)'
                    : 'none'
                }}
              />
            </div>
            <span className={`text-[10px] sm:text-xs font-medium leading-tight text-center transition-all duration-200 ${currentPage === item.page ? 'font-bold' : 'font-normal'
              }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}