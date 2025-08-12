import { IoPhonePortraitOutline } from "react-icons/io5";
import team1 from "../../assets/about/team1-1.jpg";
import team2 from "../../assets/about/team1-2.jpg";
import team3 from "../../assets/about/team1-3.jpg";
import { FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa6";

const driversData = [
  {
    name: "Tricia Gibney",
    role: "President, Manager",
    phone: "(+380) 50 318 47 07",
    image: team1,
  },
  {
    name: "Thomas Walker",
    role: "President, Manager",
    phone: "(+380) 51 234 56 78",
    image: team2,
  },
  {
    name: "Roman Morko",
    role: "President, Manager",
    phone: "(+380) 52 987 65 43",
    image: team3,
  },
];

const Drivers = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 py-12">
      <div className="text-center mb-16">
        <p className="uppercase tracking-wider text-sm md:text-base text-[#FFEE02] font-medium mb-2">
          Our Expert Drivers
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
          Meet Our Drivers
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Professional drivers with years of experience to ensure your journey is safe and comfortable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {driversData.map((driver, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Background Shape with Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#FFEE02] opacity-20 group-hover:opacity-30 transition-all duration-700 transform rotate-45 scale-0 group-hover:scale-100 origin-center"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 p-6 h-full flex flex-col">
              {/* Driver Info */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#FFEE02] transition-colors duration-300">
                  {driver.name}
                </h2>
                <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                  {driver.role}
                </p>
              </div>

              {/* Phone Section */}
              <div className="mt-auto mb-8 flex items-center gap-3">
                <div className="p-2 bg-[#FFEE02] rounded-full transform group-hover:rotate-12 transition-transform duration-500">
                  <IoPhonePortraitOutline className="w-5 h-5 text-gray-900" />
                </div>
                <a 
                  href={`tel:${driver.phone.replace(/\D/g, '')}`}
                  className="font-medium text-gray-700 group-hover:text-gary-500 transition-colors duration-300 hover:underline"
                >
                  {driver.phone}
                </a>
              </div>

              {/* Driver Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <a href="#" className="p-2 bg-white rounded-full shadow-md hover:bg-[#FFEE02] hover:text-gray-900 transition-colors duration-300 transform hover:scale-110">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-white rounded-full shadow-md hover:bg-[#FFEE02] hover:text-gray-900 transition-colors duration-300 transform hover:scale-110">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-white rounded-full shadow-md hover:bg-[#FFEE02] hover:text-gray-900 transition-colors duration-300 transform hover:scale-110">
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drivers;