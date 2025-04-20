export default function Pricing() {
  return (
    <div className="container mx-auto">
      <section className="text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            Choose your BraveVPN plan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1 Month Plan */}
            <div className="bg-[#e0f7fa] text-black p-8 rounded-md shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">1 Month Plan</h3>
                <p className="text-3xl font-bold">
                  $12.99 <span className="text-base font-normal">/ Month</span>
                </p>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block">
                  Save ~0% 
                </span>
                <p>No Discounts</p>
                <p className="mt-2 text-sm font-medium">
                  $12.99 for 1 month + tax
                </p>

                <button className="mt-6 w-full bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-500 hover:shadow-sm hover:shadow-amber-400 transition cursor-pointer">
                  Select plan
                </button>

                <ul className="mt-6 text-sm text-gray-800 space-y-2 text-left">
                  <li>
                    ✔ Fast <strong>WireGuard</strong> (AmneziaWG) for everyday
                    protection
                  </li>
                  <li>
                    ✔ Anonymous <strong>mixnet</strong> for advanced privacy
                  </li>
                  <li>
                    ✔ <strong>50</strong> entry and exit{" "}
                    <strong>locations</strong> to choose from
                  </li>
                  <li>
                    ✔ Online activities and payment info are{" "}
                    <strong>never linked</strong>
                  </li>
                  <li>
                    ✔ Up to <strong>10 devices</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2 Year Plan - Most Popular */}
            <div className="bg-[#e0f7fa] text-black p-8 rounded-md shadow-md flex flex-col justify-between border-4 border-green-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-400 text-black text-sm font-semibold px-4 py-1 rounded-full">
                most popular
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2 Year plan</h3>
                <p className="text-3xl font-bold">
                  $5.49 <span className="text-base font-normal">/ Month</span>
                </p>
                <span className="text-xs bg-black text-white px-2 py-1 rounded mt-2 inline-block">
                  Save ~60%
                </span>
                <p className="mt-2 text-sm font-medium line-through">$329.40</p>
                <p className="text-sm font-medium">
                  $131.76 for 24 months + tax
                </p>

                <button className="mt-6 w-full bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-500 hover:shadow-sm hover:shadow-amber-400 transition cursor-pointer">
                  Select plan
                </button>

                <ul className="mt-6 text-sm text-gray-800 space-y-2 text-left">
                  <li>
                    ✔ Fast <strong>WireGuard</strong> (AmneziaWG) for everyday
                    protection
                  </li>
                  <li>
                    ✔ Anonymous <strong>mixnet</strong> for advanced privacy
                  </li>
                  <li>
                    ✔ <strong>50</strong> entry and exit{" "}
                    <strong>locations</strong> to choose from
                  </li>
                  <li>
                    ✔ Online activities and payment info are{" "}
                    <strong>never linked</strong>
                  </li>
                  <li>
                    ✔ Up to <strong>10 devices</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* 1 Year Plan */}
            <div className="bg-[#e0f7fa] text-black p-8 rounded-md shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">1 Year plan</h3>
                <p className="text-3xl font-bold">
                  $6.99 <span className="text-base font-normal">/ Month</span>
                </p>
                <span className="text-xs bg-black text-white px-2 py-1 rounded mt-2 inline-block">
                  Save ~45%
                </span>
                <p className="mt-2 text-sm font-medium line-through">$155.88</p>
                <p className="text-sm font-medium">
                  $83.88 for 12 months + tax
                </p>

                <button className="mt-6 w-full bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-500 hover:shadow-sm hover:shadow-amber-400 transition cursor-pointer">
                  Select plan
                </button>

                <ul className="mt-6 text-sm text-gray-800 space-y-2 text-left">
                  <li>
                    ✔ Fast <strong>WireGuard</strong> (AmneziaWG) for everyday
                    protection
                  </li>
                  <li>
                    ✔ Anonymous <strong>mixnet</strong> for advanced privacy
                  </li>
                  <li>
                    ✔ <strong>50</strong> entry and exit{" "}
                    <strong>locations</strong> to choose from
                  </li>
                  <li>
                    ✔ Online activities and payment info are{" "}
                    <strong>never linked</strong>
                  </li>
                  <li>
                    ✔ Up to <strong>10 devices</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
