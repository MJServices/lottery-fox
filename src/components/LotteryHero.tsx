const LotteryHero = () => {
    return (
        <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-[#FFFFFF]/5">
            {/* Desktop Image */}
            <img
                src="/images/main-lottery-card.png"
                alt="Lottery Card"
                className="hidden lg:block w-full h-auto object-cover"
            />
            {/* Mobile Image */}
            <img
                src="/images/main-mobile-lottery.png"
                alt="Lottery Card"
                className="block lg:hidden w-full h-auto object-cover"
            />
        </div>
    );
};

export default LotteryHero;
