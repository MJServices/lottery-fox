import { DoorIcon } from './Icons';
import { Page } from '../types';

interface SidebarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  onLogout: () => void;
}

export default function Sidebar({ onNavigate, currentPage, onLogout }: SidebarProps) {
  const isActive = (page: Page) => currentPage === page;

  return (
    <aside className="w-[80px] bg-[#13181D] p-2 flex flex-col justify-between border-r border-gray-800">
      {/* Top section */}
      <div className="flex flex-col gap-3">
        {/* Lucky Hour Card */}
        <button className="w-[64px] h-[80px] bg-gradient-to-b from-[#4CAF50] to-[#66BB6A] rounded-lg p-2 relative overflow-hidden hover:from-[#5CBF60] hover:to-[#7BC87B] transition-all cursor-pointer shadow-lg hover:shadow-xl">
          <div className="text-center">
            <div className="text-white text-xs font-black mb-1">LUCKY</div>
            <div className="w-full h-8 flex items-center justify-center mb-1">
              <img src="/images/lucky-hour-avatar-1db0ff.png" alt="Lucky Hour" className="w-8 h-8 object-contain rounded-full" />
            </div>

          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1 right-1 w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-white/15 rounded-full"></div>
        </button>

        {/* Navigation Items */}
        <div className="flex flex-col gap-2">
          {/* Home */}
          <div 
            onClick={() => onNavigate('home')}
            className={`w-[64px] h-[80px] rounded-lg p-2 relative cursor-pointer transition-colors ${
              isActive('home') 
                ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                : 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="text-center">
              <div className={`text-xs font-bold mb-2 ${isActive('home') ? 'text-white' : 'text-gray-400'}`}>Home</div>
              <div className="w-full h-8 flex items-center justify-center">
                <img src="/images/home-icon.png" alt="Home" className="w-8 h-8 object-contain" />
              </div>
            </div>
          </div>

          {/* Lottery */}
          <div 
            onClick={() => onNavigate('lottery')}
            className={`w-[64px] h-[80px] rounded-lg p-2 cursor-pointer transition-colors ${
              isActive('lottery') 
                ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                : 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="text-center">
              <div className={`text-xs font-bold mb-2 ${isActive('lottery') ? 'text-white' : 'text-gray-400'}`}>Lottery</div>
              <div className="w-full h-8 flex items-center justify-center">
                <img src="/images/lottery-icon.png" alt="Lottery" className="w-8 h-8 object-contain" />
              </div>
            </div>
          </div>

          {/* Results */}
          <div 
            onClick={() => onNavigate('results')}
            className={`w-[64px] h-[80px] rounded-lg p-2 cursor-pointer transition-colors ${
              isActive('results') 
                ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                : 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="text-center">
              <div className={`text-xs font-bold mb-2 ${isActive('results') ? 'text-white' : 'text-gray-400'}`}>Results</div>
              <div className="w-full h-8 flex items-center justify-center">
                <img src="/images/checkmark-badge-icon.svg" alt="Results" className={`w-8 h-8 object-contain ${isActive('results') ? 'opacity-100' : 'opacity-70'}`} />
              </div>
            </div>
          </div>

          {/* Leaders */}
          <div 
            onClick={() => onNavigate('leaders')}
            className={`w-[64px] h-[80px] rounded-lg p-2 cursor-pointer transition-colors ${
              isActive('leaders') 
                ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                : 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="text-center">
              <div className={`text-xs font-bold mb-2 ${isActive('leaders') ? 'text-white' : 'text-gray-400'}`}>Leaders</div>
              <div className="w-full h-8 flex items-center justify-center">
                <img src="/images/champion-icon.svg" alt="Leaders" className={`w-8 h-8 object-contain ${isActive('leaders') ? 'opacity-100' : 'opacity-70'}`} />
              </div>
            </div>
          </div>

          {/* Affiliate */}
          <div 
            onClick={() => onNavigate('affiliate')}
            className={`w-[64px] h-[80px] rounded-lg p-2 cursor-pointer transition-colors ${
              isActive('affiliate') 
                ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                : 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="text-center">
              <div className={`text-xs font-bold mb-2 ${isActive('affiliate') ? 'text-white' : 'text-gray-400'}`}>Affiliate</div>
              <div className="w-full h-8 flex items-center justify-center">
                <img src="/images/user-multiple-icon.svg" alt="Affiliate" className={`w-8 h-8 object-contain ${isActive('affiliate') ? 'opacity-100' : 'opacity-70'}`} />
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div 
            onClick={() => onNavigate('faq')}
            className={`w-[64px] h-[80px] rounded-lg p-2 cursor-pointer transition-colors ${
              isActive('faq') 
                ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                : 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="text-center">
              <div className={`text-xs font-bold mb-2 ${isActive('faq') ? 'text-white' : 'text-gray-400'}`}>FAQ</div>
              <div className="w-full h-8 flex items-center justify-center">
                <img src="/images/chat-question-icon.svg" alt="FAQ" className={`w-8 h-8 object-contain ${isActive('faq') ? 'opacity-100' : 'opacity-70'}`} />
              </div>
            </div>
          </div>

          {/* Profile */}
          <div 
            onClick={() => onNavigate('profile')}
            className={`w-[64px] h-[80px] rounded-lg p-2 cursor-pointer transition-colors ${
              isActive('profile') 
                ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962]' 
                : 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="text-center">
              <div className={`text-xs font-bold mb-2 ${isActive('profile') ? 'text-white' : 'text-gray-400'}`}>Profile</div>
              <div className="w-full h-8 flex items-center justify-center">
                <img src="/images/profile-avatar.png" alt="Profile" className={`w-8 h-8 object-contain rounded-full ${isActive('profile') ? 'opacity-100' : 'opacity-70'}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - Log out */}
      <div 
        onClick={onLogout}
        className="w-[64px] bg-gradient-to-b from-[#1a1a2e] to-[#16213e] border border-gray-700 rounded-lg p-2 flex flex-col items-center gap-1 hover:border-gray-600 transition-colors cursor-pointer"
      >
        <span className="text-gray-400 text-xs font-bold">Log out</span>
        <DoorIcon className="w-7 h-7 text-gray-400" />
      </div>
    </aside>
  );
}