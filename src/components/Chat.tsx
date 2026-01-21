import { UserMultipleIcon } from './Icons';

export default function Chat() {
  const chatMessages = [
    { id: 1, user: 'jackie', time: '12:03', message: 'dealer just pulled 21 again', avatar: 'JA' },
    { id: 2, user: 'amaeBDGEW', time: '12:03', message: 'dealer just pulled 21 twice in a row, i swear every time i join this table it starts like this', avatar: 'AM' },
    { id: 3, user: 'cryptoWolf', time: '12:03', message: 'live bj still paying a bit', avatar: 'CR' },
    { id: 4, user: 'amaeBDGEW', time: '12:03', message: 'happens to everyone', avatar: 'AM' },
    { id: 5, user: 'B0NUSss', time: '12:03', message: 'anyone tried that new cyber slot, looks cool but i feel like it\'s just eating balance fast', avatar: 'BO' },
    { id: 6, user: '0xA9f', time: '12:03', message: 'already down 40 and telling myself "one more spin" like an idiot', avatar: '0x' },
    { id: 7, user: 'anna_k', time: '12:03', message: 'finally a normal hand, felt illegal after that start', avatar: 'AN' },
    { id: 8, user: 'jackie', time: '12:03', message: 'dealer just pulled 21 again', avatar: 'JA' },
  ];

  return (
    <aside className="w-full xl:w-[350px] bg-[#13181D] border-l border-[#242D36] flex flex-col">
      {/* Chat Header - Responsive Design */}
      <div className="p-3 md:p-4 border-b border-[#242D36]">
        <div className="bg-gradient-to-br from-[#9726E3] via-[#FF4B0F] to-[#9726E3] rounded-xl p-3 md:p-4 relative overflow-hidden min-h-[60px] md:h-[80px]">
          {/* Background glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-orange-600/40 to-purple-600/30 blur-sm"></div>
          
          {/* Header content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-black text-[16px] md:text-[18px] tracking-wide">ONLINE CHAT</h2>
              <div className="flex items-center gap-1 md:gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg px-2 md:px-3 py-1">
                <UserMultipleIcon className="w-3 md:w-4 h-3 md:h-4 text-white" />
                <span className="text-white font-bold text-[12px] md:text-[14px]">544</span>
              </div>
            </div>
          </div>
          
          {/* Fox character image */}
          <div className="absolute top-1 md:top-2 right-1 md:right-2 w-12 md:w-16 h-12 md:h-16 rounded-lg overflow-hidden">
            <img 
              src="/images/fox-character.svg" 
              alt="Fox Character" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Chat Messages - Responsive Design */}
      <div className="flex-1 p-2 md:p-3 overflow-y-auto space-y-1 md:space-y-2 max-h-[300px] md:max-h-[400px] xl:max-h-[500px]">
        {chatMessages.map((msg) => (
          <div key={`chat-${msg.id}`} className="flex gap-1 md:gap-2 p-1 md:p-2 rounded-lg hover:bg-[#1A1F25] transition-colors">
            <div className="w-6 md:w-7 h-6 md:h-7 bg-gradient-to-br from-[#FF4B0F] to-[#FF6F3F] rounded flex-shrink-0 flex items-center justify-center text-white text-[8px] md:text-[10px] font-bold">
              {msg.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 md:gap-2 mb-0.5 md:mb-1">
                <span className="text-white text-[10px] md:text-[12px] font-bold truncate">{msg.user}</span>
                <div className="bg-[#242D36] rounded px-1 md:px-2 py-0.5 flex-shrink-0">
                  <span className="text-[#A2B4C6] text-[8px] md:text-[10px] font-medium">{msg.time}</span>
                </div>
              </div>
              <p className="text-[#A2B4C6] text-[9px] md:text-[11px] leading-relaxed break-words">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input - Responsive Design */}
      <div className="p-2 md:p-4 border-t border-[#242D36]">
        <div className="flex gap-1 md:gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-[#1A1F25] border border-[#242D36] rounded-lg px-2 md:px-3 py-1 md:py-2 text-white text-[10px] md:text-[12px] placeholder-[#6B7280] focus:outline-none focus:border-[#FF4B0F] transition-colors"
          />
          <button className="bg-gradient-to-r from-[#FF4B0F] to-[#FF6F3F] text-white px-3 md:px-4 py-1 md:py-2 rounded-lg font-bold text-[10px] md:text-[12px] hover:shadow-lg transition-shadow border border-[#FF8962]">
            Send
          </button>
        </div>
      </div>
    </aside>
  );
}