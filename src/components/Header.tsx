import { useState } from 'react';
import { User } from '../types';
import { TwitterIcon, DiscordIcon } from './SocialIcons';
import { GameIcon, ChatQuestionIcon, CursorInfoIcon, CheckmarkBadgeIcon } from './Icons';
import WalletModal from './WalletModal';

interface HeaderProps {
  onLogout?: () => void;
  user?: User;
  onNavigateToWallet?: () => void;
  onNavigateToHistory?: () => void;
  onNavigateToSettings?: () => void;
  onToggleMobileSidebar?: () => void;
}

export default function Header({ onLogout, onToggleMobileSidebar }: HeaderProps) {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [walletModalTab, setWalletModalTab] = useState<'deposit' | 'withdraw'>('deposit');

  const handleDepositClick = () => {
    setWalletModalTab('deposit');
    setIsWalletModalOpen(true);
  };

  const handleWalletClick = () => {
    setWalletModalTab('withdraw');
    setIsWalletModalOpen(true);
  };
  return (
    <header className="w-full h-[60px] md:h-[74px] bg-[#13181D] border-b border-[#242D36] flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center min-w-0 flex-1">
        {/* Mobile Sidebar Toggle - Only visible on mobile */}
        {onToggleMobileSidebar && (
          <button 
            onClick={onToggleMobileSidebar}
            className="lg:hidden mr-2 sm:mr-3 p-2 text-white hover:text-gray-300 transition-colors flex-shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Logo */}
        <div className="flex items-center mr-2 sm:mr-4 md:mr-8 lg:mr-12 min-w-0">
          <img
            src="/images/fox-logo.svg"
            alt="Fox Logo"
            className="mr-1 sm:mr-2 md:mr-3 w-[60px] h-[22px] sm:w-[80px] sm:h-[30px] md:w-[100px] md:h-[36px] lg:w-[120px] lg:h-[43px] flex-shrink-0"
          />
          <span className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-black text-[#FFFDF8] tracking-[-1%] font-luckiest truncate">
            LOTTERY
          </span>
        </div>

        {/* Navigation Menu - Hidden on mobile and tablet */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-12 min-w-0">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <GameIcon className="w-4 h-4 flex-shrink-0" />
            <span className="text-[13px] lg:text-[14px] font-bold text-white whitespace-nowrap">Play now</span>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <ChatQuestionIcon className="w-4 h-4 flex-shrink-0" />
            <span className="text-[13px] lg:text-[14px] font-bold text-[#A2B4C6] whitespace-nowrap">How it works</span>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <CursorInfoIcon className="w-4 h-4 flex-shrink-0" />
            <span className="text-[13px] lg:text-[14px] font-bold text-[#A2B4C6] whitespace-nowrap">FAQ</span>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <CheckmarkBadgeIcon className="w-4 h-4 flex-shrink-0" />
            <span className="text-[13px] lg:text-[14px] font-bold text-[#A2B4C6] whitespace-nowrap">Verify results</span>
          </div>
        </nav>
      </div>

      {/* Right side - Auth buttons and social icons */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
        {/* Wallet button */}
        <button 
          onClick={handleWalletClick}
          className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-[14px] bg-gradient-to-b from-[#1F1813] to-[#E36826] border border-[#FF833F] rounded-lg text-[10px] sm:text-[12px] md:text-[14px] font-bold text-[#FFF0C4] hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Wallet
        </button>

        {/* Log out button */}
        <button 
          onClick={onLogout}
          className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-[14px] bg-gradient-to-b from-[#1F1813] to-[#E36826] border border-[#FF833F] rounded-lg text-[10px] sm:text-[12px] md:text-[14px] font-bold text-[#FFF0C4] hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Log out
        </button>
        
        {/* Deposit button */}
        <button 
          onClick={handleDepositClick}
          className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-[14px] bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] rounded-lg text-[10px] sm:text-[12px] md:text-[14px] font-bold text-white hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Deposit
        </button>
        
        {/* Social icons - Hidden on mobile */}
        <div className="hidden md:flex gap-1 lg:gap-2 ml-1 lg:ml-3">
          <div className="w-8 h-8 lg:w-11 lg:h-11 bg-gradient-to-b from-[#00AAFF] to-[#90DAFF] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
            <TwitterIcon className="w-4 h-4 lg:w-7 lg:h-7 text-white" />
          </div>
          <div className="w-8 h-8 lg:w-11 lg:h-11 bg-gradient-to-b from-[#9A76FF] to-[#C8B4FF] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
            <DiscordIcon className="w-4 h-4 lg:w-7 lg:h-7 text-white" />
          </div>
        </div>
        
        {/* Profile image */}
        <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ml-1 sm:ml-2 md:ml-3 flex-shrink-0">
          <img
            src="/images/profile-avatar.png"
            alt="Profile Avatar"
            className="w-full h-full object-cover rounded hover:opacity-90 transition-opacity cursor-pointer"
          />
        </div>
      </div>

      {/* Wallet Modal */}
      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        initialTab={walletModalTab}
      />
    </header>
  );
}