import React from "react";
import { FaTaxi, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const HowWorks = () => {
  const working = [
    {
      icon: <FaTaxi className="text-3xl" />,
      title: "Book in Just 2 Taps",
      description: "Book instantly with AIS—just 2 taps for seamless, fast, and smart reservations anytime, anywhere",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Track Your Driver",
      description: "Track your driver in real-time with AIS for accurate ETAs and seamless journeys.",
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Pick & Arrive Safely",
      description: "Ensure safe pickups & arrivals with AIS-powered real-time tracking and verified drivers",
    },
  ];

  return (
    <div className="container mx-auto my-28 px-4">
      <div className="text-center mb-16">
        <p className="uppercase text-gray-600 tracking-wider text-sm mb-3">Order Taxi Online</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h1>
        <div className="w-20 h-1 bg-[#FFEE02] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {working.map((item, index) => (
          <div 
            key={index} 
            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Background shape with hover effect */}
            <div 
              className="absolute top-0 right-0 w-full h-full bg-[#FFED4D] opacity-20 group-hover:opacity-30"
              style={{ clipPath: "polygon(100% 0, 100% 65%, 35% 100%, 0 100%, 0 0)" }}
            ></div>
            
            {/* Number indicator */}
            <div className="absolute top-4 left-4 text-4xl font-bold text-gray-500 opacity-80">
              0{index + 1}
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 w-20 h-20 rounded-full bg-[#FFEE02] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#FFEE02] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;