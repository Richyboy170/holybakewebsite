"use client";
import Link from "next/link";
import "@/app/globals.css";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-30 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div
          className="text-customGold text-2xl font-bold cursor-pointer"
          style={{ fontFamily: 'Thai' }}
          onClick={() => window.location.reload()}
        >
          HoLy Bake
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center text-lg">
          <Link href="/" className="text-customGold hover:underline" style={{ fontFamily: 'Thai' }}>
            หน้าหลัก
          </Link>
          <Link href="/recommended" className="text-customGold hover:underline" style={{ fontFamily: 'Thai' }}>
            สินค้าแนะนำ
          </Link>
          <Link href="/contact" className="text-customGold hover:underline" style={{ fontFamily: 'Thai' }}>
            ติดต่อเรา
          </Link>
        </div>

        {/* Mobile Hamburger */}
        {/* Add mobile menu logic if required */}
      </div>
    </nav>
  );
};

export default Navbar;
