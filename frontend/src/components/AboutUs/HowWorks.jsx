import React from "react";

const HowWorks = () => {
  const working = [
    {
      img: "/src/assets/about/route.svg.png",
      title: "Book Your Ride",
      description:
        "Easily book your coach, minibus, or van online in just a few clicks—choose your destination, date, and vehicle type.",
    },
    {
      img: "/src/assets/about/vehicle.svg.png",
      title: "We Pick You Up",
      description:
        "Our professional drivers arrive on time for smooth, safe, and comfortable travel from start to finish.",
    },
    {
      img: "/src/assets/about/like.svg.png",
      title: "Enjoy a Safe Journey",
      description:
        "Relax and enjoy reliable, on-time transport across the UK with our licensed and trusted drivers.",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="uppercase text-gray-600 tracking-wider text-sm mb-3">
          Reliable Transport
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h1>
        <div className="w-20 h-1 bg-[#FFEE02] mx-auto"></div>
      </div>

      {/* How It Works Cards */}
      <div className="relative flex flex-col md:flex-row items-center justify-center md:gap-10 gap-16">
        {working.map((item, index) => (
          <React.Fragment key={index}>
            {/* Card */}
            <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-1/3 text-center">
              {/* Background Shape */}
              <div
                className="absolute top-0 right-0 w-full h-full bg-[#FFED4D] opacity-20 group-hover:opacity-30"
                style={{
                  clipPath:
                    "polygon(100% 0, 100% 65%, 35% 100%, 0 100%, 0 0)",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col ">
                <div className="mb-6 w-20 h-20 rounded-full flex transition-all duration-300">
                  <img src={item.img} alt={item.title} className="w-16 h-16" />
                </div>
                <h3 className="text-start text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-justify text-start text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Arrow (only between cards) */}
            {index < working.length - 1 && (
              <img
                src="/src/assets/about/arrow.png"
                alt="arrow"
                className="hidden md:block w-10 h-auto md:mx-2 lg:w-18"
              />
            )}
          </React.Fragment>
        ))}
      </div>

    
    </div>
  );
};

export default HowWorks;
