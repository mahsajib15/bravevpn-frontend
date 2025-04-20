import React from "react";

const page = () => {
  return (
    <div className="container mx-auto">
      <div className="text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Privacy is a <span className="text-green-400">right</span>! Reclaim
            it.
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            In a digital world dominated by surveillance capitalism, where every
            click and scroll feeds the insatiable appetite of data miners,{" "}
            <span className="text-white font-semibold">Brave VPN</span> emerges
            as a beacon of resistance. We don’t just offer a service; we ignite
            a revolution against the exploitation of personal information.
          </p>

          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            With a{" "}
            <span className="text-white font-medium">
              verified no-logs policy
            </span>{" "}
            and{" "}
            <span className="text-white font-medium">
              end-to-end encryption
            </span>
            , we ensure that your online activities remain your own, impervious
            to prying eyes.
          </p>

          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join us in dismantling the surveillance economy. Embrace a future
            where your digital life is yours alone. With{" "}
            <span className="text-white font-semibold">Brave VPN</span>, you’re
            not just browsing—you’re reclaiming your right to privacy.
          </p>

          <p className="text-xl font-bold text-green-400 mb-2">
            Stand with us. Be Brave.
          </p>

          <div className="mt-14 border-t border-gray-700 pt-10">
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Know the team
            </h3>
            <p className="text-sm text-gray-600 italic">Sorry! no data found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
