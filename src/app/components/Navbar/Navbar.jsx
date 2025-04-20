"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const navItems = [
    {
      name: "Why BraveVPN",
      path: "/why-vpn",
      dropdown: [
        {
          label: "Learn More About BraveVPN",
          path: "/why-vpn",
        },
      ],
    },
    {
      name: "Pricing",
      path: "/pricing",
      dropdown: [
        {
          label: "Find Your Plan",
          path: "/pricing",
        },
      ],
    },
    {
      name: "Download",
      path: "/download",
      dropdown: [
        {
          label: "Asia",
          details: "Servers across Asia",
          path: "/vpn-location/asia",
        },
        {
          label: "Europe",
          details: "Servers across Europe",
          path: "/vpn-location/europe",
        },
      ],
    },
    {
      name: "Resources",
      path: "/resources",
      dropdown: [
        {
          label: "BraveVPN Docs",
          details: "Official documentation",
          path: "/resources/docs",
        },
        {
          label: "BraveVPN Whitepaper",
          details: "Technical breakdown",
          path: "/resources/whitepaper",
        },
        {
          label: "BraveVPN Litepaper",
          details: "Overview of BraveVPN",
          path: "/resources/litepaper",
        },
      ],
    },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <header className="container mx-auto flex justify-between items-center px-4 py-6 relative z-50">
        <Link
          href="/"
          className="text-3xl font-bold flex items-center gap-3 text-white"
        >
          <Image
            src="/bravelogo.png"
            alt="BraveVPN Logo"
            width={48}
            height={48}
          />
          BraveVPN
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-white relative">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <Link href={item.path} className="flex items-center gap-1">
                  {item.name}
                </Link>
                {item.dropdown && <ChevronDown size={14} />}
              </div>

              {item.dropdown && activeDropdown === item.name && (
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-white text-black shadow-2xl rounded-md w-[300px] sm:w-[400px] p-4 z-50"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="space-y-2">
                    {item.dropdown.map((sub, i) => (
                      <Link key={i} href={sub.path}>
                        <div className="hover:bg-gray-100 px-3 py-2 rounded transition cursor-pointer">
                          <p className="font-semibold">{sub.label}</p>
                          <p className="text-sm text-gray-500">{sub.details}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/pricing"
            className="hidden lg:block bg-[#14e76f] px-4 py-2 rounded-full hover:bg-green-600 text-black"
          >
            Get BraveVPN
          </Link>
          <Link
            href="/login"
            className="text-base text-white hover:underline hidden lg:block"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden bg-green-500 p-2 rounded-full"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-full bg-white text-black px-6 py-6 transform transition-transform z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold">BraveVPN</div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-base hover:underline">
              Login
            </Link>
            <button onClick={() => setMenuOpen(false)}>
              <X className="w-10 h-10 bg-green-500 p-2 rounded-full text-black" />
            </button>
          </div>
        </div>

        <Link
          href="#"
          className="bg-[#14e76f] w-full block py-3 rounded-full text-center text-black mb-4"
        >
          Get BraveVPN
        </Link>

        <ul className="flex flex-col gap-3 text-sm font-medium">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => toggleDropdown(item.name)}
                className="w-full flex justify-between items-center px-2 py-2 text-left"
              >
                <span>{item.name}</span>
                {item.dropdown && <ChevronDown size={14} />}
              </button>
              {item.dropdown && activeDropdown === item.name && (
                <ul className="bg-gray-100 rounded-md mt-1 ml-2">
                  {item.dropdown.map((sub, i) => (
                    <li key={i}>
                      <Link
                        href={sub.path}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {!item.dropdown && (
                <Link
                  href={item.path}
                  className="block px-2 py-2 ml-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Optional Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
