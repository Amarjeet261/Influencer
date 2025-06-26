"use client";
import { data } from "@/utils/data/About";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [counts, setCounts] = useState<number[]>(
    data.stats.map(() => 0)
  );

  useEffect(() => {
    const duration = 1000; 
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      const updated = data.stats.map((stat) =>
        Math.floor(stat.value * progress)
      );

      setCounts(updated);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center mt-10 bg-white text-gray-800 px-4 py-16 md:px-10 max-md:mt-20">
      {/* Hero Section */}
      <div className="w-[85%] flex flex-col max-lg:flex-col md:flex-row items-center gap-12">
        <div className="relative w-64 h-64 max-lg:w-[300px] max-lg:h-[400px] max-lg:rounded rounded-full overflow-hidden shadow-lg">
          <Image
            src={data.image}
            alt={`${data.name} Profile`}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-center max-md:text-center max-sm:text-center md:text-left">
          <h1 className="text-4xl max-sm:text-2xl font-bold text-pink-600 uppercase mb-2">
            {data.name}
          </h1>
          <p className="text-lg max-w-xl max-sm:text-base">{data.bio}</p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {data.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 hover:scale-110 transition-transform ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-[70%] grid grid-cols-4 max-md:grid-cols-2 [@media(max-width:390px)]:grid-cols-1 gap-6 mt-16 text-center">
        {data.stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-3xl font-bold text-pink-600">
              {counts[idx].toLocaleString()}
              {stat.suffix}
            </p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="mt-20 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl max-sm:text-2xl font-semibold mb-4 text-pink-600">
          My Mission
        </h2>
        <p className="text-lg max-sm:text-base text-gray-700">
          {data.mission}
        </p>
      </div>
    </section>
  );
}
