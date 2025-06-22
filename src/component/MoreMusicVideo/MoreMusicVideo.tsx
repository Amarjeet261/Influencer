// components/OtherMusicVideo.tsx
import { videoData } from "@/utils/data/MoreMusicVideo";
import Image from "next/image";

export default function MoreMusicVideo() {
  return (
    <section className="bg-[url('/background.png')] bg-cover bg-center py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-red-600 mb-12">Other Music Video</h2>
        <div className="flex flex-col md:flex-row items-start gap-10 text-left">
          <div className="w-full md:w-1/2 relative aspect-video">
            <Image
              src={videoData.image}
              alt={videoData.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-5xl font-black">{videoData.title}</h3>
            <h4 className="text-2xl font-semibold">BY {videoData.by}</h4>
            <p className="whitespace-pre-line text-lg">{videoData.description}</p>
            <a
              href={videoData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-800 font-semibold underline"
            >
              CLICK HERE
            </a>
            <p className="text-black font-medium">to watch the video song</p>
          </div>
        </div>
      </div>
    </section>
  );
}
