import { User } from '../types';
import { TwitterIcon, DiscordIcon } from './SocialIcons';
import { GameIcon, ChatQuestionIcon, CursorInfoIcon, CheckmarkBadgeIcon } from './Icons';

interface HeaderProps {
  onLogout?: () => void;
  user?: User;
  onNavigateToWallet?: () => void;
  onNavigateToHistory?: () => void;
  onNavigateToSettings?: () => void;
  onToggleMobileSidebar?: () => void;
}

export default function Header({ onLogout, onToggleMobileSidebar }: HeaderProps) {
  return (
    <header className="w-full h-[60px] md:h-[74px] bg-[#13181D] border-b border-[#242D36] flex items-center justify-between px-3 md:px-6">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center">
        {/* Mobile Sidebar Toggle - Only visible on mobile */}
        {onToggleMobileSidebar && (
          <button 
            onClick={onToggleMobileSidebar}
            className="lg:hidden mr-3 p-2 text-white hover:text-gray-300 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Logo */}
        <div className="flex items-center mr-4 md:mr-12">
          <img
            src="/images/fox-logo.svg"
            alt="Fox Logo"
            className="mr-2 md:mr-3 w-[80px] h-[30px] md:w-[120px] md:h-[43px]"
          />
          <span className="text-[20px] md:text-[30px] font-black text-[#FFFDF8] tracking-[-1%] font-luckiest">
            LOTTERY
          </span>
        </div>

        {/* Navigation Menu - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          <div className="flex items-center gap-2 cursor-pointer">
            <GameIcon className="w-4 h-4" />
            <span className="text-[14px] font-bold text-white">Play now</span>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer">
            <ChatQuestionIcon className="w-4 h-4" />
            <span className="text-[14px] font-bold text-[#A2B4C6]">How it works</span>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer">
            <CursorInfoIcon className="w-4 h-4" />
            <span className="text-[14px] font-bold text-[#A2B4C6]">FAQ</span>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer">
            <CheckmarkBadgeIcon className="w-4 h-4" />
            <span className="text-[14px] font-bold text-[#A2B4C6]">Verify results</span>
          </div>
        </nav>
      </div>

      {/* Right side - Auth buttons and social icons */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Log in button */}
        <button 
          onClick={onLogout}
          className="px-3 md:px-6 py-2 md:py-[14px] bg-gradient-to-b from-[#1F1813] to-[#E36826] border border-[#FF833F] rounded-lg text-[12px] md:text-[14px] font-bold text-[#FFF0C4]"
        >
          Log out
        </button>
        
        {/* Sign up button */}
        <button className="px-2 md:px-4 py-2 md:py-[14px] bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] rounded-lg text-[12px] md:text-[14px] font-bold text-white">
          Deposit
        </button>
        
        {/* Social icons - Hidden on mobile */}
        <div className="hidden md:flex gap-2 ml-2 md:ml-3">
          <div className="w-9 md:w-11 h-9 md:h-11 bg-gradient-to-b from-[#00AAFF] to-[#90DAFF] rounded-lg flex items-center justify-center">
            <TwitterIcon className="w-5 md:w-7 h-5 md:h-7 text-white" />
          </div>
          <div className="w-9 md:w-11 h-9 md:h-11 bg-gradient-to-b from-[#9A76FF] to-[#C8B4FF] rounded-lg flex items-center justify-center">
            <DiscordIcon className="w-5 md:w-7 h-5 md:h-7 text-white" />
          </div>
        </div>
        
        {/* Profile image */}
        <div className="w-6 md:w-8 h-8 md:h-10 ml-2 md:ml-3">
          <img
            src="/images/profile-avatar.png"
            alt="Profile Avatar"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </header>
  );
}