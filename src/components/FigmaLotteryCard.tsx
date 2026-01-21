export default function FigmaLotteryCard() {
  return (
    <div className="relative w-full max-w-[738px] mx-auto">
      {/* Responsive container that maintains aspect ratio */}
      <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden border border-[#FF8162]" style={{ aspectRatio: '738/440' }}>
        {/* Main Figma lottery card image for 100% accuracy */}
        <img 
          src="/images/main-lottery-card.png" 
          alt="Bitcoin Lottery Card - Exact Figma Design" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}