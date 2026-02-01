import { ClockIcon, CoinsIcon, ChampionIcon } from './Icons';

export default function PreviousWins() {
  const winData = [
    { user: '0xA9f', time: '2 min ago', tickets: '2 tickets', price: '569 USD', profit: '+ 569 USD', numbers: [5, 3, 8, 9, 'K', 'J'], winningNumbers: [5, 3, 8, 9, 'K', 'J'] },
    { user: '0xA9f', time: '2 min ago', tickets: '2 tickets', price: '569 USD', profit: '+ 569 USD', numbers: [5, 3, 8, 9, 'K', 'J'], winningNumbers: [5, 3, 8, 9, 'K', 'J'] },
    { user: '0xA9f', time: '2 min ago', tickets: '2 tickets', price: '569 USD', profit: '+ 569 USD', numbers: [5, 3, 8, 9, 'K', 'J'], winningNumbers: [5, 3, 8, 9, 'K', 'J'] },
    { user: '0xA9f', time: '2 min ago', tickets: '2 tickets', price: '569 USD', profit: '+ 569 USD', numbers: [5, 3, 8, 9, 'K', 'J'], winningNumbers: [5, 3, 8, 9, 'K', 'J'] },
    { user: '0xA9f', time: '2 min ago', tickets: '2 tickets', price: '569 USD', profit: '+ 569 USD', numbers: [5, 3, 8, 9, 'K', 'J'], winningNumbers: [5, 3, 8, 9, 'K', 'J'] },
    { user: '0xA9f', time: '2 min ago', tickets: '2 tickets', price: '569 USD', profit: '+ 569 USD', numbers: [5, 3, 8, 9, 'K', 'J'], winningNumbers: [5, 3, 8, 9, 'K', 'J'] },
    { user: '0xA9f', time: '2 min ago', tickets: '2 tickets', price: '569 USD', profit: '+ 569 USD', numbers: [5, 3, 8, 9, 'K', 'J'], winningNumbers: [5, 3, 8, 9, 'K', 'J'] },
    { user: '0xA9f', time: '2 min ago', tickets: '2 tickets', price: '569 USD', profit: '+ 569 USD', numbers: [5, 3, 8, 9, 'K', 'J'], winningNumbers: [5, 3, 8, 9, 'K', 'J'] },
  ];

  const renderNumberBadge = (num: string | number, isWinning: boolean) => {
    const baseClasses = "w-[16px] h-[16px] flex items-center justify-center rounded text-[10px] font-bold border";
    const winningClasses = isWinning 
      ? "bg-gradient-to-b from-[#1F1813] to-[#E36826] border-[#FF8962] text-[#FFF0C4]"
      : "bg-gradient-to-b from-[#13181D] to-[#1F262E] border-[#46566B] text-[#A2B4C6]";
    
    return (
      <div className={`${baseClasses} ${winningClasses}`}>
        {num}
      </div>
    );
  };

  return (
    <section className="bg-[#0D1216] rounded-xl overflow-hidden mb-6 md:mb-8">
      {/* Header with tabs */}
      <div className="px-4 md:px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-[#1A1F25]">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gradient-to-b from-[#4CAF50] to-[#66BB6A] rounded flex items-center justify-center shadow-[0_4px_12px_rgba(76,175,80,0.33)]">
            <ChampionIcon className="w-3 h-3 text-white" />
          </div>
          <h2 className="text-white text-[18px] font-bold">Previous wins</h2>
        </div>
        
        <div className="flex bg-[#13181D] rounded-lg p-1">
          <button className="px-8 py-2 bg-gradient-to-b from-[#4CAF50] to-[#66BB6A] text-white text-[14px] font-semibold rounded-md relative">
            <div className="absolute -top-[74px] left-[13px] w-[127px] h-[32px] bg-[#BEFF25] rounded-full blur-[23px] opacity-35"></div>
            Best drops
          </button>
          <button className="px-8 py-2 text-[#A2B4C6] text-[14px] font-semibold hover:text-white transition-colors">
            Highest wins
          </button>
          <button className="px-8 py-2 text-[#A2B4C6] text-[14px] font-semibold hover:text-white transition-colors">
            My bets
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className="px-4 md:px-6 py-3 bg-[#0F1419] border-b border-[#1A1F25]">
        <div className="grid grid-cols-7 gap-4 text-[12px] font-bold text-[#8489AA] uppercase tracking-wide">
          <div>User</div>
          <div>Date</div>
          <div>Ticket amount</div>
          <div>Ticket price</div>
          <div>Numbers</div>
          <div>Winning numbers</div>
          <div>Profit</div>
        </div>
      </div>

      {/* Table Rows */}
      <div className="max-h-[400px] overflow-y-auto">
        {winData.map((win, index) => (
          <div key={index} className={`px-4 md:px-6 py-3 grid grid-cols-7 gap-4 items-center text-sm border-b border-[#1A1F25] last:border-b-0 ${index % 2 === 0 ? 'bg-[#11161B]' : 'bg-[#0D1216]'}`}>
            
            {/* User */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-[#FF4B0F] to-[#FF6F3F] rounded flex items-center justify-center text-white text-[10px] font-bold">
                0x
              </div>
              <span className="text-[#A2B4C6] font-semibold text-[14px]">0xA9f</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-[#6B7280]" />
              <span className="text-[#A2B4C6] font-semibold text-[14px]">2 min ago</span>
            </div>

            {/* Ticket amount */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-b from-[#4CAF50] to-[#66BB6A] rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">2</span>
              </div>
              <span className="text-[#A2B4C6] font-semibold text-[14px]">2 tickets</span>
            </div>

            {/* Ticket price */}
            <div className="flex items-center gap-2">
              <CoinsIcon className="w-4 h-4 text-[#FF8962]" />
              <span className="text-[#FF8962] font-semibold text-[14px]">569 USD</span>
            </div>

            {/* Numbers */}
            <div className="flex gap-1">
              {win.numbers.map((num, i) => (
                <div key={`numbers-${index}-${i}`}>
                  {renderNumberBadge(num, false)}
                </div>
              ))}
            </div>

            {/* Winning numbers */}
            <div className="flex gap-1">
              {win.winningNumbers.map((num, i) => (
                <div key={`winning-${index}-${i}`}>
                  {renderNumberBadge(num, true)}
                </div>
              ))}
            </div>

            {/* Profit */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-b from-[#4CAF50] to-[#66BB6A] rounded-full flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">+</span>
              </div>
              <span className="text-[#4CAF50] font-bold text-[14px]">+ 569 USD</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}