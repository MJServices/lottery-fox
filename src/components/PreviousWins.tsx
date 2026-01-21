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
    const baseClasses = "w-[14px] md:w-[18px] h-[16px] md:h-[20px] flex items-center justify-center rounded text-[9px] md:text-[11px] font-bold border";
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
    <section className="bg-[#0D1216] rounded-xl overflow-hidden">
      {/* Header with tabs */}
      <div className="px-3 md:px-6 py-3 md:py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-[#1A1F25]">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-5 md:w-6 h-5 md:h-6 bg-gradient-to-b from-[#4CAF50] to-[#66BB6A] rounded flex items-center justify-center">
            <ChampionIcon className="w-3 md:w-4 h-3 md:h-4 text-white" />
          </div>
          <h2 className="text-white text-[14px] md:text-[16px] font-bold">Previous wins</h2>
        </div>
        
        <div className="flex bg-[#13181D] rounded-lg p-1 overflow-x-auto">
          <button className="px-3 md:px-4 py-1 md:py-2 bg-gradient-to-b from-[#4CAF50] to-[#66BB6A] text-white text-[10px] md:text-[12px] font-bold rounded-md relative whitespace-nowrap">
            Best drops
          </button>
          <button className="px-3 md:px-4 py-1 md:py-2 text-[#A2B4C6] text-[10px] md:text-[12px] font-bold hover:text-white transition-colors whitespace-nowrap">
            Highest wins
          </button>
          <button className="px-3 md:px-4 py-1 md:py-2 text-[#A2B4C6] text-[10px] md:text-[12px] font-bold hover:text-white transition-colors whitespace-nowrap">
            My bets
          </button>
        </div>
      </div>

      {/* Table Header - Hidden on mobile */}
      <div className="hidden md:block px-4 md:px-6 py-2 md:py-3 bg-[#0F1419] border-b border-[#1A1F25]">
        <div className="grid grid-cols-7 gap-2 md:gap-4 text-[9px] md:text-[11px] font-bold text-[#6B7280] uppercase tracking-wide">
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
      <div className="max-h-[400px] md:max-h-none overflow-y-auto">
        {winData.map((win, index) => (
          <div key={index} className={`px-3 md:px-6 py-2 md:py-3 grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-4 items-start md:items-center text-sm border-b border-[#1A1F25] last:border-b-0 ${index % 2 === 0 ? 'bg-[#0F1419]' : 'bg-[#0D1216]'}`}>
            
            {/* Mobile Layout */}
            <div className="md:hidden space-y-2">
              {/* User and Date Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-[#FF4B0F] to-[#FF6F3F] rounded flex items-center justify-center text-white text-[8px] font-bold">
                    0x
                  </div>
                  <span className="text-[#A2B4C6] font-medium text-[10px]">0xA9f</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-2 h-2 text-[#6B7280]" />
                  <span className="text-[#A2B4C6] font-medium text-[9px]">2 min ago</span>
                </div>
              </div>
              
              {/* Ticket Info Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-b from-[#4CAF50] to-[#66BB6A] rounded flex items-center justify-center">
                    <span className="text-white text-[6px] font-bold">2</span>
                  </div>
                  <span className="text-[#A2B4C6] font-medium text-[10px]">2 tickets</span>
                </div>
                <div className="flex items-center gap-1">
                  <CoinsIcon className="w-2 h-2 text-[#FF8962]" />
                  <span className="text-[#FF8962] font-medium text-[10px]">569 USD</span>
                </div>
              </div>
              
              {/* Numbers Row */}
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <span className="text-[#6B7280] text-[8px] font-bold">Numbers:</span>
                  <div className="flex gap-[1px]">
                    {win.numbers.map((num, i) => (
                      <div key={`mobile-numbers-${index}-${i}`}>
                        {renderNumberBadge(num, false)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#6B7280] text-[8px] font-bold">Winning:</span>
                  <div className="flex gap-[1px]">
                    {win.winningNumbers.map((num, i) => (
                      <div key={`mobile-winning-${index}-${i}`}>
                        {renderNumberBadge(num, true)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Profit Row */}
              <div className="flex items-center justify-end gap-1">
                <CoinsIcon className="w-2 h-2 text-[#4CAF50]" />
                <span className="text-[#4CAF50] font-bold text-[10px]">+ 569 USD</span>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:contents">
              {/* User */}
              <div className="flex items-center gap-2">
                <div className="w-5 md:w-6 h-5 md:h-6 bg-gradient-to-br from-[#FF4B0F] to-[#FF6F3F] rounded flex items-center justify-center text-white text-[8px] md:text-[10px] font-bold">
                  0x
                </div>
                <span className="text-[#A2B4C6] font-medium text-[10px] md:text-[12px]">0xA9f</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1 md:gap-2">
                <ClockIcon className="w-2 md:w-3 h-2 md:h-3 text-[#6B7280]" />
                <span className="text-[#A2B4C6] font-medium text-[10px] md:text-[12px]">2 min ago</span>
              </div>

              {/* Ticket amount */}
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-3 md:w-4 h-3 md:h-4 bg-gradient-to-b from-[#4CAF50] to-[#66BB6A] rounded flex items-center justify-center">
                  <span className="text-white text-[6px] md:text-[8px] font-bold">2</span>
                </div>
                <span className="text-[#A2B4C6] font-medium text-[10px] md:text-[12px]">2 tickets</span>
              </div>

              {/* Ticket price */}
              <div className="flex items-center gap-1 md:gap-2">
                <CoinsIcon className="w-2 md:w-3 h-2 md:h-3 text-[#FF8962]" />
                <span className="text-[#FF8962] font-medium text-[10px] md:text-[12px]">569 USD</span>
              </div>

              {/* Numbers */}
              <div className="flex gap-[1px] md:gap-[2px]">
                {win.numbers.map((num, i) => (
                  <div key={`desktop-numbers-${index}-${i}`}>
                    {renderNumberBadge(num, false)}
                  </div>
                ))}
              </div>

              {/* Winning numbers */}
              <div className="flex gap-[1px] md:gap-[2px]">
                {win.winningNumbers.map((num, i) => (
                  <div key={`desktop-winning-${index}-${i}`}>
                    {renderNumberBadge(num, true)}
                  </div>
                ))}
              </div>

              {/* Profit */}
              <div className="flex items-center gap-1 md:gap-2">
                <CoinsIcon className="w-2 md:w-3 h-2 md:h-3 text-[#4CAF50]" />
                <span className="text-[#4CAF50] font-bold text-[10px] md:text-[12px]">+ 569 USD</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}