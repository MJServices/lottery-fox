import { useState } from 'react';
import AuthFlow from './components/AuthFlow';
import Home from './components/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AuthFlow onAuthSuccess={handleAuthSuccess} />;
  }

  return <Home onLogout={handleLogout} />;
}

export default App;