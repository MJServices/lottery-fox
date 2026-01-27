

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            {/* Modal Container - Aggressively Reduced Size */}
            <div className="w-full max-w-[750px] h-auto max-h-[85vh] bg-[#1a1f26] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative animate-fadeIn">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 z-50 text-gray-500 hover:text-white p-1"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Side - Green Banner */}
                <div className="hidden md:flex w-[40%] bg-[#84CC16] relative flex-col items-center justify-center overflow-hidden p-4 text-center">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/pattern.png')]"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <span className="bg-[#2A2A2A] text-white text-[9px] font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-widest leading-none">Get Started</span>

                        <h2 className="text-white text-xl font-black leading-tight mb-3 drop-shadow-md">
                            In Seconds SignUp<br />And Play Instantly
                        </h2>

                        {/* Floating Elements (Smaller) */}
                        <img src="/images/awards-coin-1.png" className="absolute top-8 left-2 w-6 animate-pulse" />
                        <img src="/images/awards-coin-2.png" className="absolute bottom-16 right-2 w-6 animate-bounce" />

                        {/* Fox Image - Significantly Smaller */}
                        <div className="mt-1 w-full max-w-[140px]">
                            <img src="/images/awards-fox-main.png" className="w-full object-contain grayscale-[20%] drop-shadow-lg" />
                        </div>
                    </div>
                </div>

                {/* Right Side - Form - Aggressively Compact Layout */}
                <div className="w-full md:w-[60%] bg-[#13181D] p-4 md:p-5 overflow-y-auto custom-scrollbar flex flex-col justify-center">
                    <h2 className="text-white text-xl font-bold mb-3">Sign up</h2>

                    {/* Social Logins - Smaller */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                        <button className="flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 text-black font-bold py-1.5 px-2 rounded-lg transition-colors text-[11px]">
                            <img src="https://www.google.com/favicon.ico" className="w-3.5 h-3.5" alt="G" />
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-1.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-1.5 px-2 rounded-lg transition-colors text-[11px]">
                            <span className="font-bold text-sm">f</span>
                            Facebook
                        </button>
                        <button className="flex items-center justify-center gap-1.5 bg-black hover:bg-gray-900 text-white font-bold py-1.5 px-2 rounded-lg transition-colors border border-gray-800 text-[11px]">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74s1.84-.64 3.29-.71c.92-.05 2.19.05 3.39.84.51.34 1.76 1.44 1.05 3.08-.2.43-.89 1.57-1.39 2.5-1.12 2.06-.52 2.87.27 4.19.46.77.29 1.79-.69 2.33zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                            Apple
                        </button>
                        <button className="flex items-center justify-center gap-1.5 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold py-1.5 px-2 rounded-lg transition-colors text-[11px]">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 127.14 96.36" fill="currentColor"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c1.24-23.28-5.83-47.35-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" /></svg>
                            Discord
                        </button>
                    </div>

                    {/* Divider - Very Thin */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-[1px] bg-gray-800 flex-1"></div>
                        <span className="text-gray-600 text-[9px] font-bold uppercase">or sign up with email</span>
                        <div className="h-[1px] bg-gray-800 flex-1"></div>
                    </div>

                    {/* Form Fields - Extremely Compact Spacing */}
                    <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-0.5">
                                <label className="text-gray-500 text-[10px] font-bold ml-1">Email</label>
                                <input type="email" placeholder="Email" className="w-full bg-[#1A1F26] border border-gray-700/50 rounded-lg px-2.5 py-1.5 text-white text-[11px] placeholder-gray-600 focus:border-[#84CC16] focus:outline-none transition-colors" />
                            </div>
                            <div className="space-y-0.5">
                                <label className="text-gray-500 text-[10px] font-bold ml-1">Amount</label>
                                <input type="number" placeholder="0.00" className="w-full bg-[#1A1F26] border border-gray-700/50 rounded-lg px-2.5 py-1.5 text-white text-[11px] placeholder-gray-600 focus:border-[#84CC16] focus:outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-0.5">
                                <label className="text-gray-500 text-[10px] font-bold ml-1">First name</label>
                                <input type="text" placeholder="First" className="w-full bg-[#1A1F26] border border-gray-700/50 rounded-lg px-2.5 py-1.5 text-white text-[11px] placeholder-gray-600 focus:border-[#84CC16] focus:outline-none transition-colors" />
                            </div>
                            <div className="space-y-0.5">
                                <label className="text-gray-500 text-[10px] font-bold ml-1">Last name</label>
                                <input type="text" placeholder="Last" className="w-full bg-[#1A1F26] border border-gray-700/50 rounded-lg px-2.5 py-1.5 text-white text-[11px] placeholder-gray-600 focus:border-[#84CC16] focus:outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-0.5">
                                <label className="text-gray-500 text-[10px] font-bold ml-1">Password</label>
                                <input type="password" placeholder="Pass" className="w-full bg-[#1A1F26] border border-gray-700/50 rounded-lg px-2.5 py-1.5 text-white text-[11px] placeholder-gray-600 focus:border-[#84CC16] focus:outline-none transition-colors" />
                            </div>

                            <div className="space-y-0.5">
                                <label className="text-gray-500 text-[10px] font-bold ml-1">Confirm</label>
                                <input type="password" placeholder="Confirm" className="w-full bg-[#1A1F26] border border-gray-700/50 rounded-lg px-2.5 py-1.5 text-white text-[11px] placeholder-gray-600 focus:border-[#84CC16] focus:outline-none transition-colors" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-[#84CC16] hover:bg-[#72b310] text-[#13181D] font-black py-2.5 rounded-lg text-sm mt-3 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-green-900/20">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
