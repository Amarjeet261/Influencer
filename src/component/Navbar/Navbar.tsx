"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Menu, X } from "lucide-react";
import { navLinks } from "@/utils/data/Navbar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 py-4 shadow-md bg-white fixed top-0 left-0 z-50 overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
            <Image
              src="/akshita.jpg"
              alt="Akshita"
              fill
              className="rounded-full border-2 border-white object-cover"
              sizes="(max-width: 640px) 56px, 64px"
            />
          </div>
          <span className="text-sm sm:text-base font-bold text-black whitespace-nowrap">
            Akshita Rawat
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center flex-wrap">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black font-medium hover:text-orange-600 transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="https://www.instagram.com/akx.putf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
            target="_blank"
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800 text-pink-500">
              <Instagram size={20} />
            </span>
            Follow Me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white px-4 py-4 rounded-md shadow space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 font-medium  transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="https://www.instagram.com/akx.putf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="flex w-fit items-center gap-2 bg-neutral-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
            target="_blank"
            onClick={() => setMenuOpen(false)}
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800 text-pink-500">
              <Instagram size={20} />
            </span>
            Follow Me
          </Link>
        </div>
      )}
    </nav>
  );
}
