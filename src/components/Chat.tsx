import { UserMultipleIcon } from './Icons';
import { useState } from 'react';

interface ChatMessage {
  id: number;
  user: string;
  time: string;
  message: string;
  avatar: string;
  isImage?: boolean; // To distinguish between letter avatars and image avatars
  color?: string; // For username color if needed
}

export default function Chat() {
  const [message, setMessage] = useState('');

  // Data from screenshot
  const chatMessages: ChatMessage[] = [
    { id: 1, user: 'jackie', time: '12:03', message: 'dealer just pulled 21 again', avatar: '/images/profile-avatar.png', isImage: true },
    { id: 2, user: 'amae8DGEW', time: '12:03', message: 'dealer just pulled 21 twice in a row, i swear every time i join this table it starts like this', avatar: '/images/lucky-hour-avatar-1db0ff.png', isImage: true },
    { id: 3, user: 'cryptoWolf', time: '12:03', message: 'live bj still paying a bit', avatar: 'C', color: 'orange' }, // Using letter as placeholder
    { id: 4, user: 'amae8DGEW', time: '12:03', message: 'happens to everyone', avatar: '/images/lucky-hour-avatar-1db0ff.png', isImage: true },
    { id: 5, user: 'BONUSss', time: '12:03', message: 'anyone tried that new cyber slot, looks cool but i feel like it\'s just eating balance fast', avatar: '/images/fox-character.svg', isImage: true },
    { id: 6, user: '0xA9f', time: '12:03', message: 'already down 40 and telling myself "one more spin" like an idiot', avatar: '/images/baby-fox-card-138a29.png', isImage: true },
    { id: 7, user: 'anna_k', time: '12:03', message: 'finally a normal hand, felt illegal after that start', avatar: '/images/fox-zen-card.png', isImage: true },
    { id: 8, user: 'jackie', time: '12:03', message: 'dealer just pulled 21 again', avatar: '/images/profile-avatar.png', isImage: true },
    { id: 9, user: 'amae8DGEW', time: '12:03', message: 'dealer just pulled 21 twice in a row, i swear every time i join this table it starts like this', avatar: '/images/lucky-hour-avatar-1db0ff.png', isImage: true },
  ];

  return (
    <aside className="w-[320px] 2xl:w-[350px] bg-[#0E1217] border-l border-[#242D36] flex flex-col h-full font-sans">
      {/* Chat Header */}
      <div className="p-4 border-b border-[#242D36]">
        <div className="relative w-full h-[120px] rounded-xl overflow-hidden bg-gradient-to-r from-purple-900 to-orange-900 shadow-lg group">
          {/* Background Image / Decoration */}
          <div className="absolute inset-0 bg-[#3B1F69]">
            <div className="absolute top-0 right-0 w-full h-full opacity-80 mix-blend-overlay bg-gradient-to-l from-orange-500/50 to-purple-600/50"></div>
            {/* Approximate the header image visuals with what we have or generic shapes if needed */}
            {/* Using a placeholder for the fox holding phone, as exact asset is unknown, but trying close match */}
            <img src="/images/lucky-hour-avatar-1db0ff.png" className="absolute -right-4 -bottom-4 w-32 h-32 object-contain transform rotate-[-10deg]" alt="Fox" />
          </div>

          <div className="relative z-10 p-4 h-full flex flex-col justify-between">
            <h2 className="text-white font-black text-xl italic tracking-wide drop-shadow-md">
              ONLINE <br /> CHAT
            </h2>

            <div className="flex items-center gap-2 self-start bg-black/40 backdrop-blur-md rounded-lg px-2 py-1 border border-white/10 shadow-sm">
              <UserMultipleIcon className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span className="text-white font-bold text-xs">544</span>
            </div>
          </div>
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 custom-scrollbar">
        {chatMessages.map((msg, idx) => (
          <div key={`${msg.id}-${idx}`} className="flex gap-3 group">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {msg.isImage ? (
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#2A3441] shadow-sm transform transition-transform group-hover:scale-105">
                  <img src={msg.avatar} alt={msg.user} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm border border-white/10 ${msg.color === 'orange' ? 'bg-orange-600' : 'bg-blue-600'}`}>
                  {msg.user.substring(0, 2).toUpperCase()}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="flex items-baseline justify-between mb-0.5">
                <span className={`text-[13px] font-bold truncate ${['jackie', 'cryptoWolf'].includes(msg.user) ? 'text-[#FF9F43]' : 'text-[#E2E8F0]'} hover:underline cursor-pointer`}>
                  {msg.user}
                </span>
                <span className="text-[10px] text-[#64748B] font-medium">{msg.time}</span>
              </div>
              <p className="text-[12px] text-[#94A3B8] leading-tight break-words font-medium group-hover:text-[#CBD5E1] transition-colors">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Input */}
      <div className="p-4 border-t border-[#242D36] bg-[#0E1217]">
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            placeholder="Placeholder"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-[#1A1F26] text-white text-xs font-medium placeholder-[#475569] rounded-lg px-4 py-3 border border-[#2D3748] focus:border-[#FF4B0F] focus:ring-1 focus:ring-[#FF4B0F] transition-all"
          />
          <button className="bg-gradient-to-r from-[#FF4B0F] to-[#FF7B59] hover:from-[#FF5C26] hover:to-[#FF8D6F] text-white text-xs font-bold px-4 py-3 rounded-lg shadow-lg shadow-orange-900/20 active:scale-95 transition-all">
            Send
          </button>
        </div>
      </div>
    </aside>
  );
}
