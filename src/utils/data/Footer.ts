import { Instagram, Youtube, Facebook, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  colorClass: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const profile = {
  name: "Akshita Rawat",
  description: "Fashion | Lifestyle | Creator 💫",
  imageUrl: "/akshita.jpg",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/akx.putf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: Instagram,
    colorClass: "text-pink-500",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@akxhittaa",
    icon: Youtube,
    colorClass: "text-red-600",
  },
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
    colorClass: "text-blue-600",
  },
  {
    name: "Email",
    href: "#",
    icon: Mail,
    colorClass: "text-yellow-400",
  },
];