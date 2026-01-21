import { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import VerificationCode from './VerificationCode';
import CreateNewPassword from './CreateNewPassword';

interface AuthFlowProps {
  onAuthSuccess: () => void;
}

type AuthScreen = 'signin' | 'signup' | 'forgot-password' | 'verification' | 'create-password';

export default function AuthFlow({ onAuthSuccess }: AuthFlowProps) {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>('signin');

  const handleSwitchToSignUp = () => setCurrentScreen('signup');
  const handleSwitchToSignIn = () => setCurrentScreen('signin');
  const handleForgotPassword = () => setCurrentScreen('forgot-password');
  const handleVerificationSent = () => setCurrentScreen('verification');
  const handleVerificationSuccess = () => setCurrentScreen('create-password');
  const handlePasswordCreated = () => setCurrentScreen('signin');
  const handleBackToSignIn = () => setCurrentScreen('signin');

  switch (currentScreen) {
    case 'signup':
      return (
        <SignUp 
          onSwitchToSignIn={handleSwitchToSignIn}
          onSignUpSuccess={onAuthSuccess}
        />
      );
    
    case 'signin':
      return (
        <SignIn 
          onSwitchToSignUp={handleSwitchToSignUp}
          onSignInSuccess={onAuthSuccess}
          onForgotPassword={handleForgotPassword}
        />
      );
    
    case 'forgot-password':
      return (
        <ForgotPassword 
          onBack={handleBackToSignIn}
          onVerificationSent={handleVerificationSent}
        />
      );
    
    case 'verification':
      return (
        <VerificationCode 
          onBack={handleBackToSignIn}
          onVerificationSuccess={handleVerificationSuccess}
        />
      );
    
    case 'create-password':
      return (
        <CreateNewPassword 
          onBack={handleBackToSignIn}
          onPasswordCreated={handlePasswordCreated}
        />
      );
    
    default:
      return (
        <SignIn 
          onSwitchToSignUp={handleSwitchToSignUp}
          onSignInSuccess={onAuthSuccess}
          onForgotPassword={handleForgotPassword}
        />
      );
  }
}