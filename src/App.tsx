import { useState } from 'react';
import AuthFlow from './components/AuthFlow';
import Home from './components/Home';
import Results from './components/Results';
import Lottery from './components/Lottery';
import Affiliate from './components/Affiliate';
import Deposit from './components/Deposit';

type Page = 'home' | 'results' | 'lottery' | 'leaders' | 'affiliate' | 'faq' | 'deposit';

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

  const handleDepositClick = () => {
    setCurrentPage('deposit');
  };

  const handleBackFromDeposit = () => {
    setCurrentPage('home');
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
        return <Deposit onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} onBack={handleBackFromDeposit} />;
      case 'home':
      default:
        return <Home onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} onDepositClick={handleDepositClick} />;
    }
  };

  return renderPage();
}

export default App;