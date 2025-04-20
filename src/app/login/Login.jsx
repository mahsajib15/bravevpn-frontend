"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [accessCode, setAccessCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accessCode.trim().split(" ").length === 24) {
      router.push("/plan");
    } else {
      alert("Please enter a valid 24-word access code.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-b from-gray-200 to-gray-300 p-10 rounded-md shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4">Welcome</h2>
        <p className="text-sm mb-6 text-gray-700">
          Enter your anonymous Access Code to see your Plan
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full h-28 p-3 rounded-md text-sm border border-gray-300 mb-5 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            placeholder="Your 24-word Access Code"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-400 text-black font-medium py-3 rounded-full hover:bg-green-500 transition"
          >
            See my Plan
          </button>
        </form>

        <p className="text-xs text-black mt-6">
          Don’t have an Access Code?{" "}
          <a href="/create-access" className="underline font-medium">
            <Link href='/registration'>Create one here</Link>
          </a>
        </p>
      </div>
    </div>
  );
}
