'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Sample word list (for demonstration — in real apps, use a secure generator like BIP39)
const wordList = [
  'smoke', 'artifact', 'velvet', 'skull', 'pop', 'palace', 'tortoise', 'damage',
  'rough', 'slide', 'ticket', 'measure', 'latin', 'economy', 'gorilla', 'gauge',
  'curve', 'envy', 'across', 'ripple', 'supply', 'ugly', 'tuna', 'anchor'
];

const generateAccessCode = () => {
  let code = [];
  for (let i = 0; i < 24; i++) {
    const randIndex = Math.floor(Math.random() * wordList.length);
    code.push(wordList[randIndex]);
  }
  return code.join(' ');
};

export default function Registration() {
  const [accessCode, setAccessCode] = useState('');
  const router = useRouter();

  const handleGenerate = () => {
    const newCode = generateAccessCode();
    setAccessCode(newCode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f121a] text-white px-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Get your Access Code</h1>
        <p className="text-gray-300 mb-6">
          We take your privacy seriously, which means you don&apos;t need to create an account to use our VPN.
          You generate your own anonymous Access Code that you use to connect your devices.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-400 mb-8 space-y-2">
          <li>Securely generate your Access Code in your browser and save it somewhere secure.</li>
          <li>Unlike a normal password, there is no way to change or recover this Access Code if you lose it.</li>
          <li>Never share your Access Code—not even with us!</li>
        </ul>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Your Access Code</label>
          <textarea
            value={accessCode}
            readOnly
            className="w-full p-4 h-28 rounded bg-[#e0f7fa] text-black text-sm resize-none"
          />
        </div>

        <button
          onClick={handleGenerate}
          className="w-full bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-500 transition"
        >
          Generate my Access Code
        </button>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an Access Code?{' '}
          <a href="/login" className="underline text-white font-medium">
            See your Plan
          </a>
        </p>
      </div>
    </div>
  );
}
