import Image from "next/image";
import React from "react";

const PassportFlag = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center px-4 md:px-0 mb-20 md:mb-32">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-10 font-bold">
        Your passport to the world
      </h1>
      <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-10 text-gray-300">
        With 200+ servers across 45 countries, you are free to access content <br className="hidden sm:block" />
        wherever you want, no matter where you are.
      </p>

      <Image
        width={200}
        height={200}
        src="/images/Flags.png"
        alt="World Flags"
        className="w-full max-w-xs sm:max-w-md md:max-w-3xl"
      />
    </div>
  );
};

export default PassportFlag;
