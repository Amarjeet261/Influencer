import Image from "next/image";

export default function ModelProfile() {
  interface ModelInfo {
    name: string;
    imageSrc: string;
    stats: {
      label: string;
      value: string;
    }[];
  }

  const modelData: ModelInfo = {
    name: "AKSHITA RAWAT",
    imageSrc: "/akshita.jpg",
    stats: [
      { label: "HEIGHT", value: `5'2"` },
      { label: "SHOES", value: "US 5.5" },
      { label: "BUST", value: "34 Inch" },
      { label: "DRESS", value: "US 4 - US 6" },
      { label: "WAIST", value: "28.5 Inch" },
      { label: "HAIR", value: "DARK BROWN" },
      { label: "HIPS", value: "35" },
      { label: "EYES", value: "BROWN" },
    ],
  };

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-[500px] w-[500px] rounded-lg overflow-hidden shadow-md max-w-md mx-auto">
            <Image
              src={modelData.imageSrc}
              alt={modelData.name}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Info */}
        <div className="w-full max-lg:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold text-[#561c1c] mb-10 text-center lg:text-left tracking-wide">
            {modelData.name}
          </h2>

          <div className="grid grid-cols-2 gap-y-6 gap-x-10 border-t border-gray-300 pt-6 text-base">
            {modelData.stats.map(({ label, value }) => (
              <div key={label}>
                <p className="font-semibold tracking-wide text-gray-800 uppercase">{label}</p>
                <p className="text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
