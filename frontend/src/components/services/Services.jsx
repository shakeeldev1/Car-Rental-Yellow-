import React, { useState } from "react";
import { MdMenuOpen, MdOutlineElectricBike } from "react-icons/md";
import { FaCar, FaTaxi, FaSearch, FaUser, FaCarSide, FaSnowflake, FaDoorOpen, FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAllServicesQuery } from "../../redux/slices/ServiceApi";

const OurServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error } = useGetAllServicesQuery();

  const services = data && Array.isArray(data.services) ? data.services : [];

  if (isLoading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFEE02]"></div>
    </div>
  );

  if (error) return (
    <div className="text-center py-10">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
        Failed to load services. Please try again later.
      </div>
    </div>
  );

  // Get unique categories from services data
  const uniqueCategories = [...new Set(services.map(service =>
    service.serviceCategory ? service.serviceCategory.toLowerCase() : 'standard'
  ))];

  // Map categories to icons
  const categoryIcons = {
    'bike': <MdOutlineElectricBike className="text-lg" />,
    'taxi': <FaTaxi className="text-lg" />,
    'car': <FaCar className="text-lg" />,
    'cars': <FaCar className="text-lg" />,
    'standard': <FaCar className="text-lg" />,
    // Add more mappings as needed
  };

  // Create categories array with "All" first
  const categories = [
    { name: "All", icon: <MdMenuOpen className="text-lg" /> }
  ].concat(
    uniqueCategories.map(category => ({
      name: category.charAt(0).toUpperCase() + category.slice(1),
      icon: categoryIcons[category] || <FaCar className="text-lg" />
    }))
  );

  const filteredDeals = services.filter((service) =>
    (selectedCategory === "All" ||
      (service.serviceCategory && service.serviceCategory.toLowerCase() === selectedCategory.toLowerCase())) &&
    service.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our wide range of transportation services tailored to your needs
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search services..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFEE02] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search services"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            {categories.map(({ name, icon }) => (
              <button
                key={name}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full shadow-sm cursor-pointer transition-all duration-200 ${selectedCategory.toLowerCase() === name.toLowerCase()
                  ? "bg-[#FFEE02] text-gray-900 font-medium shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                onClick={() => setSelectedCategory(name)}
              >
                <span className="text-gray-700">{icon}</span>
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredDeals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDeals.map((service) => (
              <div
                key={service._id}
                className="group bg-white rounded-2xl sm:flex shadow-md overflow-hidden transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 relative"
              >
                {/* Service Image */}
                <div className="relative h-full sm:w-[40%] w-full overflow-hidden">
                  <img
                    src={
                      service.servicePic ||
                      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    }
                    alt={service.serviceName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center shadow-md">
                    <FaStar className="text-[#FFEE02] mr-1" />
                    4.8
                  </div>

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Service Details */}
                <div className="p-6 sm:w-[60%] w-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                        {service.serviceName}
                      </h2>
                      <span className="bg-[#FFEE02]/20 text-black text-xs font-semibold px-2.5 py-0.5 rounded uppercase">
                        {service.serviceCategory || "Standard"}
                      </span>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 my-4 text-gray-700">
                      <div className="flex items-center">
                        <FaUser className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm">{service.passengers || "4"} seats</span>
                      </div>
                      <div className="flex items-center">
                        <FaCarSide className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm">Automatic</span>
                      </div>
                      <div className="flex items-center">
                        <FaSnowflake className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm">A/C</span>
                      </div>
                      <div className="flex items-center">
                        <FaDoorOpen className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm">{service.doors || "4"} doors</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="mt-6 w-full pt-4 border-t border-gray-200 flex flex-wrap gap-2 items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">STARTING FROM</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${service.price}
                        <span className="text-sm font-normal text-gray-500">/km</span>
                      </p>
                    </div>
                    <Link
                      to={`/booking/${service._id}`}
                      state={{ service }}
                      className="bg-[#FFEE02] hover:bg-black hover:text-[#FFEE02] text-gray-900 font-semibold py-2 px-5 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                    >
                      Book Now
                        <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaSearch className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-[#FFEE02] hover:text-[#e6d600] font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurServices;