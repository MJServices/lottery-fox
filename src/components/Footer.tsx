import { GithubIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1216] border-t border-white/5 px-4 md:px-8 lg:px-[109px] py-6 md:py-[30px]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-[24px] md:text-[30px] font-black text-[#FFFDF8] tracking-[-1%] font-luckiest">
            LOTTERY
          </span>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-[23px] w-full lg:w-auto">
          {/* About Section */}
          <div className="flex flex-col gap-2 md:gap-[10px] w-full sm:w-[122px]">
            <h4 className="text-[14px] md:text-[16px] font-extrabold text-[#D0D2E9]">About</h4>
            <div className="flex flex-col gap-2 md:gap-3">
              <a href="#" className="text-[12px] md:text-[14px] font-semibold text-[#8489AA] hover:text-white transition-colors">
                Refund policy
              </a>
              <a href="#" className="text-[12px] md:text-[14px] font-semibold text-[#8489AA] hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Help Section */}
          <div className="flex flex-col gap-2 md:gap-[10px] w-full sm:w-[122px]">
            <h4 className="text-[14px] md:text-[16px] font-extrabold text-[#D0D2E9]">Help</h4>
            <div className="flex flex-col gap-2 md:gap-3">
              <a href="#" className="text-[12px] md:text-[14px] font-semibold text-[#8489AA] hover:text-white transition-colors">
                Troubleshooting
              </a>
              <a href="#" className="text-[12px] md:text-[14px] font-semibold text-[#8489AA] hover:text-white transition-colors">
                Affiliate
              </a>
            </div>
          </div>

          {/* Developers Section */}
          <div className="flex flex-col gap-2 md:gap-[10px] w-full sm:w-[122px]">
            <h4 className="text-[14px] md:text-[16px] font-extrabold text-[#D0D2E9]">Developers</h4>
            <div className="flex flex-col gap-2 md:gap-3">
              <a href="#" className="text-[12px] md:text-[14px] font-semibold text-[#8489AA] hover:text-white transition-colors">
                Github
              </a>
              <a href="#" className="text-[12px] md:text-[14px] font-semibold text-[#8489AA] hover:text-white transition-colors">
                Bug Bounty
              </a>
              <a href="#" className="text-[12px] md:text-[14px] font-semibold text-[#8489AA] hover:text-white transition-colors">
                Audits
              </a>
            </div>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3 md:gap-4 w-full lg:w-auto justify-start lg:justify-end">
          {/* Social icon */}
          <div className="w-8 md:w-9 h-8 md:h-9 bg-[#0D1216] rounded-lg p-1 flex items-center justify-center">
            <GithubIcon className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] text-[#8489AA]" />
          </div>
          
          {/* Support button */}
          <button className="px-3 md:px-4 py-2 md:py-[14px] bg-gradient-to-b from-[#2B3540] to-[#4A5968] border border-[#4659A3] rounded-lg text-[12px] md:text-[14px] font-bold text-white">
            Support
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 md:mt-[58px] pt-4 border-t border-white/5 lg:border-t-0 lg:pt-0">
        <p className="text-[10px] md:text-[12px] font-bold text-[#525D68] text-center lg:text-left">
          © 2025 FIRSTBTCLOTTERY. All rights reserved. INFO CHOICE TRADE CONSULTING SERVICES Ltd.
        </p>
      </div>
    </footer>
  );
}