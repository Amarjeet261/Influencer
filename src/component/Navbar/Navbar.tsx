"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function InfluencerNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/bio" },
    { name: "Gallery", href: "/gallery" },
    { name: "Collab", href: "/collab" },
  ];

  return (
    <header className="w-full px-6 py-4 shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/akshita.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-lg font-bold">Akshita Rawat</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-black font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
        >
          {menuOpen ? <X size={28}/> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-black text-white px-4 py-2 rounded-full"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
