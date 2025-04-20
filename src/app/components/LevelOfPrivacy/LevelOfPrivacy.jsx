import Image from "next/image";
import React from "react";

const LevelOfPrivacy = () => {
  return (
    <>
      <div className="px-4 sm:px-10 mx-auto">
        {/* Section 1: Privacy for all your devices */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20 md:mb-32">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-10 font-bold">
              Privacy for all your devices
            </h1>
            <p className="text-xl sm:text-2xl mb-10">
              Download the BraveVPN app on your preferred device, enter your
              access code, and connect.
            </p>
            <button className="px-6 py-3 bg-green-600 text-white rounded-3xl font-bold hover:bg-green-700 transition">
              Get BraveVPN
            </button>
          </div>

          <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] relative">
            <Image
              fill
              src="/images/Devices.png"
              alt="devices"
              className="object-contain"
            />
          </div>
        </div>

        {/* Section 2: Choose your level of privacy */}
        <div className="px-4 sm:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 font-bold">
            Choose your level of privacy
          </h1>
          <p className="text-xl sm:text-2xl mb-10">
            BraveVPN offers two modes for you to customize the level of
            protections you need.
          </p>

          <div className="flex flex-col lg:flex-row gap-10 justify-between mt-10 mb-20">
            {/* Fast Mode */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-[200px] h-[200px] relative">
                <Image
                  fill
                  src="/images/fastMode.png"
                  alt="fast mode"
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">
                  Fast Mode: For everyday browsing & streaming
                </h2>
                <p className="text-sm text-gray-600 mt-3">
                  A decentralized, 2-hop connection with AmneziaWG™. Tunneled
                  end-to-end encryption that beats most VPN blockers.
                </p>
              </div>
            </div>

            {/* Anonymous Mode */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-[200px] h-[200px] relative">
                <Image
                  fill
                  src="/images/anonMode.png"
                  alt="anonymous mode"
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">
                  Anonymous Mode: For sensitive communications & transactions
                </h2>
                <p className="text-sm text-gray-600 mt-3">
                  Real anonymity through Brave's Noise Generating Network, with
                  5-hops and protection from advanced threats and surveillance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelOfPrivacy;
