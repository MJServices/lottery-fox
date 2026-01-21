import { useState } from 'react';

interface VerificationCodeProps {
  onBack: () => void;
  onVerificationSuccess: () => void;
}

export default function VerificationCode({ onBack, onVerificationSuccess }: VerificationCodeProps) {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the verification logic
    onVerificationSuccess();
  };

  return (
    <div className="min-h-screen bg-[#13181D] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#242D36] rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-bold">Type your verification code</h1>
          <button 
            onClick={onBack}
            className="text-[#A2B4C6] text-sm hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <p className="text-[#A2B4C6] text-sm mb-6">
          Please enter the 6-digit code.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#A2B4C6] text-sm font-medium mb-2">
              Verification code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-[#13181D] border border-[#3A4349] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#FF4B0F] transition-colors text-center text-2xl tracking-widest"
              placeholder="000000"
              maxLength={6}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow border border-[#FF8962]"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
}