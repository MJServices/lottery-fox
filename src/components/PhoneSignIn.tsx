import { useState } from 'react';

interface PhoneSignInProps {
  onBack: () => void;
  onVerificationSent: () => void;
}

export default function PhoneSignIn({ onBack, onVerificationSent }: PhoneSignInProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the phone verification logic
    onVerificationSent();
  };

  return (
    <div className="min-h-screen bg-[#13181D] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#242D36] rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-bold">Sign in with Phone</h1>
          <button 
            onClick={onBack}
            className="text-[#A2B4C6] text-sm hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <p className="text-[#A2B4C6] text-sm mb-6">
          Enter your phone number and we'll send you a verification code.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#A2B4C6] text-sm font-medium mb-2">
              Phone Number
            </label>
            <div className="flex gap-3">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="bg-[#13181D] border border-[#3A4349] rounded-lg px-3 py-3 text-white focus:outline-none focus:border-[#FF4B0F] transition-colors"
              >
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+86">🇨🇳 +86</option>
                <option value="+81">🇯🇵 +81</option>
                <option value="+49">🇩🇪 +49</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+39">🇮🇹 +39</option>
                <option value="+34">🇪🇸 +34</option>
                <option value="+7">🇷🇺 +7</option>
              </select>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 bg-[#13181D] border border-[#3A4349] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#FF4B0F] transition-colors"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow border border-[#FF8962]"
          >
            Send Verification Code
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={onBack}
              className="text-[#A2B4C6] text-sm hover:text-white transition-colors"
            >
              Back to other sign in options
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}