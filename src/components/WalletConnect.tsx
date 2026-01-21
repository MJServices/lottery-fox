import { useState } from 'react';

interface WalletConnectProps {
  onBack: () => void;
  onWalletConnected: () => void;
}

export default function WalletConnect({ onBack, onWalletConnected }: WalletConnectProps) {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleWalletConnect = async (walletType: string) => {
    setIsConnecting(true);
    console.log(`Connecting to ${walletType} wallet...`);
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false);
      onWalletConnected();
    }, 2000);
  };

  const wallets = [
    {
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect using MetaMask wallet',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'WalletConnect',
      icon: '🔗',
      description: 'Connect with WalletConnect protocol',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Coinbase Wallet',
      icon: '🔵',
      description: 'Connect using Coinbase Wallet',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Trust Wallet',
      icon: '🛡️',
      description: 'Connect using Trust Wallet',
      color: 'from-blue-400 to-blue-500'
    },
    {
      name: 'Phantom',
      icon: '👻',
      description: 'Connect using Phantom wallet (Solana)',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Ledger',
      icon: '🔐',
      description: 'Connect using Ledger hardware wallet',
      color: 'from-gray-600 to-gray-700'
    }
  ];

  return (
    <div className="min-h-screen bg-[#13181D] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#242D36] rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-bold">Connect Wallet</h1>
          <button 
            onClick={onBack}
            className="text-[#A2B4C6] text-sm hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <p className="text-[#A2B4C6] text-sm mb-6">
          Choose your preferred wallet to connect and sign in securely.
        </p>

        {isConnecting && (
          <div className="mb-6 p-4 bg-[#13181D] border border-[#3A4349] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#FF4B0F]"></div>
              <span className="text-[#A2B4C6] text-sm">Connecting wallet...</span>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => handleWalletConnect(wallet.name)}
              disabled={isConnecting}
              className={`w-full p-4 bg-gradient-to-r ${wallet.color} rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{wallet.icon}</div>
                <div className="text-left">
                  <div className="text-white font-semibold">{wallet.name}</div>
                  <div className="text-white/80 text-sm">{wallet.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-[#13181D] border border-[#3A4349] rounded-lg">
          <div className="flex items-start gap-3">
            <div className="text-yellow-500 text-lg">⚠️</div>
            <div>
              <div className="text-white text-sm font-semibold mb-1">Security Notice</div>
              <div className="text-[#A2B4C6] text-xs leading-relaxed">
                Only connect wallets you trust. Never share your private keys or seed phrases. 
                We will never ask for your private information.
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={onBack}
            className="text-[#A2B4C6] text-sm hover:text-white transition-colors"
          >
            Back to other sign in options
          </button>
        </div>
      </div>
    </div>
  );
}