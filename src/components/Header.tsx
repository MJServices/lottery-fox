import { useState, useEffect } from 'react';
import { User } from '../types';
import { GameIcon, ChatQuestionIcon, CursorInfoIcon, CheckmarkBadgeIcon } from './Icons';
import WalletModal from './WalletModal';
import SignUpModal from './SignUpModal';
import MobileMenu from './MobileMenu';

import { Page } from '../types';

interface HeaderProps {
  onLogout?: () => void;
  user?: User;
  onNavigateToWallet?: () => void;
  onNavigateToHistory?: () => void;
  onNavigateToSettings?: () => void;
  onNavigate?: (page: Page) => void;
  currentPage?: Page;
}

export default function Header({ onLogout, onNavigate, currentPage }: HeaderProps) {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false); // Add Sign Up State
  const [walletModalTab, setWalletModalTab] = useState<'deposit' | 'withdraw'>('deposit');
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close wallet modal when page changes
  useEffect(() => {
    setIsWalletModalOpen(false);
    setActiveNavItem(null);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  // Additional safety check to ensure modal is closed on Awards page
  useEffect(() => {
    if (currentPage === 'awards' && isWalletModalOpen) {
      setIsWalletModalOpen(false);
    }
  }, [currentPage, isWalletModalOpen]);

  // Force close modal on Awards page mount
  useEffect(() => {
    if (currentPage === 'awards') {
      setIsWalletModalOpen(false);
      setIsMobileMenuOpen(false);
    }
  }, [currentPage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDepositClick = () => {
    if (currentPage === 'awards') return; // Prevent modal on Awards page
    setWalletModalTab('deposit');
    setIsWalletModalOpen(true);
  };

  const handleWalletClick = () => {
    if (currentPage === 'awards') return; // Prevent modal on Awards page
    setWalletModalTab('withdraw');
    setIsWalletModalOpen(true);
  };

  const handleNavClick = (item: string, page?: Page) => {
    setActiveNavItem(item);
    if (page && onNavigate) {
      onNavigate(page);
    }
    // Reset active state after animation
    setTimeout(() => setActiveNavItem(null), 300);
  };

  return (
    <header className="w-full h-[60px] md:h-[74px] bg-[#13181D] border-b border-[#242D36] flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center min-w-0 flex-1">
        {/* Mobile Menu Toggle - Only visible on mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden mr-2 sm:mr-3 p-2 text-white hover:text-gray-300 transition-colors flex-shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center mr-2 sm:mr-4 md:mr-6 lg:mr-8 min-w-0 flex-shrink-0">
          <img
            src="/images/fox-logo.svg"
            alt="Fox Logo"
            className="mr-1 sm:mr-2 md:mr-3 w-[40px] h-[14px] sm:w-[60px] sm:h-[22px] md:w-[80px] md:h-[29px] lg:w-[100px] lg:h-[36px] flex-shrink-0"
          />
          <span
            className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] text-[#FFFDF8] tracking-[-1%] whitespace-nowrap lottery-logo"
            style={{ fontFamily: "'Luckiest Guy', cursive" }}
          >
            LOTTERY
          </span>
        </div>

        {/* Navigation Menu - Hidden on mobile and tablet */}
        <nav className="hidden xl:flex items-center gap-4 lg:gap-6 2xl:gap-8 min-w-0">
          <div
            onClick={() => handleNavClick('play-now', 'home')}
            className="relative flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <GameIcon className="w-4 h-4 flex-shrink-0" />
            <span className={`text-[12px] lg:text-[13px] font-bold whitespace-nowrap ${currentPage === 'home' ? 'text-white' : 'text-white'
              }`}>Play now</span>
            {/* Animated underline */}
            <div className={`absolute bottom-[-8px] left-0 h-0.5 bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] transition-all duration-300 ${activeNavItem === 'play-now' || currentPage === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
          </div>

          <div
            onClick={() => handleNavClick('how-it-works', 'how-it-works')}
            className="relative flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <ChatQuestionIcon className="w-4 h-4 flex-shrink-0" />
            <span className={`text-[12px] lg:text-[13px] font-bold whitespace-nowrap ${currentPage === 'how-it-works' ? 'text-white' : 'text-[#A2B4C6]'
              }`}>How it works</span>
            {/* Animated underline */}
            <div className={`absolute bottom-[-8px] left-0 h-0.5 bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] transition-all duration-300 ${activeNavItem === 'how-it-works' || currentPage === 'how-it-works' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
          </div>

          <div
            onClick={() => handleNavClick('faq', 'faq')}
            className="relative flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <CursorInfoIcon className="w-4 h-4 flex-shrink-0" />
            <span className={`text-[12px] lg:text-[13px] font-bold whitespace-nowrap ${currentPage === 'faq' ? 'text-white' : 'text-[#A2B4C6]'
              }`}>FAQ</span>
            {/* Animated underline */}
            <div className={`absolute bottom-[-8px] left-0 h-0.5 bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] transition-all duration-300 ${activeNavItem === 'faq' || currentPage === 'faq' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
          </div>

          <div
            onClick={() => handleNavClick('hall-of-fame', 'hallOfFame')}
            className="relative flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <CheckmarkBadgeIcon className="w-4 h-4 flex-shrink-0" />
            <span className={`text-[12px] lg:text-[13px] font-bold whitespace-nowrap ${currentPage === 'hallOfFame' ? 'text-white' : 'text-[#A2B4C6]'
              }`}>Hall of Fame</span>
            {/* Animated underline */}
            <div className={`absolute bottom-[-8px] left-0 h-0.5 bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] transition-all duration-300 ${activeNavItem === 'hall-of-fame' || currentPage === 'hallOfFame' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
          </div>

          <div
            onClick={() => handleNavClick('awards', 'awards')}
            className="relative flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
            <span className={`text-[12px] lg:text-[13px] font-bold whitespace-nowrap ${currentPage === 'awards' ? 'text-white' : 'text-[#A2B4C6]'
              }`}>Awards</span>
            {/* Animated underline */}
            <div className={`absolute bottom-[-8px] left-0 h-0.5 bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] transition-all duration-300 ${activeNavItem === 'awards' || currentPage === 'awards' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
          </div>

          <div
            onClick={() => handleNavClick('verify-results', 'verify-results')}
            className="relative flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <CheckmarkBadgeIcon className="w-4 h-4 flex-shrink-0" />
            <span className="text-[12px] lg:text-[13px] font-bold text-[#A2B4C6] whitespace-nowrap">Verify results</span>
            {/* Animated underline */}
            <div className={`absolute bottom-[-8px] left-0 h-0.5 bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] transition-all duration-300 ${activeNavItem === 'verify-results' || currentPage === 'verify-results' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
          </div>
        </nav>
      </div>

      {/* Right side - Auth buttons and social icons */}
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        {/* Wallet button */}
        <button
          onClick={handleWalletClick}
          className="hidden md:block px-2 sm:px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-b from-[#1F1813] to-[#E36826] border border-[#FF833F] rounded-lg text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-bold text-[#FFF0C4] hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Wallet
        </button>

        {/* Log in button */}
        <button
          className="px-2 sm:px-3 md:px-4 py-2 md:py-2.5 bg-[#13181D] border border-[#2A3441] rounded-lg text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-bold text-[#A2B4C6] hover:text-white hover:border-[#334155] transition-all whitespace-nowrap"
        >
          Log in
        </button>

        {/* Sign up button */}
        <div className="relative inline-block">
          <img
            src="/images/gift-icon-removebg-preview.png"
            alt="Gift"
            className="absolute -left-2 -top-2.5 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain z-10 pointer-events-none drop-shadow-[0_0_8px_rgba(255,165,0,0.6)]"
          />
          <button
            onClick={() => setIsSignUpModalOpen(true)}
            className="px-2 sm:px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] rounded-lg text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-bold text-white hover:opacity-90 transition-opacity whitespace-nowrap shadow-[0_2px_10px_rgba(255,75,15,0.2)]"
          >
            Sign up
          </button>
        </div>

        {/* Blue Icon (Globe/Network) */}
        <button className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#00C6FB] to-[#005BEA] flex items-center justify-center hover:opacity-90 transition-opacity">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2A15.3 15.3 0 0 1 16 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 8 12A15.3 15.3 0 0 1 12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Purple Icon (Discord/Chat) */}
        <button className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#9D50E5] to-[#58249F] flex items-center justify-center hover:opacity-90 transition-opacity">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
          </svg>
        </button>



        {/* Deposit button */}
        <button
          onClick={handleDepositClick}
          className="hidden md:block px-2 sm:px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] rounded-lg text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-bold text-white hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Deposit
        </button>


      </div>

      {/* Wallet Modal - Only show if not on awards page */}
      {currentPage !== 'awards' && (
        <WalletModal
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
          initialTab={walletModalTab}
          currentPage={currentPage}
        />
      )}

      {/* Sign Up Modal */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={onNavigate || (() => { })}
        onLogout={onLogout || (() => { })}
        currentPage={currentPage || 'home'}
      />
    </header>
  );
}