import React from "react";
import service5 from "../../assets/home/service5-1.jpg";
import service6 from "../../assets/home/service5-2.jpg";
import service7 from "../../assets/home/service5-3.jpg";

const Services = () => {
  const services = [
    {
      title: "Business Transfer",
      description:
        "Secure and efficient business transfers with AIS automation, ensuring smooth ownership transitions and compliance.",
      image: service5,
    },
    {
      title: "Online Booking",
      description:
        "AIS-powered online booking ensures fast, secure, and automated reservations for seamless transactions.",
      image: service6,
    },
    {
      title: "City Transport",
      description:
        "Optimize city transport with AIS-driven smart routing, real-time tracking, and efficient fleet management.",
      image: service7,
    },
  ];
  return (
    <div className="bg-[#F5F5F5] text-center mt-20 py-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-4">
          <p className="text-lg text-amber-500 font-semibold tracking-wide animate-pulse">
            LATEST SERVICES
          </p>
          <h1 className="text-3xl md:text-5xl font-bold w-full md:w-[50%] mx-auto leading-tight text-gray-900 relative inline-block">
            Check Out Our All-Time Best Services

          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {services.map((data,index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 rounded-lg"
            >
              {/* Background shape with animation */}
              <div
                className="bg-[#ffee02cd] group-hover:bg-black transition-all duration-500 w-full h-[220px] absolute top-0"
                style={{
                  clipPath: "polygon(0 17%, 100% 0, 100% 78%, 0% 100%)",
                }}
              ></div>
              
              {/* Image with shine effect */}
              <div className="relative overflow-hidden">
                <img
                  src={data.image}
                  alt="Service"
                  className="h-60 w-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{
                    clipPath: "polygon(0 19%, 100% 0, 100% 79%, 0% 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content with animation */}
              <div className="p-6 text-center relative z-10">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {data.title}
                  </h2>
                  <div className="w-12 h-1 bg-amber-400 mx-auto mt-2 group-hover:bg-gray-800 transition-colors duration-300"></div>
                </div>
                <p className="text-gray-700 group-hover:text-gray-600 transition-colors duration-300">
                  {data.description}
                </p>
                <button className="mt-6 cursor-pointer bg-amber-400 hover:bg-amber-500 text-white py-3 px-8 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-400/30">
                  Learn More 
                </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;