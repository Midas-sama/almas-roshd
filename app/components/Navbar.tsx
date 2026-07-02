"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-white">
          Edu<span className="text-cyan-400">Verse</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex text-sm text-gray-300">

          <Link href="#features" className="hover:text-white transition">
            امکانات
          </Link>

          <Link href="#courses" className="hover:text-white transition">
            دوره‌ها
          </Link>

          <Link href="#about" className="hover:text-white transition">
            درباره ما
          </Link>

          <Link href="#contact" className="hover:text-white transition">
            ارتباط
          </Link>

        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/auth">
          <button className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-black hover:bg-cyan-400 transition">
            ورود / ثبت‌نام
          </button>
          
            
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl px-6 py-4 space-y-4 text-gray-300">

          <Link href="#features" className="block">
            امکانات
          </Link>

          <Link href="#courses" className="block">
            دوره‌ها
          </Link>

          <Link href="#about" className="block">
            درباره ما
          </Link>

          <Link href="#contact" className="block">
            ارتباط
          </Link>

          <button className="mt-4 w-full rounded-full bg-cyan-500 py-2 text-black font-medium">
            ورود / ثبت‌نام
          </button>

        </div>
      )}

    </nav>
  );
}

