import Link from "next/link";
import Image from "next/image";
import { navLinks, profile, socialLinks } from "@/utils/data/Footer";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 min-h-[300px] w-full">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 grid max-md:grid-cols-1 grid-cols-3 gap-8 text-center md:text-left">

        {/* Profile Section */}
        <div className="flex items-center gap-4">
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
          <div className="flex justify-center md:justify-start gap-4 text-gray-300">
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

      {/* Bottom Line with Instagram icon */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-800 mt-10 pt-4 flex items-center justify-center gap-2">
        <Link
          href="https://www.instagram.com/ajyouthmediia/"
          target="_blank"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 text-pink-500 hover:text-white transition" />
        </Link>
        &copy; <span className="font-semibold text-white">AJYouthMediia</span>
        . All rights reserved.
      </div>
    </footer>
  );
}
