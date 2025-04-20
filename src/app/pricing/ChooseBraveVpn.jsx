import Image from 'next/image';
import features from './chooseBraveVpnData.json';

export default function ChooseBraveVpn() {
  return (
    <div className="min-h-screen text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Why choose Brave VPN</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-xl border-l-blue-500 border-t-blue-500"
          >
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={96}
                height={96}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
