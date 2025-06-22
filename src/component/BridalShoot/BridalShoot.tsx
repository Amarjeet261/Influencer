import Image from "next/image";

export default function BridalShoot() {
interface ImageData {
  image: string;
}

const images: ImageData[] = [
  { image: "/semi-bridal-1.png" },
  { image: "/semi-bridal-2.png" },
  { image: "/semi-bridal-3.png" },
  { image: "/semi-bridal-4.png" },
];



  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center  bg-[url('/semi-bridal-bg.jpg')] bg-cover bg-center py-16 px-4 md:px-12">
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-y-6 gap-x-20 place-items-center">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-[240px] h-[360px] max-lg:w-[200px] max-lg:h-[320px] max-sm:w-[180px] max-sm:h-[280px] rounded-xl overflow-hidden"
          >
            <Image
              src={img.image}
              alt={`Bridal ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <h2 className="text-6xl max-sm:text-2xl max-md:text-3xl font-bold tracking-wide text-[#511d1d] uppercase">
          Semi-Bridal Shoot
        </h2>
      </div>
    </section>
  );
}
