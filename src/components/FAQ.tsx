import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Page } from '../types';
import MobileNavbar from './MobileNavbar';

interface FAQProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'wallet' | 'lottery';
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How are the lottery winners selected?',
    answer: 'Winners are selected through a transparent blockchain-based random number generation system that ensures fairness and cannot be manipulated.',
    category: 'lottery'
  },
  {
    id: '2',
    question: 'Is it safe to provide my personal information on FirstBlockLottery.com?',
    answer: 'Yes, we use industry-standard encryption and security measures to protect your personal information. We are fully compliant with data protection regulations.',
    category: 'general'
  },
  {
    id: '3',
    question: 'How can I recover my password if I forget it?',
    answer: 'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions sent to your registered email address.',
    category: 'general'
  },
  {
    id: '4',
    question: 'How can I contact FirstBlockLottery.com customer support?',
    answer: 'You can contact our customer support team through multiple channels: live chat on our website, email support, or by creating a support ticket in your account dashboard.',
    category: 'general'
  },
  {
    id: '5',
    question: 'How do I purchase a lottery ticket?',
    answer: 'You can purchase lottery tickets by selecting your numbers on the lottery page, choosing your ticket quantity, and completing the payment process using your preferred payment method.',
    category: 'lottery'
  },
  {
    id: '6',
    question: 'How do I create an account on FirstBlockLottery.com?',
    answer: 'Creating an account is simple: click the "Sign Up" button, fill in your details including email and password, verify your email address, and you\'re ready to start playing.',
    category: 'general'
  }
];

export default function FAQ({ onLogout, onNavigate, currentPage }: FAQProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'how-it-works' | 'all-answers' | 'wallet-questions' | 'lottery-functions'>('how-it-works');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const filteredFAQs = () => {
    switch (activeTab) {
      case 'wallet-questions':
        return faqData.filter(faq => faq.category === 'wallet');
      case 'lottery-functions':
        return faqData.filter(faq => faq.category === 'lottery');
      case 'all-answers':
        return faqData;
      default:
        return faqData;
    }
  };

  return (
    <div className="min-h-screen bg-[#13181D] text-white">
      <Header
        onLogout={onLogout}
        onNavigate={onNavigate}
        currentPage={currentPage}
      />

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMobileSidebarOpen(false)}>
          <div className="w-64 h-full bg-[#13181D]" onClick={(e) => e.stopPropagation()}>
            <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-74px)]">
        {/* Desktop Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block">
          <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
        </div>

        {/* Main Content - Full width on mobile, flexible on desktop */}
        <div className="flex-1 flex flex-col xl:flex-row">
          {/* FAQ Content */}
          <div className="flex-1 overflow-y-auto pb-20 lg:pb-0">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="max-w-7xl mx-auto">
                {/* FAQ Banner Image */}
                <div className="mb-8">
                  <img
                    src="/images/FAQ-banner.png"
                    alt="FAQ Banner"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>

                {/* Tab Navigation */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-400/33">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1L7.09 4.26L11 4.27L8 6.14L8.91 9.09L6 7.77L3.09 9.09L4 6.14L1 4.27L4.91 4.26L6 1Z" fill="white" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">How it works</h2>
                  </div>

                  <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
                    <button
                      onClick={() => setActiveTab('how-it-works')}
                      className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${activeTab === 'how-it-works'
                          ? 'bg-[#8FD811] text-[#253703]'
                          : 'bg-[#2A2F36] text-[#A2B4C6] hover:bg-[#3A3F46] hover:text-white'
                        }`}
                    >
                      How it works
                    </button>
                    <button
                      onClick={() => setActiveTab('all-answers')}
                      className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${activeTab === 'all-answers'
                          ? 'bg-[#8FD811] text-[#253703]'
                          : 'bg-[#2A2F36] text-[#A2B4C6] hover:bg-[#3A3F46] hover:text-white'
                        }`}
                    >
                      All answers
                    </button>
                    <button
                      onClick={() => setActiveTab('wallet-questions')}
                      className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${activeTab === 'wallet-questions'
                          ? 'bg-[#8FD811] text-[#253703]'
                          : 'bg-[#2A2F36] text-[#A2B4C6] hover:bg-[#3A3F46] hover:text-white'
                        }`}
                    >
                      Wallet questions
                    </button>
                    <button
                      onClick={() => setActiveTab('lottery-functions')}
                      className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${activeTab === 'lottery-functions'
                          ? 'bg-[#8FD811] text-[#253703]'
                          : 'bg-[#2A2F36] text-[#A2B4C6] hover:bg-[#3A3F46] hover:text-white'
                        }`}
                    >
                      Lottery functions
                    </button>
                  </div>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8">
                  {filteredFAQs().map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-[#1A1F26] rounded-xl border border-[#2A2F36] overflow-hidden hover:border-[#3A3F46] transition-colors"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full p-4 lg:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#242932] transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-sm lg:text-base leading-relaxed">
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`flex-shrink-0 w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center transition-transform ${expandedFAQ === faq.id ? 'rotate-45' : ''
                          }`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </button>

                      {expandedFAQ === faq.id && (
                        <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                          <div className="pt-2 border-t border-[#2A2F36]">
                            <p className="text-[#A2B4C6] text-sm lg:text-base leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chat - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden xl:block">
            <Chat />
          </div>
        </div>

        {/* Mobile Chat Button - Show on mobile only */}
        <div className="xl:hidden border-t border-[#242D36] bg-[#13181D] p-3 pb-20">
          <button className="w-full p-3 text-left text-white font-bold text-sm bg-gradient-to-r from-[#9726E3] to-[#FF4B0F] rounded-lg hover:opacity-90 transition-opacity flex items-center justify-between">
            <span>💬 Open Chat</span>
            <span className="text-xs opacity-80">544 online</span>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar onNavigate={onNavigate} currentPage={currentPage} />

      {/* Full Width Footer Section */}
      <footer className="bg-[#1A1F26] border-t border-[#2A2F36] w-full">
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Logo and Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <img src="/images/fox-logo.svg" alt="Fox Logo" className="w-8 h-8 mr-3" />
                <span className="text-xl font-bold text-white font-sans">LOTTERY</span>
              </div>
              <p className="text-[#A2B4C6] text-sm leading-relaxed">
                Experience the thrill of winning with Fox Lottery. Fair, transparent, and exciting lottery games with amazing prizes.
              </p>
            </div>

            {/* About Links */}
            <div>
              <h3 className="text-white font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#A2B4C6] hover:text-white transition-colors text-sm">Privacy policy</a></li>
                <li><a href="#" className="text-[#A2B4C6] hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
                <li><a href="#" className="text-[#A2B4C6] hover:text-white transition-colors text-sm">Refund policy</a></li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#A2B4C6] hover:text-white transition-colors text-sm">Troubleshooting</a></li>
                <li><a href="#" className="text-[#A2B4C6] hover:text-white transition-colors text-sm">Affiliate</a></li>
              </ul>
            </div>

            {/* Developers Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Developers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#A2B4C6] hover:text-white transition-colors text-sm">Bug Bounty</a></li>
                <li><a href="#" className="text-[#A2B4C6] hover:text-white transition-colors text-sm">Audits</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 pt-6 border-t border-[#2A2F36] flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[#A2B4C6] text-sm text-center sm:text-left">
              © 2024 FirstBlockLottery.com. All rights reserved.<br />
              <span className="text-xs">2024 LOTTERY FIRST BLOCK LOTTERY SERVICES LTD.</span>
            </div>

            {/* Social Links and Support */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#A2B4C6] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-[#A2B4C6] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <button className="bg-[#2A2F36] hover:bg-[#3A3F46] px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors">
                Support
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}