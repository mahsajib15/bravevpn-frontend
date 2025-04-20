"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    logo: "/images/Techradar.png",
    quote:
      "As surveillance technologies improve, mixnets like NymVPN may become the gold standard for privacy-focused internet users.",
  },
  {
    logo: "",
    quote:
      "With a privacy-first model and blockchain foundation, the VPN has the bones to be something really revolutionary.",
  },
  {
    logo: "",
    quote:
      "With that multi-hop system built atop a ZK-powered blockchain, this could be one of the most secure decentralized VPN options out there right now.",
  },
  {
    logo: "",
    quote:
      "BraveVPN aims to offer genuine unlinkability and privacy that can withstand AI-driven pattern recognition.",
  },
];

const BuildByExpert = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#00000048] text-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left side static content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Built by experts, trusted by those who need it
          </h2>
        </div>

        {/* Right side slider */}
        <div className="md:w-1/2 space-y-6 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className="flex gap-4 mb-4">
                {testimonials[activeIndex].logo && (
                  // <Image
                  //   width={50}
                  //   height={50}
                  //   src='/public/images/Techradar.png'
                  //   alt="logo"
                  //   className="h-6 object-contain"
                  // />
                )}
              </div> */}
              <p className="text-lg text-gray-200 h-36 leading-relaxed">
                “{testimonials[activeIndex].quote}”
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex gap-6 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 border-2 rounded-full transition-all duration-200 ${
                  index === activeIndex ? "bg-green-400 border-green-400" : "bg-white border-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildByExpert;
