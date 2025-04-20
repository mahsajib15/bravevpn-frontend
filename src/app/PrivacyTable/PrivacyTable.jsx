'use client';

import { Check, Minus, ShieldX, X } from 'lucide-react';
import data from './privacyTable.json';

const renderValue = (value) => {
  if (value === true)
    return <span className="text-green-500 text-xl"><Check /></span>;
  if (value === false)
    return <span className="text-red-500 text-xl"><X /></span>;
  if (value === '*')
    return <span className="text-yellow-500 text-xl"><ShieldX /></span>;
  return <span className="text-gray-400 text-xl"><Minus /></span>;
};

export default function PrivacyTable() {
  return (
    <div className="text-white mb-32 py-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        More Privacy. More Safety. More Control.
      </h2>
      <p className="mb-12 max-w-3xl text-lg">
        See how our unique combination of multi-layer encryption, Noise Generating Mixnet,
        and decentralized design measures up to competitors.
      </p>

      <div className="overflow-auto">
        <table className="min-w-full text-sm text-left border border-gray-700">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 border-b border-gray-600">Features</th>
              <th className="px-6 py-3 border-b border-gray-600">BraveVPN</th>
              <th className="px-6 py-3 border-b border-gray-600">Most VPNs</th>
              <th className="px-6 py-3 border-b border-gray-600">Tor</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-t border-gray-700">
                <td className="px-6 py-4">{row.feature}</td>
                <td className="px-6 py-4 text-center">{renderValue(row.nymvpn)}</td>
                <td className="px-6 py-4 text-center">{renderValue(row.mostVpns)}</td>
                <td className="px-6 py-4 text-center">{renderValue(row.tor)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
