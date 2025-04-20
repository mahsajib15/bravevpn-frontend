import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-center px-4 py-36">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-white">The World&apos;s most private VPN</h2>
        <h4 className="text-2xl text-white">
        The VPN designed to leave nothing behind.
Coming soon

        </h4>
        <button className='p-3 bg-green-600 rounded-3xl cursor-pointer font-bold'>Get BraveVPN</button>
      </div>
      <div className="md:w-1/2">
        <Image
          width={570}
          height={570}
          src="/images/image-1.png"
          alt="image-1"
          className="w-[570px] h-[570px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
 