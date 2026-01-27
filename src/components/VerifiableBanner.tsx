

const VerifiableBanner = () => {
    return (
        <div className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-[#3E7B06] to-[#60AA0D] p-4 flex items-center justify-between shadow-lg border border-[#6ABF10]/30 min-h-[80px]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            {/* Content Container */}
            <div className="flex items-center justify-between w-full relative z-10">

                {/* Left Text */}
                <div className="flex flex-col z-10">
                    <h3 className="text-white font-black text-lg leading-tight">Fully verifiable</h3>
                    <p className="text-white/70 text-xs font-medium">on Blockchain.com</p>
                </div>

                {/* Center Image (Absolute positioned to overlap slightly or flow naturally) */}
                {/* Using absolute positioning to center it visually if needed, or flex. 
            Based on screenshot, it sits between text and button. */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                    <img
                        src="/images/checkmark-badge-icon.svg"
                        alt="Verifiable Badge"
                        className="h-16 w-16 md:h-20 md:w-20 object-contain drop-shadow-xl filter brightness-110"
                    />
                </div>

                {/* Right Button */}
                <button className="bg-[#B5E926] hover:bg-[#C2F038] text-[#1F3303] text-sm font-bold py-2 px-5 rounded-lg shadow-md transition-all z-10 flex-shrink-0">
                    Verify
                </button>
            </div>
        </div>
    );
};

export default VerifiableBanner;
