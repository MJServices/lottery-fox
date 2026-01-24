import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';
import { Page } from '../types';

interface PrivacyPolicyProps {
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function PrivacyPolicy({ onLogout, onNavigate, currentPage }: PrivacyPolicyProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'bug-bounty'>('privacy');

  return (
    <div className="min-h-screen bg-[#13181D] flex flex-col">
      <Header 
        onLogout={onLogout} 
        onNavigate={onNavigate}
        currentPage={currentPage}
      />
      
      <div className="flex flex-1 relative">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar onNavigate={onNavigate} currentPage={currentPage} onLogout={onLogout} />
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 relative">
          <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 pb-20 lg:pb-0">
            
            {/* Privacy Banner */}
            <div className="relative w-full mb-8">
              <img
                src="/images/privacy-banner.png"
                alt="Privacy Policy Banner"
                className="w-full h-auto object-cover rounded-xl"
              />
              
              {/* Tab Navigation Overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <div className="bg-[#192025] rounded-xl p-1 flex gap-1 shadow-2xl">
                  <button
                    onClick={() => setActiveTab('privacy')}
                    className={`px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-bold transition-all duration-200 whitespace-nowrap ${
                      activeTab === 'privacy'
                        ? 'bg-gradient-to-b from-[#8FD811] to-[#A3E635] text-[#253703] shadow-lg'
                        : 'text-white hover:bg-[#242D36]'
                    }`}
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={() => setActiveTab('terms')}
                    className={`px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-bold transition-all duration-200 whitespace-nowrap ${
                      activeTab === 'terms'
                        ? 'bg-gradient-to-b from-[#8FD811] to-[#A3E635] text-[#253703] shadow-lg'
                        : 'text-white hover:bg-[#242D36]'
                    }`}
                  >
                    Terms & Conditions
                  </button>
                  <button
                    onClick={() => setActiveTab('bug-bounty')}
                    className={`px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-bold transition-all duration-200 whitespace-nowrap ${
                      activeTab === 'bug-bounty'
                        ? 'bg-gradient-to-b from-[#8FD811] to-[#A3E635] text-[#253703] shadow-lg'
                        : 'text-white hover:bg-[#242D36]'
                    }`}
                  >
                    Bug Bounty
                  </button>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="text-[#A2B4C6] text-sm mb-8 text-center">
                Operating: INFO CHOICE TRADE CONSULTING SERVICES Ltd (referred to herein as "we", "us", or "our")
              </div>

              {activeTab === 'privacy' && (
                <div className="space-y-8">
                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information 
                      when you use firstblocklottery.com (the "Website"). By accessing or using our services, you consent to the practices described in this 
                      policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">2. Information We Collect</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-white text-lg font-semibold mb-2">2.1 Personal Information</h3>
                        <p className="text-[#A2B4C6] leading-relaxed">
                          We may collect personal information that you voluntarily provide to us when you register on the Website, 
                          make a purchase, or contact us. This may include:
                        </p>
                        <ul className="list-disc list-inside text-[#A2B4C6] mt-2 space-y-1">
                          <li>Name and contact information (email address, phone number)</li>
                          <li>Payment information (credit card details, wallet addresses)</li>
                          <li>Account credentials (username, password)</li>
                          <li>Identity verification documents</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-white text-lg font-semibold mb-2">2.2 Automatically Collected Information</h3>
                        <p className="text-[#A2B4C6] leading-relaxed">
                          When you visit our Website, we may automatically collect certain information about your device and usage patterns, including:
                        </p>
                        <ul className="list-disc list-inside text-[#A2B4C6] mt-2 space-y-1">
                          <li>IP address and location data</li>
                          <li>Browser type and version</li>
                          <li>Device information</li>
                          <li>Usage statistics and preferences</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                    <p className="text-[#A2B4C6] leading-relaxed mb-4">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside text-[#A2B4C6] space-y-2">
                      <li>To provide and maintain our services</li>
                      <li>To process transactions and manage your account</li>
                      <li>To communicate with you about your account and our services</li>
                      <li>To comply with legal and regulatory requirements</li>
                      <li>To improve our Website and user experience</li>
                      <li>To detect and prevent fraud or security breaches</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                      except as described in this Privacy Policy or as required by law.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">5. Data Security</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">6. Your Rights</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      You have certain rights regarding your personal information, including the right to access, update, 
                      or delete your information. Contact us if you wish to exercise these rights.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">7. Contact Us</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at privacy@firstblocklottery.com
                    </p>
                  </section>
                </div>
              )}

              {activeTab === 'terms' && (
                <div className="space-y-8">
                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      By accessing and using firstblocklottery.com, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">2. Use License</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      Permission is granted to temporarily download one copy of the materials on firstblocklottery.com for personal, 
                      non-commercial transitory viewing only.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">3. Disclaimer</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      The materials on firstblocklottery.com are provided on an 'as is' basis. We make no warranties, 
                      expressed or implied, and hereby disclaim and negate all other warranties including without limitation, 
                      implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                      of intellectual property or other violation of rights.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">4. Limitations</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      In no event shall firstblocklottery.com or its suppliers be liable for any damages (including, without limitation, 
                      damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                      the materials on firstblocklottery.com, even if we or our authorized representative has been notified orally or 
                      in writing of the possibility of such damage.
                    </p>
                  </section>
                </div>
              )}

              {activeTab === 'bug-bounty' && (
                <div className="space-y-8">
                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">1. Bug Bounty Program</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      We welcome security researchers to help us keep firstblocklottery.com safe and secure. 
                      Our bug bounty program rewards researchers who discover and responsibly disclose security vulnerabilities.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">2. Scope</h2>
                    <p className="text-[#A2B4C6] leading-relaxed mb-4">
                      The following domains and applications are in scope for our bug bounty program:
                    </p>
                    <ul className="list-disc list-inside text-[#A2B4C6] space-y-1">
                      <li>firstblocklottery.com (main website)</li>
                      <li>API endpoints</li>
                      <li>Mobile applications</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">3. Rewards</h2>
                    <p className="text-[#A2B4C6] leading-relaxed mb-4">
                      Rewards are determined based on the severity and impact of the vulnerability:
                    </p>
                    <ul className="list-disc list-inside text-[#A2B4C6] space-y-1">
                      <li>Critical: $1,000 - $5,000</li>
                      <li>High: $500 - $1,000</li>
                      <li>Medium: $100 - $500</li>
                      <li>Low: $50 - $100</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">4. Responsible Disclosure</h2>
                    <p className="text-[#A2B4C6] leading-relaxed">
                      Please report security vulnerabilities to security@firstblocklottery.com. 
                      We ask that you do not publicly disclose the vulnerability until we have had a chance to address it.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-white text-2xl font-bold mb-4">5. Rules</h2>
                    <ul className="list-disc list-inside text-[#A2B4C6] space-y-2">
                      <li>Do not access or modify user data</li>
                      <li>Do not perform attacks that could harm the availability of our services</li>
                      <li>Do not use automated scanners</li>
                      <li>Report vulnerabilities as soon as possible</li>
                      <li>Provide detailed reproduction steps</li>
                    </ul>
                  </section>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar onNavigate={onNavigate} currentPage={currentPage} />

      {/* Footer */}
      <Footer />
    </div>
  );
}