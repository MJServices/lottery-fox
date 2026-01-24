import { useState } from 'react';
import AuthFlow from './components/AuthFlow';
import Home from './components/Home';
import Results from './components/Results';
import Lottery from './components/Lottery';
import Affiliate from './components/Affiliate';
import Deposit from './components/Deposit';
import Profile from './components/Profile';
import HallOfFame from './components/HallOfFame';
import FAQ from './components/FAQ';
import VerifyResults from './components/VerifyResults';
import HowItWorks from './components/HowItWorks';
import Awards from './components/Awards';
import { Page } from './types';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  if (!isAuthenticated) {
    return <AuthFlow onAuthSuccess={handleAuthSuccess} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'results':
        return <Results onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'lottery':
        return <Lottery onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'affiliate':
        return <Affiliate onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'deposit':
        return <Deposit onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'profile':
        return <Profile onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'hallOfFame':
        return <HallOfFame onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'faq':
        return <FAQ onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'verify-results':
        return <VerifyResults onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'how-it-works':
        return <HowItWorks onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'awards':
        return <Awards onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'home':
      default:
        return <Home onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />;
    }
  };

  return renderPage();
}

export default App;