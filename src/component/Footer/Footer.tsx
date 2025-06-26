import Link from "next/link";
import Image from "next/image";
import { navLinks, profile, socialLinks } from "@/utils/data/Footer";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full h-auto py-12">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-left max-md:grid-cols-1 max-md:text-center">
        {/* Profile Section */}
        <div className="flex items-center gap-4 justify-start max-md:justify-center">
          <div className="relative w-20 h-20">
            <Image
              src={profile.imageUrl}
              alt={profile.name}
              fill
              className="rounded-full border-2 border-white object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="text-sm text-gray-500 italic">{profile.description}</p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 justify-start max-md:justify-center text-gray-300">
            {socialLinks.map(({ name, href, icon: Icon, colorClass }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                aria-label={name}
                className="group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
                  <Icon className={`${colorClass} group-hover:text-white w-5 h-5`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 px-4">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-5 py-4 gap-4 text-sm text-gray-400 max-md:flex-col max-md:gap-2 max-md:text-center">
          {/* Left */}
          <div className="flex items-center gap-2 justify-center max-md:flex-col max-md:gap-1">
            <span>&copy; 2025. All rights reserved.</span>
            <Link
              href="https://www.instagram.com/ajyouthmediia/"
              target="_blank"
              aria-label="AJYouthMediia Instagram"
              className="flex items-center gap-1 font-semibold text-white"
            >
              <Instagram className="w-5 h-5 text-pink-500" />
              AJYouthMediia
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 justify-center max-md:flex-col max-md:gap-1">
            <span>The webpage is managed by</span>
            <Link
              href="https://www.instagram.com/amarjeetrajput326/"
              target="_blank"
              aria-label="Instagram"
              className="flex items-center gap-1 "
            >
              <Instagram className="w-5 h-5 text-pink-500" />
              <span className="font-semibold text-white">Amarjeet Rajput</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
