export default function FigmaLotteryCard() {
  return (
    <div className="relative w-full mx-auto lottery-card-container">
      {/* Image without background container - Full width */}
      <img 
        src="/images/main-lottery-card.png" 
        alt="Bitcoin Lottery Card - Complete View" 
        className="lottery-card-image w-full h-auto rounded-xl"
        style={{
          height: 'auto',
          objectFit: 'contain',
          objectPosition: 'center',
          display: 'block',
          maxWidth: '100%',
          minHeight: 'auto'
        }}
        loading="eager"
      />
    </div>
  );
}