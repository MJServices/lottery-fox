import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';
import ResponsiveLayout from './ResponsiveLayout';
import { Page } from '../types';

type DepositMethod = 'bitcoin' | 'ethereum' | 'usdt' | 'card';

interface DepositProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

interface PaymentMethod {
  id: DepositMethod;
  name: string;
  icon: string;
  description: string;
  minAmount: string;
  maxAmount: string;
  processingTime: string;
  fee: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    icon: '/images/bitcoin-icon.png',
    description: 'Fast and secure Bitcoin deposits',
    minAmount: '0.001 BTC',
    maxAmount: '10 BTC',
    processingTime: '10-30 minutes',
    fee: 'Network fee only'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    icon: '/images/bitcoin-icon.png', // Using bitcoin icon as placeholder
    description: 'Quick Ethereum transactions',
    minAmount: '0.01 ETH',
    maxAmount: '100 ETH',
    processingTime: '5-15 minutes',
    fee: 'Network fee only'
  },
  {
    id: 'usdt',
    name: 'USDT (TRC20)',
    icon: '/images/bitcoin-icon.png', // Using bitcoin icon as placeholder
    description: 'Stable coin deposits',
    minAmount: '10 USDT',
    maxAmount: '50,000 USDT',
    processingTime: '5-10 minutes',
    fee: '1 USDT'
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: '/images/bitcoin-icon.png', // Using bitcoin icon as placeholder
    description: 'Instant card payments',
    minAmount: '$10',
    maxAmount: '$5,000',
    processingTime: 'Instant',
    fee: '3.5%'
  }
];

export default function Deposit({ onLogout, onNavigate, currentPage }: DepositProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<DepositMethod | null>(null);
  const [step, setStep] = useState<'select' | 'form'>('select');

  const handleMethodSelect = (method: DepositMethod) => {
    setSelectedMethod(method);
    setStep('form');
  };

  const handleBack = () => {
    if (step === 'form') {
      setStep('select');
      setSelectedMethod(null);
    } else {
      onNavigate('home');
    }
  };

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
                  className="text-gray-400 hover:text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              {/* Mobile Navigation Items */}
              <div className="space-y-3 sm:space-y-4">
                {/* Navigation Items */}
                <div className="space-y-2 sm:space-y-3">
                  {/* Home */}
                  <button 
                    onClick={() => {
                      onNavigate('home');
                      setIsMobileSidebarOpen(false);
                    }}
                    className="w-full h-14 sm:h-16 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-700 hover:border-gray-600"
                  >
                    <img src="/images/home-icon.png" alt="Home" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                    <span className="font-bold text-base sm:text-lg text-gray-400">Home</span>
                  </button>

                  {/* Other navigation items... */}
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
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          {/* Deposit Content */}
          <div className="flex-1 overflow-y-auto pb-20 lg:pb-0">
            <ResponsiveLayout>
              <div className="py-6 sm:py-8 md:py-10">
                {/* Header with Back Button */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <button
                    onClick={handleBack}
                    className="p-2 sm:p-3 bg-[#1E242A] border border-[#2A3441] rounded-xl hover:bg-[#242A32] transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                      <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                      {step === 'select' ? 'Deposit Funds' : `Deposit ${selectedMethod ? paymentMethods.find(m => m.id === selectedMethod)?.name : ''}`}
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base mt-1">
                      {step === 'select' ? 'Choose your preferred payment method' : 'Complete your deposit'}
                    </p>
                  </div>
                </div>

                {step === 'select' ? (
                  /* Payment Method Selection */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => handleMethodSelect(method.id)}
                        className="bg-gradient-to-b from-[#25253F] to-[#3E4159] border border-[#25253F] rounded-2xl p-6 sm:p-8 text-left hover:border-[#FF4B0F] transition-all group"
                      >
                        <div className="flex items-start gap-4 sm:gap-6">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1E242A] rounded-xl flex items-center justify-center flex-shrink-0">
                            <img src={method.icon} alt={method.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{method.name}</h3>
                            <p className="text-gray-400 text-sm sm:text-base mb-4">{method.description}</p>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-gray-500">Min/Max:</span>
                                <span className="text-gray-300">{method.minAmount} - {method.maxAmount}</span>
                              </div>
                              <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-gray-500">Processing:</span>
                                <span className="text-gray-300">{method.processingTime}</span>
                              </div>
                              <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-gray-500">Fee:</span>
                                <span className="text-gray-300">{method.fee}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-[#FF4B0F] transition-colors">
                              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  /* Deposit Form */
                  selectedMethod && (
                    <DepositForm 
                      method={paymentMethods.find(m => m.id === selectedMethod)!}
                    />
                  )
                )}
              </div>
            </ResponsiveLayout>
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

interface DepositFormProps {
  method: PaymentMethod;
}

function DepositForm({ method }: DepositFormProps) {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async () => {
    setIsProcessing(true);
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    // Handle deposit logic here
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-b from-[#25253F] to-[#3E4159] border border-[#25253F] rounded-2xl p-6 sm:p-8">
        {/* Method Info */}
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1E242A] rounded-xl flex items-center justify-center">
            <img src={method.icon} alt={method.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{method.name}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{method.description}</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Amount Input */}
          <div className="space-y-2">
            <label className="text-sm sm:text-base font-semibold text-[#A2B4C6] block">
              Amount
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder={`Min: ${method.minAmount}`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#1E242A] border border-[#2A3441] rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-2 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base">
                {method.id === 'card' ? 'USD' : method.name.split(' ')[0]}
              </div>
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-gray-500">
              <span>Min: {method.minAmount}</span>
              <span>Max: {method.maxAmount}</span>
            </div>
          </div>

          {/* Address Input (for crypto) */}
          {method.id !== 'card' && (
            <div className="space-y-2">
              <label className="text-sm sm:text-base font-semibold text-[#A2B4C6] block">
                Wallet Address
              </label>
              <input
                type="text"
                placeholder="Enter your wallet address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-[#1E242A] border border-[#2A3441] rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-bold text-white placeholder-[#525D68] focus:outline-none focus:ring-2 focus:ring-[#FF4B0F] focus:border-[#FF4B0F] transition-all"
              />
            </div>
          )}

          {/* Transaction Info */}
          <div className="bg-[#1E242A] rounded-xl p-4 sm:p-6 space-y-3">
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-gray-400">Processing Time:</span>
              <span className="text-white">{method.processingTime}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-gray-400">Fee:</span>
              <span className="text-white">{method.fee}</span>
            </div>
            {amount && (
              <div className="flex justify-between text-sm sm:text-base border-t border-gray-700 pt-3">
                <span className="text-gray-400 font-semibold">Total Amount:</span>
                <span className="text-[#FF4B0F] font-bold">{amount} {method.id === 'card' ? 'USD' : method.name.split(' ')[0]}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!amount || (method.id !== 'card' && !address) || isProcessing}
            className="w-full bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] rounded-xl px-6 py-4 sm:py-5 text-base sm:text-lg font-extrabold text-white hover:opacity-90 transition-all active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </div>
            ) : (
              `Deposit ${amount ? amount + ' ' + (method.id === 'card' ? 'USD' : method.name.split(' ')[0]) : ''}`
            )}
          </button>
        </div>
      </div>
    </div>
  );
}