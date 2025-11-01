import React from "react";
import { Link } from "react-router-dom";
import { useGetAllServicesQuery } from "../../redux/slices/ServiceApi";
import { FaUser, FaCarSide, FaSnowflake, FaDoorOpen, FaStar } from "react-icons/fa";

const PopularServices = () => {
  const { data, isLoading, error } = useGetAllServicesQuery();
  const services = Array.isArray(data?.services) ? data.services.slice(0, 4) : [];

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return (
    <div className="text-center py-10">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
        Failed to load services. Please try again later.
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-amber-500 bg-amber-50 rounded-full mb-4 uppercase tracking-wider">
            Popular Rental Deals
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Most Popular <span className="text-[#C8BF40]">Rental Deals</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Experience our top-rated vehicles with exceptional comfort and reliability
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-2/5 relative">
                  <img
                    src={service.servicePic || "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
                    alt={service.serviceName}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded-full flex items-center text-xs">
                    <FaStar className="text-[#FFEE02] mr-1" />
                    {service.rating?.toFixed(1) || '4.8'}
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.serviceName}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full mb-3">
                      {service.serviceCategory || 'Standard'}
                    </span>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center text-gray-700">
                        <FaUser className="w-4 h-4 mr-2 text-[#C8BF40]" />
                        <span className="text-sm">{service.passengers || "4"} Seats</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <FaCarSide className="w-4 h-4 mr-2 text-[#C8BF40]" />
                        <span className="text-sm">Automatic</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <FaSnowflake className="w-4 h-4 mr-2 text-[#C8BF40]" />
                        <span className="text-sm">A/C</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <FaDoorOpen className="w-4 h-4 mr-2 text-[#C8BF40]" />
                        <span className="text-sm">{service.doors || "4"} Doors</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Daily Rate</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ${service.price}
                          <span className="text-sm font-normal text-gray-500">/km</span>
                        </p>
                      </div>
                      <Link
                        to={`/booking/${service._id}`}
                        state={{ service }}
                        className="bg-[#FFEE02] hover:bg-[#C8BF40] text-gray-900 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center"
                      >
                        Book Now
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            View All Vehicles
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;