import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Chat from './Chat';
import Footer from './Footer';

interface HomeProps {
  onLogout: () => void;
}

export default function Home({ onLogout }: HomeProps) {
  return (
    <div className="min-h-screen bg-[#13181D] text-white">
      {/* Header */}
      <Header onLogout={onLogout} />
      
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-74px)]">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        
        {/* Main Content - Full width on mobile, flexible on desktop */}
        <div className="flex-1 flex flex-col xl:flex-row">
          <MainContent />
          
          {/* Chat - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden xl:block">
            <Chat />
          </div>
        </div>
        
        {/* Mobile Chat Button - Show on mobile only */}
        <div className="xl:hidden border-t border-[#242D36] bg-[#13181D] p-3">
          <button className="w-full p-3 text-left text-white font-bold text-sm bg-gradient-to-r from-[#9726E3] to-[#FF4B0F] rounded-lg hover:opacity-90 transition-opacity flex items-center justify-between">
            <span>💬 Open Chat</span>
            <span className="text-xs opacity-80">544 online</span>
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}