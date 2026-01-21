export default function LuckyHourCard() {
  return (
    <div className="relative w-full max-w-[521px] mx-auto">
      {/* Responsive container that maintains aspect ratio */}
      <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden" style={{ aspectRatio: '521/293' }}>
        {/* Use the complete Figma image for 100% accuracy */}
        <img 
          src="/images/lucky-hour-card.png" 
          alt="Lucky Hour Card - Exact Figma Design" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}