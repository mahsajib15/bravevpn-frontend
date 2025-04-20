'use client';
import React from "react";
import UseData from "./useData.json";
import Image from "next/image";

const WhyUse = () => {
  return (
    <div className="text-white px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why use <span className="text-blue-400">BraveVPN</span>?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {UseData.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-7 text-white p-6 shadow-md relative bg-[#101010] rounded-xl"
          >
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                src={feature.icon.startsWith("/") ? feature.icon : `/${feature.icon}`}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUse;
