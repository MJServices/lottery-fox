import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';
import { Page } from '../types';

interface AwardsProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

interface Award {
  id: string;
  name: string;
  description: string;
  image: string;
  status: 'claimed' | 'unclaimed';
  category: 'all' | 'my' | 'special';
  bgColor: string;
  glowColor: string;
}

const awards: Award[] = [
  {
    id: '1',
    name: 'Baby Fox',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/baby-fox.png',
    status: 'claimed',
    category: 'all',
    bgColor: 'from-[#FFD700] via-[#FFA500] to-[#FF8C00]',
    glowColor: '#FFA600'
  },
  {
    id: '2',
    name: 'Player Fox',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/player-fox.png',
    status: 'unclaimed',
    category: 'all',
    bgColor: 'from-[#8D29FF] via-[#7C3AED] to-[#6D28D9]',
    glowColor: '#8D29FF'
  },
  {
    id: '3',
    name: 'Lucky Fox',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/lucky-fox-card-126e3c.png',
    status: 'claimed',
    category: 'all',
    bgColor: 'from-[#C6FF29] via-[#84CC16] to-[#65A30D]',
    glowColor: '#C6FF29'
  },
  {
    id: '4',
    name: 'Snack Fox',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/snack-fox.png',
    status: 'unclaimed',
    category: 'all',
    bgColor: 'from-[#9A2EFF] via-[#8B5CF6] to-[#7C3AED]',
    glowColor: '#9A2EFF'
  },
  {
    id: '5',
    name: 'Player Fox',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/player-fox-card-2-275023.png',
    status: 'unclaimed',
    category: 'all',
    bgColor: 'from-[#FF5B29] via-[#F97316] to-[#EA580C]',
    glowColor: '#FF5B29'
  },
  {
    id: '6',
    name: 'Streak Fox',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/streak-fox.png',
    status: 'unclaimed',
    category: 'all',
    bgColor: 'from-[#29FFF8] via-[#06B6D4] to-[#0891B2]',
    glowColor: '#29FFF8'
  },
  {
    id: '7',
    name: 'Lucky Belly Rub',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/lucky-belly-rub-card.png',
    status: 'unclaimed',
    category: 'special',
    bgColor: 'from-[#FF6A00] via-[#F59E0B] to-[#D97706]',
    glowColor: '#FF6A00'
  },
  {
    id: '8',
    name: 'Golden Fox',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/golden-fox-card.png',
    status: 'unclaimed',
    category: 'special',
    bgColor: 'from-[#2EFF38] via-[#10B981] to-[#059669]',
    glowColor: '#2EFF38'
  },
  {
    id: '9',
    name: 'Fox Party',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/fox-party-card.png',
    status: 'unclaimed',
    category: 'special',
    bgColor: 'from-[#297FFF] via-[#3B82F6] to-[#2563EB]',
    glowColor: '#297FFF'
  },
  {
    id: '10',
    name: 'Fox Parade',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/fox-parade-card.png',
    status: 'unclaimed',
    category: 'all',
    bgColor: 'from-[#1500FF] via-[#6366F1] to-[#4F46E5]',
    glowColor: '#1500FF'
  },
  {
    id: '11',
    name: 'Legend Fox',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/legend-fox-card.png',
    status: 'unclaimed',
    category: 'all',
    bgColor: 'from-[#FF2931] via-[#EF4444] to-[#DC2626]',
    glowColor: '#FF2931'
  },
  {
    id: '12',
    name: 'Fox Zen',
    description: 'Your very first ticket — welcome to the bamboo forest!',
    image: '/images/fox-zen-card.png',
    status: 'unclaimed',
    category: 'all',
    bgColor: 'from-[#FF298D] via-[#EC4899] to-[#DB2777]',
    glowColor: '#FF298D'
  }
];

export default function Awards({ onLogout, onNavigate, currentPage }: AwardsProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'my' | 'special'>('all');

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const filteredAwards = awards.filter(award => {
    if (activeTab === 'my') {
      return award.status === 'claimed';
    }
    if (activeTab === 'special') {
      return award.category === 'special';
    }
    return true; // 'all' shows everything
  });

  return (
    <div className="min-h-screen bg-[#13181D] flex flex-col">
      <Header
        onLogout={onLogout}
        onNavigate={onNavigate}
        currentPage={currentPage}
      />

      <div className="flex flex-1 relative">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMobileSidebar}></div>
            <div className="relative bg-[#13181D] w-80 max-w-sm">
              <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 relative">
          <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 pb-20 lg:pb-0">

            {/* Page Title - Moved to top */}
            <div className="py-4 sm:py-6 lg:py-8">
              <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-black leading-tight text-transparent bg-gradient-to-r from-[#D5FFA8] to-[#FFFFFF] bg-clip-text text-center">
                Lottery Awards
              </h1>
            </div>

            {/* Hero Banner Section - Responsive Design */}
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[452px] mb-6 sm:mb-8 overflow-hidden">
              {/* Background with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
                {/* Background decorative image */}
                <div className="absolute inset-0 opacity-25">
                  <img
                    src="/images/awards-background.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Large orange glow effect behind fox - Responsive */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[500px] md:h-[300px] lg:w-[645px] lg:h-[426px] rounded-full opacity-40 blur-[100px] sm:blur-[130px] md:blur-[160px] lg:blur-[186px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 75, 15, 1) 0%, rgba(255, 111, 63, 1) 100%)'
                }}
              ></div>

              {/* Floating decorative elements - Responsive positioning */}
              {/* Large coin - left side */}
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:top-[319px] lg:left-[236px] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] lg:w-[182px] lg:h-[177px]">
                <img
                  src="/images/awards-coin-1.png"
                  alt="Coin"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>

              {/* Small coin - top center */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 sm:top-6 md:top-8 lg:top-[97px] lg:left-[374px] lg:transform-none w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px] lg:w-[58px] lg:h-[62px]">
                <img
                  src="/images/awards-coin-1.png"
                  alt="Coin"
                  className="w-full h-full object-contain opacity-70"
                />
              </div>

              {/* Right side coin - hidden on mobile, visible on larger screens */}
              <div className="hidden md:block absolute top-4 right-4 md:top-8 md:right-8 lg:top-[105px] lg:right-[100px] w-[60px] h-[60px] lg:w-[113px] lg:h-[117px] opacity-50">
                <img
                  src="/images/awards-coin-1.png"
                  alt="Coin"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Decorative elements - hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[78px] lg:h-[82px] blur-[8px] md:blur-[13px] opacity-60">
                <img
                  src="/images/awards-decoration-1.png"
                  alt="Decoration"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="hidden md:block absolute top-6 right-12 lg:top-[92px] lg:right-[200px] w-[50px] h-[50px] lg:w-[88px] lg:h-[83px]">
                <img
                  src="/images/awards-decoration-2.png"
                  alt="Decoration"
                  className="w-full h-full object-contain opacity-75"
                />
              </div>

              <div className="hidden lg:block absolute bottom-8 right-8 lg:top-[350px] lg:right-[100px] w-[25px] h-[25px] lg:w-[39px] lg:h-[39px] blur-[4px] opacity-80">
                <img
                  src="/images/awards-decoration-3.png"
                  alt="Small decoration"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="hidden md:block absolute bottom-4 right-1/3 lg:top-[241px] lg:right-[200px] w-[45px] h-[35px] lg:w-[86px] lg:h-[62px]">
                <img
                  src="/images/awards-coin-2.png"
                  alt="Special coin"
                  className="w-full h-full object-contain opacity-85"
                />
              </div>

              {/* Main Fox Character - Responsive centered */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="relative">
                  {/* Fox character with arms spread */}
                  <img
                    src="/images/awards-fox-main.png"
                    alt="Lottery Awards Fox"
                    className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Tab Navigation - Responsive positioning */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[68px] left-1/2 transform -translate-x-1/2">
                <div className="bg-[#192025] rounded-xl p-1 flex gap-1 shadow-2xl">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-bold transition-all duration-200 whitespace-nowrap ${activeTab === 'all'
                        ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] text-white shadow-lg'
                        : 'text-white hover:bg-[#242D36]'
                      }`}
                  >
                    All awards
                  </button>
                  <button
                    onClick={() => setActiveTab('my')}
                    className={`px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-bold transition-all duration-200 whitespace-nowrap ${activeTab === 'my'
                        ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] text-white shadow-lg'
                        : 'text-white hover:bg-[#242D36]'
                      }`}
                  >
                    My awards
                  </button>
                  <button
                    onClick={() => setActiveTab('special')}
                    className={`px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-bold transition-all duration-200 whitespace-nowrap ${activeTab === 'special'
                        ? 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] text-white shadow-lg'
                        : 'text-white hover:bg-[#242D36]'
                      }`}
                  >
                    Special awards
                  </button>
                </div>
              </div>
            </div>

            {/* Awards Grid - Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-12 px-2 sm:px-4">
              {filteredAwards.map((award) => (
                <div
                  key={award.id}
                  className="relative w-full max-w-[413px] mx-auto h-[140px] sm:h-[160px] lg:h-[171px] bg-[#192025] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  {/* Background glow effect */}
                  <div
                    className="absolute -top-[15px] sm:-top-[20px] lg:-top-[25px] -left-[80px] sm:-left-[100px] lg:-left-[115px] w-[150px] sm:w-[180px] lg:w-[222px] h-[150px] sm:h-[180px] lg:h-[222px] rounded-full opacity-30 blur-[60px] sm:blur-[80px] lg:blur-[109px]"
                    style={{ backgroundColor: award.glowColor }}
                  ></div>

                  {/* Award content */}
                  <div className="relative z-10 p-3 sm:p-4 lg:p-6 h-full">
                    {/* Status badge - Top right */}
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm font-bold ${award.status === 'claimed'
                          ? 'bg-gradient-to-b from-[#8FD811] to-[#E1FF75] text-[#253703] border border-[#50B200]'
                          : 'bg-gradient-to-b from-[#2B3540] to-[#4A5968] text-white border border-[#46546B]'
                        }`}>
                        {award.status === 'claimed' ? 'Claimed' : 'Unclaimed'}
                      </span>
                    </div>

                    {/* Award image - Left side */}
                    <div className="absolute top-[6px] left-[8px] sm:left-[10px] lg:left-[13px] w-[100px] sm:w-[120px] lg:w-[148px] h-[120px] sm:h-[140px] lg:h-[152px] flex items-center justify-center">
                      <div className="w-full h-full rounded-xl overflow-hidden bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
                        <img
                          src={award.image}
                          alt={award.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Award info - Right side */}
                    <div className="absolute top-[30px] sm:top-[35px] lg:top-[47px] left-[115px] sm:left-[135px] lg:left-[178px] right-4 sm:right-6">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2 leading-tight">
                        {award.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A2B4C6] leading-relaxed line-clamp-3">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state for filtered results */}
            {filteredAwards.length === 0 && (
              <div className="text-center py-12 sm:py-16 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 opacity-30">
                  <img
                    src="/images/awards-fox-main.png"
                    alt="No awards"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">No awards found</h3>
                <p className="text-sm sm:text-base text-[#A2B4C6] max-w-md mx-auto">
                  {activeTab === 'my'
                    ? "You haven't claimed any awards yet. Keep playing to earn your first award!"
                    : "No awards available in this category."
                  }
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden">
        <MobileNavbar onNavigate={onNavigate} currentPage={currentPage} />
      </div>
    </div>
  );
}