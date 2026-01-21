import { useState } from 'react';

interface ForgotPasswordProps {
  onBack: () => void;
  onVerificationSent: () => void;
}

export default function ForgotPassword({ onBack, onVerificationSent }: ForgotPasswordProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the forgot password logic
    onVerificationSent();
  };

  return (
    <div className="min-h-screen bg-[#13181D] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#242D36] rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-bold">Forgot password</h1>
          <button 
            onClick={onBack}
            className="text-[#A2B4C6] text-sm hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <p className="text-[#A2B4C6] text-sm mb-6">
          Enter your email and get back into your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#A2B4C6] text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#13181D] border border-[#3A4349] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#FF4B0F] transition-colors"
              placeholder="Enter email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow border border-[#FF8962]"
          >
            Send verification email
          </button>
        </form>
      </div>
    </div>
  );
}