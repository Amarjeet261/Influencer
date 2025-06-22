import { brandCollaborations } from "@/utils/data/OtherCollab";
import Image from "next/image";


export default function OtherCollaborations() {
  return (
    <section className="bg-pink-100 py-16 px-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-wide">
        OTHER COLLABORATIONS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 max-w-6xl mx-auto">
        {brandCollaborations.map((brand, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 mb-4">
              <Image src={brand.logoSrc} alt={brand.name} fill className="object-contain rounded-full" />
            </div>
            <p
              className={`text-sm sm:text-base ${brand.textColor || ""} ${
                brand.bold ? "font-bold" : "font-medium"
              } ${brand.underline ? "underline" : ""}`}
            >
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
