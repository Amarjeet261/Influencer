// components/MusicVideoSection.tsx
import Image from "next/image";
export interface MusicVideo {
  title: string;
  image: string;
  link: string;
  color: string;
}


const musicVideos: MusicVideo[] = [
  {
    title: "BAGESHWAR SHEHRA",
    image: "/music-1.jpg",
    link: "https://www.youtube.com/watch?v=your_video_1",
    color: "text-orange-700",
  },
  {
    title: "MERI RANJANA",
    image: "/music-2.jpg",
    link: "https://www.youtube.com/watch?v=your_video_2",
    color: "text-fuchsia-700",
  },
];

export default function MusicVideoSection() {
  return (
    <section className="bg-[url('/background.png')] bg-cover bg-center py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div>
          <h2 className="text-5xl font-bold text-[#561c1c]">Music Video</h2>
          <p className="uppercase tracking-widest font-semibold text-black mt-2">
            Uttarakhand Industry
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
          {musicVideos.map((video) => (
            <div key={video.title} className="w-full md:w-1/2">
              <div className="relative aspect-video mb-6">
                <Image
                  src={video.image}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3
                className={`text-xl font-bold uppercase tracking-wide ${video.color}`}
              >
                {video.title}
              </h3>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-lg mt-2 font-semibold underline ${video.color}`}
              >
                CLICK HERE
              </a>
              <p className="uppercase font-bold text-black mt-1">
                To Watch The Video Song
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
