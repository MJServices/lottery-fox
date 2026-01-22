type Page = 'home' | 'results' | 'lottery' | 'leaders' | 'affiliate' | 'faq';

interface MobileNavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function MobileNavbar({ onNavigate, currentPage }: MobileNavbarProps) {
  const navItems = [
    { page: 'home' as Page, icon: '/images/home-icon.png', label: 'Home' },
    { page: 'lottery' as Page, icon: '/images/lottery-icon.png', label: 'Lottery' },
    { page: 'results' as Page, icon: '/images/checkmark-badge-icon.svg', label: 'Results' },
    { page: 'leaders' as Page, icon: '/images/champion-icon.svg', label: 'Leaders' },
    { page: 'affiliate' as Page, icon: '/images/user-multiple-icon.svg', label: 'Affiliate' }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#13181D] border-t border-[#242D36] z-30">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
              currentPage === item.page
                ? 'text-[#FF4B0F]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className={`w-6 h-6 mb-1 flex items-center justify-center ${
              currentPage === item.page ? 'opacity-100' : 'opacity-70'
            }`}>
              <img 
                src={item.icon} 
                alt={item.label} 
                className="w-5 h-5 object-contain"
                style={{
                  filter: currentPage === item.page 
                    ? 'brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(2000%) hue-rotate(15deg) brightness(100%) contrast(100%)'
                    : 'none'
                }}
              />
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}