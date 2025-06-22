import Image from "next/image";

// 1. Define the interface
interface BrandCollab {
  name: string;
  logoSrc: string;
  textColor?: string;
  bold?: boolean;
  underline?: boolean;
}

// 2. Data Array
const collabData: BrandCollab[] = [
  { name: "BAHU PALACE", logoSrc: "/logo-1.png", underline: true },
  { name: "Beauty Talk", logoSrc: "/logo-2.png", bold: true, underline: true },
  { name: "Evanthe", logoSrc: "/logo-3.png" },
  { name: "Ever Beauty", logoSrc: "/logo-4.png", textColor: "text-purple-700", bold: true },
  { name: "GAYRAA", logoSrc: "/logo-5.png", bold: true, underline: true },
  { name: "KOSME", logoSrc: "/logo-6.png", bold: true, textColor: "text-blue-800", underline: true },
  { name: "Laviscart", logoSrc: "/logo-7.png", textColor: "text-purple-600" },
  { name: "STYLE TALK", logoSrc: "/logo-8.png", bold: true, underline: true },
  { name: "tira", logoSrc: "/logo-9.png", textColor: "text-red-600" },
  { name: "Vaku Luxos", logoSrc: "/logo-10.png", bold: true, underline: true },
];

// 3. Component
export default function Collab() {
  return (
    <section className="w-full min-h-screen bg-pink-100 py-16 px-6 flex flex-col justify-center items-center max-md:mt-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-wide">
        OTHER COLLABORATIONS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 max-w-6xl w-full mx-auto">
        {collabData.map((brand, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={brand.logoSrc}
                alt={brand.name}
                fill
                className="object-contain rounded-full"
              />
            </div>
            <span
              className={`text-sm sm:text-base ${brand.textColor || ""} ${
                brand.bold ? "font-bold" : "font-medium"
              } ${brand.underline ? "underline" : ""}`}
            >
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
