"use client"
import { collaborationData } from "@/utils/data/RecentCollab";
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RecentCollaboration() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <section className="relative w-full bg-[url('/collab-bg.jpg')] bg-cover bg-center py-16 px-4 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-6xl max-md:text-4xl font-bold tracking-wide text-[#511d1d] uppercase [@media(max-width:390px)]:text-3xl">
          Recent Collaboration
        </h2>
      </div>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="3000">
        {collaborationData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 text-center">
            <div
              className={`relative w-[240px] h-[360px] rounded-xl overflow-hidden ${
                item.isGrayscale ? "grayscale" : ""
              }`}
            >
              <Image src={item.imageSrc} alt={item.alt} fill className="object-cover" />
            </div>

            {item.caption && (
              <p
                className={`whitespace-pre-line ${
                  idx === 0
                    ? "text-2xl font-semibold text-[#9c4a1a]"
                    : idx === 1
                    ? "text-[20px] font-semibold tracking-wider uppercase"
                    : "text-[20px] font-medium"
                }`}
              >
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
