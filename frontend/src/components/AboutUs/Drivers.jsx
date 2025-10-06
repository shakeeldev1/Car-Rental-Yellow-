import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa6";

const driversData = [
  {
    name: "Tricia Gibney",
    role: "Lead Driver",
    phone: "(+380) 50 318 47 07",
    image: "/src/assets/about/team1-1.jpg",
  },
  {
    name: "Thomas Walker",
    role: "Luxury Transport Specialist",
    phone: "(+380) 51 234 56 78",
    image: "/src/assets/about/team1-2.jpg",
  },
  {
    name: "Roman Morko",
    role: "Executive Chauffeur",
    phone: "(+380) 52 987 65 43",
    image: "/src/assets/about/team1-3.jpg",
  },
];

const Drivers = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-wider text-sm text-[#FFEE02] font-medium mb-2">
          Expert Team
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Meet Our Drivers
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional drivers ensuring your journey is safe and comfortable.
        </p>
      </div>

      {/* Drivers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {driversData.map((driver, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={driver.image}
                alt={driver.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              
              {/* Social Icons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                {[FaLinkedinIn, FaFacebook, FaTwitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 bg-white/90 rounded-full hover:bg-[#FFEE02] transition-colors">
                    <Icon className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 relative">
              {/* Background Accent */}
              <div className="absolute -top-6 left-6 w-12 h-12 bg-[#FFEE02] rounded-full transform group-hover:scale-150 transition-transform duration-500 opacity-20" />
              
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {driver.name}
                </h3>
                <p className="text-[#FFEE02] font-medium mb-4">
                  {driver.role}
                </p>
                
                {/* Phone */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group-hover:bg-[#FFEE02]/10 transition-colors">
                  <div className="p-2 bg-[#FFEE02] rounded-lg">
                    <IoPhonePortraitOutline className="w-4 h-4 text-gray-900" />
                  </div>
                  <a 
                    href={`tel:${driver.phone.replace(/\D/g, '')}`}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {driver.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drivers;