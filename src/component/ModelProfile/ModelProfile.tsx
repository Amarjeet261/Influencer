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
    <section className="w-full min-h-[650px] flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-6xl flex gap-12 max-lg:flex-col max-lg:items-center">

        {/* Image */}
        <div className="w-full max-lg:w-auto flex justify-center">
          <div className="relative w-[300px] h-[400px] max-md:w-[250px] max-md:h-[350px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={modelData.imageSrc}
              alt={modelData.name}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Info */}
        <div className="w-full max-lg:w-full text-center max-lg:text-center max-lg:mt-6">
          <h2 className="text-5xl font-bold text-[#561c1c] mb-8 tracking-wide max-md:text-3xl">
            {modelData.name}
          </h2>

          <div className="grid grid-cols-2 gap-y-6 gap-x-10 border-t border-gray-300 pt-6 text-base max-sm:grid-cols-2">
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
