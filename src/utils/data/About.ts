import {
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Mail,
  LucideIcon,
} from "lucide-react";

// Interfaces
export interface SocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface InfluencerProfile {
  name: string;
  bio: string;
  image: string;
  stats: { label: string; value: number; suffix?: string }[];
  mission: string;
  socials: SocialLink[];
}

// Data
export const data: InfluencerProfile = {
  name: "Akshita Rawat",
  bio: "Hi, I'm Akshita! Rawat A fashion and lifestyle influencer who shares beauty tips, travel diaries, and real-life moments. I help others live boldly and beautifully.",
  image: "/collab-1.jpg",
  stats: [
    { label: "Instagram Followers", value: 203, suffix: "K+" },
    { label: "YouTube Subscribers", value: 282, suffix: "K+" },
    { label: "Brand Collaborations", value: 120, suffix: "+" },
    { label: "Total Reach", value: 10000000, suffix: "+" },
  ],
  mission:
    "I aim to empower and inspire. Whether it’s through style, self-expression, or sharing honest moments, I want to help others embrace who they are and live fully.",
  socials: [
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: Instagram,
      color: "text-pink-500",
    },
    {
      href: "https://youtube.com",
      label: "YouTube",
      icon: Youtube,
      color: "text-red-500",
    },
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: Facebook,
      color: "text-blue-600",
    },
    {
      href: "mailto:email@example.com",
      label: "Email",
      icon: Mail,
      color: "text-yellow-400",
    },
  ],
};