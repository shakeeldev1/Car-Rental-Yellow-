import React from "react";
import service5 from "../../assets/home/service5-1.jpg";
import service6 from "../../assets/home/service5-2.jpg";
import service7 from "../../assets/home/service5-3.jpg";
import Button from "../Button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Coach & Minibus Hire",
      subtitle: 'Online Booking',
      description:
        "Comfortable and reliable coach and minibus hire across the UK, ideal for group tours, weddings, and long-distance travel.",
      image: service5,
    },
    {
      title: "Airport & Corporate Transfers", subtitle: 'Online Booking',
      description:
        "Professional transfer services to and from all major UK airports with punctual, comfortable, and stress-free travel.",
      image: service6,
    },
    {
      title: "School & Event Transport", subtitle: 'Online Booking',
      description:
        "Safe and dependable transport solutions for schools, sports events, and private functions across the UK.",
      image: service7,
    },
  ];

  return (
    <div className="bg-[#F5F5F5] text-center py-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-4">
          <p className="text-lg text-amber-500 font-semibold tracking-wide animate-pulse">
            OUR SERVICES
          </p>
          <h1 className="text-3xl md:text-5xl font-bold w-full md:w-[60%] mx-auto leading-tight text-gray-900 relative inline-block">
            Reliable Coach, Minibus & Van Hire Across the UK
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg w-full md:w-[70%] mx-auto">
            Private and group transport solutions for weddings, tours, schools, corporate events, airport transfers, and more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {services.map((data, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-200"
            >
              {/* Header gradient */}
              <div className="relative h-2 bg-gradient-to-r from-[#FFEE02] to-black"></div>

              {/* Image */}
              <div className="p-6 pb-0">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                    {data.title}
                  </h2>
                  <div className="w-8 h-8 bg-[#FFEE02] rounded-full flex items-center justify-center transform group-hover:rotate-90 transition-transform duration-500">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
                <h2 className="text-start mb-2">{data.subtitle}</h2>
                <p className="text-gray-600 text-sm text-start leading-relaxed mb-6">
                  {data.description}
                </p>
                <Link to="/services">
                  <Button text="Learn More →" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
