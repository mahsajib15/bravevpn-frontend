import Image from "next/image";

export default function VpnService() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Why <span className="text-green-400">BraveVPN</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-14 max-w-2xl mx-auto">
              BraveVPN is more than a VPN—its a mission. We are dismantling
              centralized control and reclaiming digital freedom through a
              decentralized, peer-powered network.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {/* Feature 1 */}
              <div className="p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all border border-gray-700">
                <Image
                  src="/icons/indiaFlag.png"
                  alt="India Flag"
                  width={56}
                  height={56}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  India-Friendly Payments
                </h3>
                <p className="text-gray-400 text-sm">
                  Seamless UPI, net banking, vouchers, and crypto payments—no
                  KYC needed.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all border border-gray-700">
                <Image
                  src="/icons/userFriendly.png"
                  alt="User Friendly"
                  width={56}
                  height={56}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  User-Friendly Access
                </h3>
                <p className="text-gray-400 text-sm">
                  One-click connectivity with smooth apps across all your
                  devices.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all border border-gray-700">
                <Image
                  src="/icons/anonimity.png"
                  alt="Anonymity"
                  width={56}
                  height={56}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Enhanced Anonymity
                </h3>
                <p className="text-gray-400 text-sm">
                  Multi-hop routing, dummy traffic & session rotation by
                  default.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all border border-gray-700">
                <Image
                  src="/icons/communityPowered.png"
                  alt="Community Network"
                  width={56}
                  height={56}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Community-Powered Network
                </h3>
                <p className="text-gray-400 text-sm">
                  Indian nodes prioritized with volunteer-run relays for true
                  resilience.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all border border-gray-700">
                <Image
                  src="/icons/clearGoal.png"
                  alt="Transparent Operations"
                  width={56}
                  height={56}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  Transparent Operations
                </h3>
                <p className="text-gray-400 text-sm">
                  100% open-source. Regular audits, clear messaging, and ongoing
                  testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
