import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Facebook, Mail } from "lucide-react";

export default function InfluencerFooter() {
  return (
    <footer className="bg-black text-white py-12 min-h-[300px] w-full">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 grid max-md:grid-cols-1 grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center gap-3">
          <Image
            src="/akshita.jpg"
            alt="Akshita Rawat"
            width={70}
            height={70}
            className="rounded-full border-2 border-white object-cover"
          />
          <h2 className="text-xl font-bold">Akshita Rawat</h2>
          <p className="text-sm text-gray-400 italic">
            Fashion | Lifestyle | Creator 💫
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-gray-300">
            <Link href="https://instagram.com/ajyouthmediia" target="_blank">
              <Instagram className="hover:text-white" />
            </Link>
            <Link href="https://facebook.com/ajyouthmediia" target="_blank">
              <Facebook className="hover:text-white" />
            </Link>
            <Link href="https://youtube.com/@ajyouthmediia" target="_blank">
              <Youtube className="hover:text-white" />
            </Link>
            <Link href="mailto:contact@ajyouthmediia.com">
              <Mail className="hover:text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-800 mt-10 pt-4">
        &copy; <span className="font-semibold text-white">AJYouthMediia</span>. All rights reserved.
      </div>
    </footer>
  );
}
