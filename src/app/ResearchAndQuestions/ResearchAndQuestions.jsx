'use client';

import React, { useState } from 'react';
import faqData from './faqData.json';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ item component
const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  return (
    <div className="border-gray-600 mb-5 sm:px-10">
      <button
        className="w-full flex justify-between items-center cursor-pointer py-4 text-left text-white font-medium bg-blue-950 p-10"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        {faq.question}
        <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      {isOpen && faq.answer && (
        <p className="text-gray-400 text-sm p-10 bg-blue-950">{faq.answer}</p>
      )}
    </div>
  );
};

// Main component
export default function ResearchAndQuestion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="text-white px-4 md:px-20 py-16">
      {/* Top Logos & Research Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
        {/* Logos */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start max-w-xl">
          {['EPFL', 'KU LEUVEN', 'UCL', 'NEXTLEAP', 'EU', 'Inria', 'Panoramix'].map((logo, i) => (
            <div key={i} className="text-gray-300 text-sm">{logo}</div>
          ))}
        </div>

        {/* Research Text */}
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Backed by 10+ years of academic research</h3>
          <p className="text-sm text-gray-400 mb-4">
            BraveVPN is backed by over 10 years of academic research by our founders. Brave&apos;s privacy stack uses cutting-edge protocols, encryption, mixnet, and threat-resistant routing.
          </p>
          <button>Check our research</button>
        </div>
      </div>

      {/* FAQ Section */}
      <h2 className="text-center text-xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="text-2xl mx-auto">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </div>
  );
}
