import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white px-4 sm:px-6 py-12">
      {/* Newsletter Section */}
      <hr className="mb-10" />
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">BraveVPN</h2>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Image
              width={56}
              height={56}
              src="/icons/facebook.png"
              className="w-14 bg-white p-2 rounded-2xl cursor-pointer"
              alt="facebook"
            />
            <Image
              width={56}
              height={56}
              src="/icons/instagram.png"
              className="w-14 bg-white p-2 rounded-2xl cursor-pointer"
              alt="instagram"
            />
            <Image
              width={56}
              height={56}
              src="/icons/twitter.png"
              className="w-14 bg-white p-2 rounded-2xl cursor-pointer"
              alt="twitter"
            />
            <Image
              width={56}
              height={56}
              src="/icons/linkedin.png"
              className="w-14 bg-white p-2 rounded-2xl cursor-pointer"
              alt="linkedin"
            />
            <Image
              width={56}
              height={56}
              src="/icons/discord.png"
              className="w-14 bg-white p-2 rounded-2xl cursor-pointer"
              alt="discord"
            />
            <Image
              width={56}
              height={56}
              src="/icons/github.png"
              className="w-14 bg-white p-2 rounded-2xl cursor-pointer"
              alt="github"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="border-t border-gray-600 pt-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm px-4 sm:px-0">
        <div>
          <h3 className="font-bold mb-3">About</h3>
          <ul className="space-y-1">
            <li>
              <a href="#">Brave&apos;s whitepaper ↗</a>
            </li>
            <li>
              <a href="#">BraveVPN litepaper</a>
            </li>
            <li>
              <a href="#">BraveVPN public roadmap ↗</a>
            </li>
            <li>
              <a href="#">Status of Nym services ↗</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Downloads</h3>
          <ul className="space-y-1">
            <li>BraveVPN for Android</li>
            <li>BraveVPN for iOS</li>
            <li>BraveVPN for Linux</li>
            <li>BraveVPN for macOS</li>
            <li>BraveVPN for Windows</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>VPN Locations</li>
            <li>Server List</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul className="space-y-1">
            <li>Unlimited VPN</li>
            <li>Dedicated VPN</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Legal</h3>
          <ul className="space-y-1">
            <li>Refund Policy</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-center mt-10 font-bold text-white">
        Copyright © 2018-2025 BraveVPN. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};

export default Footer;
