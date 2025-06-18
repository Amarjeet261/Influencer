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
    <header className="min-h-screen w-full flex items-center justify-center bg-[url('/header-bg.jpg')] bg-center bg-cover">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 w-[85%] px-4 md:px-12 py-8 gap-4">
        {/* Left Section - Text Content */}
        <div className="flex flex-col justify-center px-4 md:px-12">
          <span className="uppercase text-[35px] text-[#000] mb-2 font-semibold">
            {headerData.roleLabel}
          </span>
          <h1 className="text-9xl max-md:text-5xl max-sm:text-6xl font-serif font-bold text-orange-700 leading-none">
            {headerData.firstName}
          </h1>
          <h2 className="text-8xl max-md:text-4xl max-sm:text-5xl font-serif text-orange-600 mb-10">
            {headerData.lastName}
          </h2>

          <div className="space-y-4 mt-6 text-[20px] max-sm:text-[20px] text-gray-900 ml-70 max-sm:ml-20 ">
            {headerData.roles.map((role) => (
              <p
                key={role}
                className="border-b w-fit border-black uppercase font-medium "
              >
                {role}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center items-center px-4 py-4">
          <Image
            src={headerData.imageSrc}
            alt={headerData.imageAlt}
            width={400}
            height={600}
            className="object-cover w-[400px] h-[500px] max-md:w-[300px] max-md:h-[400px] max-sm:w-[250px] max-sm:h-[350px]"
          />
        </div>
      </div>
    </header>
  );
}
