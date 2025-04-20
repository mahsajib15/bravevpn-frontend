'use client';
import React from 'react';
import ChooseData from './chooseData.json';
import './animatedBorder.css';
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <div className="text-white px-4 md:px-10 py-12 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Why choose <span className="text-blue-400">BraveVPN</span>?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ChooseData.map((feature, idx) => (
          <div
            key={idx}
            className="animated-border relative cursor-pointer hover:bg-blue-900 max-w-sm sm:max-w-md md:max-w-[420px] h-auto p-8 md:p-10 shadow-md text-white transition-all"
          >
            <div className="w-1/2">
              <Image
                src={feature.icon}
                width={80}
                height={80}
                alt={feature.title}
                className="hover:bg-amber-400 hover:rounded-2xl hover:p-4 mt-6 md:mt-10 mb-4"
              />
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>

            <Image
              width={50}
              height={50}
              src="/icons/arrow.png"
              alt="Arrow"
              className="absolute top-6 right-6 w-8 h-8 md:top-10 md:right-10 md:w-10 md:h-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
