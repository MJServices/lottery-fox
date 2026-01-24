import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'deposit' | 'withdraw';
  currentPage?: string;
}

type Tab = 'deposit' | 'withdraw';
type Coin = 'bitcoin' | 'ethereum' | 'usdt';
type Chain = 'bitcoin' | 'ethereum' | 'tron';

const quickAmounts = [25, 50, 100, 125, 150, 200, 250];

export default function WalletModal({ isOpen, onClose, initialTab = 'deposit', currentPage }: WalletModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);
  const [selectedCoin] = useState<Coin>('bitcoin');
  const [selectedChain] = useState<Chain>('bitcoin');
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('100');
  const [balance] = useState('233 390 USDT');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Mock wallet address for deposit
  const depositAddress = '434903...430203';
  const fullDepositAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fullDepositAddress);
    // You could add a toast notification here
  };

  const handleWithdraw = () => {
    // Handle withdraw logic
    console.log('Withdraw:', { selectedCoin, selectedChain, walletAddress, amount });
  };

  if (!isOpen || currentPage === 'awards') return null;

  const modalContent = (
    <div 
      className="modal-overlay fixed inset-0 z-[99999] flex items-center justify-center p-4" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        isolation: 'isolate',
        zIndex: 999999
      }}
      onClick={onClose}
    >
      <div 
        className="modal-content bg-[#2A3441] rounded-2xl w-full max-w-md mx-auto border border-[#3A4451] shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{
          position: 'relative',
          zIndex: 1000000,
          isolation: 'isolate'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 sticky top-0 bg-[#2A3441] rounded-t-2xl" style={{ zIndex: 1000001 }}>
          <h2 className="text-2xl font-bold text-white">Wallet</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-6 mb-6 sticky top-[88px] bg-[#2A3441]" style={{ zIndex: 1000001 }}>
          <button
            onClick={() => setActiveTab('deposit')}
            className={`flex-1 py-3 px-4 text-base font-bold transition-all rounded-l-lg ${
              activeTab === 'deposit'
                ? 'text-white bg-[#4CAF50]'
                : 'text-gray-400 bg-[#1A1F26] hover:text-white'
            }`}
          >
            Deposit
          </button>
          <button
            onClick={() => setActiveTab('withdraw')}
            className={`flex-1 py-3 px-4 text-base font-bold transition-all rounded-r-lg ${
              activeTab === 'withdraw'
                ? 'text-white bg-[#4CAF50]'
                : 'text-gray-400 bg-[#1A1F26] hover:text-white'
            }`}
          >
            Withdraw
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 pb-6 space-y-6 overflow-y-auto">
          {/* Coin and Chain Selection */}
          <div className="grid grid-cols-2 gap-4">
            {/* Select Coin */}
            <div className="space-y-3">
              <label className="text-sm text-gray-400 block font-medium">Select coin</label>
              <div className="relative">
                <div className="w-full bg-[#1A1F26] border border-[#3A4451] rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer">
                  <img src="/images/bitcoin-icon.png" alt="Bitcoin" className="w-5 h-5" />
                  <span className="text-white font-medium flex-1">Bitcoin</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Select Chain */}
            <div className="space-y-3">
              <label className="text-sm text-gray-400 block font-medium">Select chain</label>
              <div className="relative">
                <div className="w-full bg-[#1A1F26] border border-[#3A4451] rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer">
                  <img src="/images/bitcoin-icon.png" alt="Bitcoin" className="w-5 h-5" />
                  <span className="text-white font-medium flex-1">Bitcoin</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {activeTab === 'deposit' ? (
            <>
              {/* QR Code and Address */}
              <div className="bg-[#1A1F26] rounded-lg p-4 border border-[#3A4451]">
                <div className="flex items-center gap-4">
                  {/* QR Code */}
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-16 h-16 bg-black rounded grid grid-cols-8 gap-px p-1">
                      {/* QR Code pattern - simplified representation */}
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-full h-full ${
                            Math.random() > 0.5 ? 'bg-white' : 'bg-black'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Address Info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-400 mb-2 font-medium">Wallet address</div>
                    <div className="text-white font-mono text-sm mb-3 font-medium">{depositAddress}</div>
                    <button
                      onClick={handleCopy}
                      className="w-full bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] rounded-lg py-2.5 px-4 text-white font-bold text-sm hover:opacity-90 transition-opacity"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Wallet Address Input */}
              <div className="space-y-3">
                <label className="text-sm text-gray-400 block font-medium">Wallet address</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter wallet address"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full bg-[#1A1F26] border border-[#3A4451] rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4CAF50] transition-colors text-base"
                  />
                  {walletAddress && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Amount Input */}
          <div className="space-y-3">
            <label className="text-sm text-gray-400 block font-medium">Enter amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-[#1A1F26] border border-[#3A4451] rounded-lg px-4 py-4 text-white text-2xl font-bold focus:outline-none focus:border-[#4CAF50] transition-colors"
            />
          </div>

          {/* Balance (for withdraw only) */}
          {activeTab === 'withdraw' && (
            <div className="text-base text-gray-400 font-medium">
              Balance: <span className="text-white font-bold">{balance}</span>
            </div>
          )}

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {quickAmounts.slice(0, 6).map((value) => (
              <button
                key={value}
                onClick={() => handleQuickAmount(value)}
                className={`px-4 py-3 rounded-lg text-base font-bold transition-colors ${
                  amount === value.toString()
                    ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] text-white'
                    : 'bg-[#1A1F26] border border-[#3A4451] text-gray-300 hover:text-white hover:border-gray-400'
                }`}
              >
                {value}
              </button>
            ))}
            {/* Last button (250) takes full width */}
            <div className="col-span-3">
              <button
                onClick={() => handleQuickAmount(250)}
                className={`w-full px-4 py-3 rounded-lg text-base font-bold transition-colors ${
                  amount === '250'
                    ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] text-white'
                    : 'bg-[#1A1F26] border border-[#3A4451] text-gray-300 hover:text-white hover:border-gray-400'
                }`}
              >
                250
              </button>
            </div>
          </div>

          {/* Action Button (only for withdraw) */}
          {activeTab === 'withdraw' && (
            <button
              onClick={handleWithdraw}
              disabled={!walletAddress || !amount}
              className="w-full bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] rounded-lg py-4 px-4 text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Withdraw
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // Render modal using portal to document.body to bypass stacking context issues
  return createPortal(modalContent, document.body);
}