"use client";
import Link from "next/link";
import { useState } from "react";
import "@/app/globals.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showSocialLinks, setShowSocialLinks] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-30 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Title */}
        <div
          className="text-customGold text-2xl font-bold cursor-pointer"
          style={{ fontFamily: "Thai" }}
          onClick={() => window.location.reload()} // Reloads the page on click
        >
          HoLy Bake
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-customGold text-xl" style={{ fontFamily: "Thai" }}>
            หน้าหลัก
          </Link>
          <Link href="/recommended" className="text-customGold text-xl" style={{ fontFamily: "Thai" }}>
            สินค้าแนะนำ
          </Link>
          {/* Toggle Social Links */}
          <button
            onClick={() => setShowSocialLinks(!showSocialLinks)}
            className="text-customGold focus:outline-none text-xl"
            style={{ fontFamily: "Thai" }}
          >
            ติดต่อเรา
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-customGold focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Social Links Toggle */}
      {showSocialLinks && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-100 shadow-lg rounded-lg p-6 w-72 z-40">
          <h3
            className="text-lg font-bold text-customGold text-center mb-4"
            style={{ fontFamily: "Thai" }}
          >
            ช่องทางการติดต่อ
          </h3>
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="https://lin.ee/bVfZY6h"
              className="w-full text-center text-white bg-customGold px-4 py-2 rounded-xl hover:bg-yellow-500 transition"
              style={{ fontFamily: "Mulish" }}
            >
              Line
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61552901286754"
              className="w-full text-center text-white bg-customGold px-4 py-2 rounded-xl hover:bg-yellow-500 transition"
              style={{ fontFamily: "Mulish" }}
            >
              Facebook
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-customGold text-xl" style={{ fontFamily: "Thai" }}>
              หน้าหลัก
            </Link>
            <Link href="/recommended" className="text-customGold text-xl" style={{ fontFamily: "Thai" }}>
              สินค้าแนะนำ
            </Link>
            {/* Toggle Social Links */}
            <button
              onClick={() => setShowSocialLinks(!showSocialLinks)}
              className="text-customGold text-left focus:outline-none text-xl"
              style={{ fontFamily: "Thai" }}
            >
              ติดต่อเรา
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
