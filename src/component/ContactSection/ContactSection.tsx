// ContactSection.tsx
import { contactData } from "@/utils/data/ContactSection";
import Image from "next/image";


export default function ContactSection() {
  return (
    <section className="bg-[url('/background.png')] bg-cover bg-center py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start justify-between">
        {/* Left Info Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-bold text-[#561c1c]">Work with Me</h2>

          <div className="space-y-4 text-sm sm:text-base">
            <div>
              <p className="font-semibold tracking-wide">PHONE NUMBER</p>
              <p className="border-b border-black pb-2">{contactData.phone}</p>
            </div>

            <div>
              <p className="font-semibold tracking-wide">EMAIL ADDRESS</p>
              <p className="border-b border-black pb-2">{contactData.email}</p>
            </div>
          </div>

          <p className="text-xs text-gray-600 pt-4 uppercase tracking-wide">
            Click on the red sentences to follow the link*
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-8 pt-4 text-lg">
            {contactData.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                className="flex items-center gap-2 text-red-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 max-w-sm md:max-w-md">
          <Image
            src={contactData.image}
            alt="Akshita Portrait"
            width={500}
            height={600}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
