

export default function ReferAFriend() {


    const friendsParams = [
        { user: "Jackie", date: "2 min ago", reward: "+ 569 USD", tickets: "2 tickets", value: "+ 569 USD" },
        { user: "Jackie", date: "2 min ago", reward: "+ 569 USD", tickets: "2 tickets", value: "+ 569 USD" },
        { user: "Jackie", date: "2 min ago", reward: "+ 569 USD", tickets: "2 tickets", value: "+ 569 USD" },
        { user: "Jackie", date: "2 min ago", reward: "+ 569 USD", tickets: "2 tickets", value: "+ 569 USD" },
        { user: "Jackie", date: "2 min ago", reward: "+ 569 USD", tickets: "2 tickets", value: "+ 569 USD" },
        { user: "Jackie", date: "2 min ago", reward: "+ 569 USD", tickets: "2 tickets", value: "+ 569 USD" },
    ];

    return (
        <div className="space-y-6">
            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Friends Invited */}
                <div className="bg-[#1A2027] rounded-xl p-4 flex items-center gap-4 border border-[#242D36]">
                    <div className="w-10 h-10 bg-[#0095FF]/10 rounded-lg flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#0095FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="9" cy="7" r="4" stroke="#0095FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#0095FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white">12 900 483</div>
                        <div className="text-[#A2B4C6] text-xs font-medium">Friends Invited</div>
                    </div>
                </div>

                {/* Free Tickets Earned */}
                <div className="bg-[#1A2027] rounded-xl p-4 flex items-center gap-4 border border-[#242D36]">
                    <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white">1 900</div>
                        <div className="text-[#A2B4C6] text-xs font-medium">Free Tickets Earned</div>
                    </div>
                </div>

                {/* USDT Earned */}
                <div className="bg-[#1A2027] rounded-xl p-4 flex items-center gap-4 border border-[#242D36]">
                    <div className="w-10 h-10 bg-[#00D68F]/10 rounded-lg flex items-center justify-center">
                        <span className="text-[#00D68F] font-bold text-lg">₮</span>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white">24 569</div>
                        <div className="text-[#A2B4C6] text-xs font-medium">USDT Earned</div>
                    </div>
                </div>

                {/* Referral Rank */}
                <div className="bg-[#1A2027] rounded-xl p-4 flex items-center gap-4 border border-[#242D36]">
                    <div className="w-10 h-10 bg-[#FFD700]/10 rounded-lg flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9l6 6 6-6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white">1 899</div>
                        <div className="text-[#A2B4C6] text-xs font-medium">Referral Rank</div>
                    </div>
                </div>
            </div>

            {/* Main Hero Section */}
            <div className="rounded-2xl overflow-hidden border border-[#242D36]">
                <img
                    src="/images/profile-bannner.png"
                    alt="Refer a Friend Banner"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Rewards Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Rewards List */}
                <div className="lg:col-span-2 bg-[#1A2027] rounded-xl p-6 border border-[#242D36]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#FF6B35]/20 rounded-lg flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 15l5-5 5 5" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-white font-bold">Rewards You Can Earn</h3>
                            <p className="text-[#A2B4C6] text-xs">Unlock free tickets & USDT by inviting friends</p>
                        </div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {[
                            { friends: 1, type: '1 Free Ticket', active: true, color: 'bg-[#00C3FF]' },
                            { friends: 3, type: '2 Free Ticket', active: true, current: true, color: 'bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F]' },
                            { friends: 5, type: '3 Free Ticket', active: false, color: 'bg-gradient-to-b from-[#1A131F] to-[#9726E3]' },
                            { friends: 10, type: '$10 USDT', active: false, color: 'bg-gradient-to-b from-[#1A131F] to-[#9726E3]' },
                            { friends: 25, type: '$30 USDT+2 tickets', active: false, color: 'bg-gradient-to-b from-[#1A131F] to-[#9726E3]' },
                        ].map((reward, i) => (
                            <div key={i} className={`flex-shrink-0 min-w-[140px] p-3 rounded-lg border ${reward.current ? 'bg-[#FF4B0F]/10 border-[#FF4B0F]' : 'bg-[#2A3441] border-[#3A4651]'
                                }`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={`w-8 h-8 rounded flex items-center justify-center ${reward.color}`}>
                                        <img src="/images/result-profile.png" alt="Profile" className="w-5 h-5 object-contain brightness-0 invert" />
                                    </div>
                                    <div className="text-xs font-bold text-white leading-tight">
                                        {reward.friends} friend<br />invited
                                    </div>
                                </div>
                                <div className={`px-2 py-1 rounded text-xs font-bold inline-flex items-center gap-1 ${reward.current ? 'bg-[#FF4B0F] text-white' : reward.active ? 'bg-[#8FD811] text-[#13181D]' : 'bg-[#13181D] text-[#A2B4C6]'
                                    }`}>
                                    <span>🎟️</span> {reward.type}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promo Card */}
                <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] rounded-xl p-6 border border-[#242D36] flex flex-col items-center justify-center text-center relative overflow-hidden group">
                    {/* Top Glow Gradient */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[140px] bg-gradient-to-b from-[#FFD700]/50 via-[#FFD700]/10 to-transparent blur-2xl pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 mx-auto mb-4 relative">
                            <img src="/images/awards-decoration-1.png" alt="Ticket" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,107,53,0.5)]" />
                        </div>

                        <h3 className="text-white font-bold mb-1">Invite 3 friends & Get 2 Free Tickets</h3>

                        <div className="w-full bg-[#13181D] h-2 rounded-full mt-4 mb-2 overflow-hidden">
                            <div className="bg-[#FF4B0F] h-full w-2/3 rounded-full"></div>
                        </div>
                        <div className="text-[#A2B4C6] text-xs">2 / 3 friends invited</div>
                    </div>
                </div>
            </div>

            {/* Friends Table */}
            <div className="bg-[#1A2027] rounded-xl p-6 border border-[#242D36]">
                <h3 className="text-white font-bold mb-6">Your Invited Friends</h3>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[#A2B4C6] text-xs border-b border-[#2A3441]">
                                <th className="pb-4 text-left font-medium">User</th>
                                <th className="pb-4 text-left font-medium">Date</th>
                                <th className="pb-4 text-right font-medium">Your reward</th>
                                <th className="pb-4 text-right font-medium">Ticket amount</th>
                                <th className="pb-4 text-right font-medium">Reward value</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {friendsParams.map((friend, i) => (
                                <tr key={i} className="border-b border-[#2A3441]/50 last:border-0 hover:bg-[#2A3441]/20 transition-colors">
                                    <td className="py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#FF6B35] overflow-hidden">
                                                <img src="/images/profile-avatar.png" alt={friend.user} className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-white font-bold">{friend.user}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 text-[#A2B4C6] flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full border border-[#A2B4C6] flex items-center justify-center">
                                            <span className="text-[10px]">🕒</span>
                                        </div>
                                        {friend.date}
                                    </td>
                                    <td className="py-4 text-right text-[#8FD811] font-bold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#8FD811] inline-block mr-2 mb-0.5"></span>
                                        {friend.reward}
                                    </td>
                                    <td className="py-4 text-right text-[#8FD811] font-bold">
                                        <span className="text-xs mr-1 opacity-80">🎫</span>
                                        {friend.tickets}
                                    </td>
                                    <td className="py-4 text-right text-[#8FD811] font-bold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#8FD811] inline-block mr-2 mb-0.5"></span>
                                        {friend.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 bg-[#2A3441] hover:bg-[#3A4651] text-[#A2B4C6] hover:text-white text-sm font-bold rounded-lg transition-colors">
                        View more
                    </button>
                </div>
            </div>
        </div>
    );
}
