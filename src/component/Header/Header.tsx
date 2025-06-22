import Image from "next/image";

interface HeaderData {
  roleLabel: string;
  firstName: string;
  lastName: string;
  roles: string[];
  imageSrc: string;
  imageAlt: string;
}

const headerData: HeaderData = {
  roleLabel: "Influencer",
  firstName: "Akshita",
  lastName: "Rawat",
  roles: ["Content Creator", "Vlogger", "Influencer"],
  imageSrc: "/header-img.png",
  imageAlt: "Akshita Rawat",
};

export default function Header() {
  return (
    <header className="min-h-screen w-full flex items-center justify-center bg-[url('/header-bg.jpg')] bg-center bg-cover  py-30 max-sm:py-20">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 w-[85%] px-4 max-md:px-6 max-sm:px-4 py-8 max-sm:py-4 gap-8">

        {/* Left Section - Text */}
        <div className="flex flex-col justify-center px-4 max-lg:px-2">
          <span className="uppercase text-[35px] max-md:text-2xl max-sm:text-xl text-black mb-2 font-semibold">
            {headerData.roleLabel}
          </span>

          <h1 className="text-9xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl font-serif font-bold text-orange-700 leading-tight">
            {headerData.firstName}
          </h1>

          <h2 className="text-8xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-serif text-orange-600 mb-8 max-sm:mb-6">
            {headerData.lastName}
          </h2>

          <div className="space-y-4 mt-6 text-[20px] max-sm:text-base text-gray-900">
            {headerData.roles.map((role) => (
              <p
                key={role}
                className="border-b w-fit border-black uppercase font-medium"
              >
                {role}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center items-center px-4 py-4 max-sm:px-2 max-sm:py-2 relative">
          <div className="relative w-[400px] h-[500px] max-lg:w-[350px] max-lg:h-[450px] max-md:w-[300px] max-md:h-[400px] max-sm:w-[250px] max-sm:h-[350px]">
            <Image
              src={headerData.imageSrc}
              alt={headerData.imageAlt}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
