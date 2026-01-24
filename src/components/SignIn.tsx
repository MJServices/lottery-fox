import { useState } from 'react';

interface SignInProps {
  onSwitchToSignUp: () => void;
  onSignInSuccess: () => void;
  onForgotPassword: () => void;
}

export default function SignIn({ onSwitchToSignUp, onSignInSuccess, onForgotPassword }: SignInProps) {
  const [formData, setFormData] = useState({
    email: 'mjdev000@gmail.com',
    password: '',
    registerAmount: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignInSuccess();
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    onSignInSuccess();
  };

  return (
    <div className="h-screen bg-[#13181D] flex items-center justify-center p-0">
      <div className="w-full h-full max-w-none flex flex-col lg:flex-row bg-[#1A1F25] overflow-hidden shadow-2xl">
        
        {/* Left Side - Promotional Card */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#8FD811] to-[#E1FF75] p-2 sm:p-4 lg:p-6 flex flex-col justify-center items-center relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="/images/image.png" 
              alt="Fox Character - Sign In Promotion" 
              className="w-full h-full object-contain max-w-none max-h-none"
              style={{ 
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-[#242D36] flex flex-col justify-center overflow-y-auto">
          <div className="w-full max-w-md mx-auto">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-3 xs:mb-4 sm:mb-6 lg:mb-8">
              <h1 className="text-white text-base xs:text-lg sm:text-2xl lg:text-3xl font-bold">Sign in</h1>
              <button 
                onClick={onSwitchToSignUp}
                className="text-[#A2B4C6] text-sm xs:text-base sm:text-lg lg:text-xl hover:text-white transition-colors p-1"
              >
                ✕
              </button>
            </div>

            {/* Social Login Options */}
            <div className="space-y-1.5 xs:space-y-2 sm:space-y-3 mb-3 xs:mb-4 sm:mb-6">
              
              {/* Google */}
              <button
                onClick={() => handleSocialLogin('Google')}
                className="w-full bg-white text-gray-800 py-1.5 xs:py-2 sm:py-3 rounded-md sm:rounded-lg font-semibold text-xs xs:text-sm sm:text-base hover:bg-gray-100 transition-colors flex items-center justify-center gap-1 xs:gap-2 sm:gap-3"
              >
                <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="hidden xs:inline">Google</span>
                <span className="xs:hidden">G</span>
              </button>

              {/* Facebook */}
              <button
                onClick={() => handleSocialLogin('Facebook')}
                className="w-full bg-[#1877F2] text-white py-1.5 xs:py-2 sm:py-3 rounded-md sm:rounded-lg font-semibold text-xs xs:text-sm sm:text-base hover:bg-[#166FE5] transition-colors flex items-center justify-center gap-1 xs:gap-2 sm:gap-3"
              >
                <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="hidden xs:inline">Facebook</span>
                <span className="xs:hidden">F</span>
              </button>

              {/* Apple & Discord */}
              <div className="grid grid-cols-2 gap-1 xs:gap-2 sm:gap-3">
                <button
                  onClick={() => handleSocialLogin('Apple')}
                  className="w-full bg-black text-white py-1.5 xs:py-2 sm:py-3 rounded-md sm:rounded-lg font-semibold text-xs xs:text-sm sm:text-base hover:bg-gray-900 transition-colors flex items-center justify-center gap-1"
                >
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                  </svg>
                  <span className="hidden sm:inline">Apple</span>
                  <span className="sm:hidden">🍎</span>
                </button>

                <button
                  onClick={() => handleSocialLogin('Discord')}
                  className="w-full bg-[#5865F2] text-white py-1.5 xs:py-2 sm:py-3 rounded-md sm:rounded-lg font-semibold text-xs xs:text-sm sm:text-base hover:bg-[#4752C4] transition-colors flex items-center justify-center gap-1"
                >
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                  </svg>
                  <span className="hidden sm:inline">Discord</span>
                  <span className="sm:hidden">💬</span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center mb-3 xs:mb-4 sm:mb-6">
              <div className="flex-1 border-t border-[#3A4349]"></div>
              <span className="px-2 xs:px-3 sm:px-4 text-[#A2B4C6] text-xs xs:text-sm">or</span>
              <div className="flex-1 border-t border-[#3A4349]"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2 xs:space-y-3 sm:space-y-4">
              
              {/* Email and Register Amount Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                <div>
                  <label className="block text-[#A2B4C6] text-xs sm:text-sm font-medium mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#13181D] border border-[#3A4349] rounded-md sm:rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-3 text-white text-xs xs:text-sm sm:text-base placeholder-[#6B7280] focus:outline-none focus:border-[#FF4B0F] transition-colors"
                    placeholder="mjdev000@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#A2B4C6] text-xs sm:text-sm font-medium mb-1">
                    Register amount
                  </label>
                  <input
                    type="number"
                    name="registerAmount"
                    value={formData.registerAmount}
                    onChange={handleInputChange}
                    className="w-full bg-[#13181D] border border-[#3A4349] rounded-md sm:rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-3 text-white text-xs xs:text-sm sm:text-base placeholder-[#6B7280] focus:outline-none focus:border-[#FF4B0F] transition-colors"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[#A2B4C6] text-xs sm:text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-[#13181D] border border-[#3A4349] rounded-md sm:rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-3 text-white text-xs xs:text-sm sm:text-base placeholder-[#6B7280] focus:outline-none focus:border-[#FF4B0F] transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] text-white py-2 xs:py-3 sm:py-4 rounded-md sm:rounded-lg font-bold text-sm xs:text-base sm:text-lg hover:shadow-lg transition-shadow border border-[#FF8962] mt-3 xs:mt-4 sm:mt-6"
              >
                Sign In
              </button>

              {/* Links */}
              <div className="text-center space-y-1 xs:space-y-2 mt-3 xs:mt-4 sm:mt-6">
                <button
                  type="button"
                  onClick={onSwitchToSignUp}
                  className="text-[#A2B4C6] text-xs sm:text-sm hover:text-white transition-colors block w-full"
                >
                  Don't have an account? Sign up
                </button>
                <button
                  type="button"
                  onClick={onForgotPassword}
                  className="text-[#FF4B0F] text-xs sm:text-sm hover:underline block w-full"
                >
                  Forgot password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}