import Image from "next/image";

export default function BioSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 items-start">
        {/* Bio Text */}
        <div>
          <h3 className="uppercase text-sm font-semibold text-black mb-4 max-md:text-2xl">Bio</h3>
          <p className="text-fuchsia-700 text-2xl max-md:text-xl leading-relaxed font-medium">
            I'm passionate about creating engaging and inspiring content that connects with my audience.
            From Content Creator to Vlogger and everything in between, I strive to deliver valuable and entertaining
            experiences. I love exploring the world of Beauty, Fashion, Dance, Acting and lifestyle and sharing my
            unique perspective with you. Join me on this journey as I discover new trends, learn together, or simply
            have fun!
          </p>
        </div>

        {/* Images */}
        <div className="flex gap-4 justify-evenly max-md:items-start">
          <div className="relative w-[200px] h-[300px] max-md:w-32 max-md:h-52">
            <Image
              src="/bio-1.jpg"
              alt="Shooting Behind the Scenes"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative  w-[200px] h-[300px] max-md:w-32 max-md:h-52 -ml-4 max-md:ml-0">
            <Image
              src="/bio-2.png" 
              alt="Camera Screen Shot"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Social Stats */}
      <div className="mt-12 flex justify-center items-center flex-col gap-6 max-sm:gap-4">
        {/* Instagram */}
        <div className="flex items-center gap-4 border-b-2 border-black pb-4">
          <Image src="/insta-logo.png" alt="Instagram" width={90} height={90} />
          <span className="text-4xl font-bold">200k+ <span className="font-normal">Followers</span></span>
        </div>
        {/* YouTube */}
        <div className="flex items-center gap-4">
          <Image src="/youtube-logo.png" alt="YouTube" width={90} height={90} />
          <span className="text-4xl font-bold">250k+ <span className="font-normal">Subscribers</span></span>
        </div>
      </div>
    </section>
  );
}
