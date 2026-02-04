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
        <nav className="hidden xl:flex items-center gap-2 2xl:gap-8 min-w-0">
          <div
            onClick={() => handleNavClick('play-now', 'home')}
            className="relative flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
          >
            <GameIcon className="w-4 h-4 flex-shrink-0" />
            <span className={`text-[10px] lg:text-[11px] font-bold whitespace-nowrap ${currentPage === 'home' ? 'text-white' : 'text-white'
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
            <span className={`text-[10px] lg:text-[11px] font-bold whitespace-nowrap ${currentPage === 'how-it-works' ? 'text-white' : 'text-[#A2B4C6]'
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
            <span className={`text-[10px] lg:text-[11px] font-bold whitespace-nowrap ${currentPage === 'faq' ? 'text-white' : 'text-[#A2B4C6]'
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
            <span className={`text-[10px] lg:text-[11px] font-bold whitespace-nowrap ${currentPage === 'hallOfFame' ? 'text-white' : 'text-[#A2B4C6]'
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
            <span className={`text-[10px] lg:text-[11px] font-bold whitespace-nowrap ${currentPage === 'awards' ? 'text-white' : 'text-[#A2B4C6]'
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
            <span className="text-[10px] lg:text-[11px] font-bold text-[#A2B4C6] whitespace-nowrap">Verify results</span>
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
          className="px-2 sm:px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-b from-[#1F1813] to-[#E36826] border border-[#2A3441] rounded-lg text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-bold text-[#A2B4C6] hover:text-white hover:border-[#334155] transition-all whitespace-nowrap"
        >
          Log in
        </button>

        {/* Sign up button */}
        <div className="relative inline-block">
          <img
            src="/images/gift-icon-removebg-preview.png"
            alt="Gift"
            className="absolute top-[4px] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain z-10 pointer-events-none drop-shadow-[0_0_8px_rgba(255,165,0,0.6)]"
          />
          <button
            onClick={() => setIsSignUpModalOpen(true)}
            className="w-[95px] md:w-[115px] left-[5px] px-3 sm:px-4 md:px-5 py-2.5 md:py-3 bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] rounded-lg text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-bold text-white hover:opacity-90 transition-opacity whitespace-nowrap shadow-[0_2px_10px_rgba(255,75,15,0.2)]"
          >
            Sign up
          </button>
        </div>

        {/* Blue Icon (Globe/Network) */}
        <button className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#00C6FB] to-[#005BEA] flex items-center justify-center hover:opacity-90 transition-opacity">
          <img src="/images/icon-2.png" alt="Globe" className="w-full h-6 object-contain" />
        </button>

        {/* Purple Icon (Discord/Chat) */}
        <button className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#9D50E5] to-[#58249F] flex items-center justify-center hover:opacity-90 transition-opacity">
          <img src="/images/lucky-hour-bg-image.png" alt="Globe" className="w-full h-6 object-contain" />
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