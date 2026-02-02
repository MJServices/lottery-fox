import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Page } from '../types';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';

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
    question: 'Is it safe to provide my personal information on Firstbtclottery.com?',
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
    question: 'How can I contact Firstbtclottery.com customer support?',
    answer: 'You can contact our customer support team through multiple channels: live chat on our website, email support, or by creating a support ticket in your account dashboard.',
    category: 'general'
  },
  {
    id: '5',
    question: 'How do I purchase a lottery ticket?',
    answer: 'You can contact Firstbtclottery.com customer support through our website, or live chat. Our support team is available 24hours.',
    category: 'lottery'
  },
  {
    id: '6',
    question: 'How do I create an account on Firstbtclottery.com?',
    answer: 'Creating an account is simple: click the "Sign Up" button, fill in your details including email and password, verify your email address, and you\'re ready to start playing.',
    category: 'general'
  }
];

export default function FAQ({ onLogout, onNavigate, currentPage }: FAQProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all-answers' | 'wallet-questions' | 'lottery-functions'>('all-answers');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>('5'); // Default expanded for demo

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
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col xl:flex-row">
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



                {/* Section Header with Star */}
                <div className="flex flex-col items-center mb-8">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-5 h-5">
                      <img src="/images/star-icon.png" alt="Star" className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-lg font-bold text-white uppercase tracking-wide">How it works</h2>
                  </div>

                  {/* Tabs */}
                  <div className="flex flex-wrap justify-center gap-2">
                    <button
                      onClick={() => setActiveTab('all-answers')}
                      className={`px-8 py-3 rounded-lg font-bold text-sm transition-all relative overflow-hidden ${activeTab === 'all-answers'
                        ? 'bg-gradient-to-r from-[#8FD811]/10 to-[#8FD811]/5 text-[#8FD811] border-b-2 border-[#8FD811]'
                        : 'bg-transparent text-[#525D68] hover:text-white'
                        }`}
                    >
                      <span className="relative z-10">All answers</span>
                      {activeTab === 'all-answers' && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8FD811] shadow-[0_0_10px_#8FD811]"></div>
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab('wallet-questions')}
                      className={`px-8 py-3 rounded-lg font-bold text-sm transition-all relative overflow-hidden ${activeTab === 'wallet-questions'
                        ? 'bg-gradient-to-r from-[#8FD811]/10 to-[#8FD811]/5 text-[#8FD811] border-b-2 border-[#8FD811]'
                        : 'bg-transparent text-[#525D68] hover:text-white'
                        }`}
                    >
                      <span className="relative z-10">Wallet questions</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('lottery-functions')}
                      className={`px-8 py-3 rounded-lg font-bold text-sm transition-all relative overflow-hidden ${activeTab === 'lottery-functions'
                        ? 'bg-gradient-to-r from-[#8FD811]/10 to-[#8FD811]/5 text-[#8FD811] border-b-2 border-[#8FD811]'
                        : 'bg-transparent text-[#525D68] hover:text-white'
                        }`}
                    >
                      <span className="relative z-10">Lottery functions</span>
                    </button>
                  </div>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                  {filteredFAQs().map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-[#101419] rounded-xl border border-[#1F252C] overflow-hidden hover:border-[#2A3139] transition-all group"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full p-5 lg:p-6 text-left flex items-start justify-between gap-4"
                      >
                        <h3 className="text-white font-bold text-sm lg:text-[15px] leading-relaxed group-hover:text-[#A2B4C6] transition-colors pt-1">
                          {faq.question}
                        </h3>

                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${expandedFAQ === faq.id
                          ? 'bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] shadow-[0_0_15px_rgba(255,75,15,0.3)]'
                          : 'bg-[#1F252C] group-hover:bg-[#2A3139]'
                          }`}>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${expandedFAQ === faq.id ? 'rotate-180 text-white' : 'text-[#525D68]'}`}
                          >
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </button>

                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedFAQ === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <div className="px-5 lg:px-6 pb-6">
                          <p className="text-[#525D68] text-sm leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            <Footer />
          </div>

          <div className="hidden xl:block">
            <Chat />
          </div>
        </div>

        <div className="xl:hidden border-t border-[#242D36] bg-[#13181D] p-3 pb-20">
          <button className="w-full p-3 text-left text-white font-bold text-sm bg-gradient-to-r from-[#9726E3] to-[#FF4B0F] rounded-lg hover:opacity-90 transition-opacity flex items-center justify-between">
            <span>💬 Open Chat</span>
            <span className="text-xs opacity-80">544 online</span>
          </button>
        </div>
      </div>

      <MobileNavbar onNavigate={onNavigate} currentPage={currentPage} />
    </div>
  );
}