
import Image from "next/image";
import React from "react";

const LevelOfPrivacy = () => {
  return (
    <>
      <div className="sm:p-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:px-0 mb-20 md:mb-32">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-10 font-bold">
              Privacy for all your devices
            </h1>
            <p className="text-2xl mb-10">
              Download the BraveVPN app on your preferred device, enter your
              access code, and connect.
            </p>
            <button className="p-3 bg-green-600 rounded-3xl cursor-pointer font-bold">Get BraveVPN</button>
            
          </div>
          <div className="w-full h-[400px] relative">
            <Image
              fill
              src="/images/Devices.png"
              alt="devices"
              className="object-contain"
            />
          </div>
        </div>

        <div>
          <h1 className="text-5xl mb-10">Choose your level of privacy</h1>
          <p className="text-2xl mb-10">
            BraveVPN offers two modes for you to customize the level of <br />
            protections you need
          </p>

          <div className="flex flex-col lg:flex-row gap-10 justify-between mb-20 mt-20">
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
                <p className="text-sm text-gray-600 mt-5">
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
                <p className="text-sm text-gray-600 mt-5">
                  Real anonymity through Braves Noise Generating Network, with
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
