import { useState } from 'react';

interface CreateNewPasswordProps {
  onBack: () => void;
  onPasswordCreated: () => void;
}

export default function CreateNewPassword({ onBack, onPasswordCreated }: CreateNewPasswordProps) {
  const [formData, setFormData] = useState({
    newPassword: '',
    repeatPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the password creation logic
    onPasswordCreated();
  };

  return (
    <div className="min-h-screen bg-[#13181D] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#242D36] rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-bold">Create new password</h1>
          <button 
            onClick={onBack}
            className="text-[#A2B4C6] text-sm hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <p className="text-[#A2B4C6] text-sm mb-6">
          Create new password
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#A2B4C6] text-sm font-medium mb-2">
              New password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full bg-[#13181D] border border-[#3A4349] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#FF4B0F] transition-colors"
              placeholder="Enter new password"
              required
            />
          </div>

          <div>
            <label className="block text-[#A2B4C6] text-sm font-medium mb-2">
              Repeat password
            </label>
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleInputChange}
              className="w-full bg-[#13181D] border border-[#3A4349] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#FF4B0F] transition-colors"
              placeholder="Repeat password"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 bg-[#3A4349] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#4A5359] transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow border border-[#FF8962]"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}