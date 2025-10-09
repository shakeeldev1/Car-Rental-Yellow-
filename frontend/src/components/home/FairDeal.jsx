import React from 'react'
import { FaUserFriends, FaClock, FaCarSide, FaGlobeEurope, FaShieldAlt, FaStar } from "react-icons/fa";

export default function FairDeal() {
    const serviceHighlights = {
        title: "Premium Coach, Minibus & Van Hire Services Across the UK",
        description:
            "Experience exceptional transport services where comfort, safety, and reliability are at the heart of every journey. Our professional team ensures seamless travel solutions tailored to your needs.",
        features: [
            {
                id: 1,
                icon: <FaUserFriends className="w-4 h-4" />,
                text: "Private and group travel solutions for weddings, tours, school trips, corporate events, and airport transfers.",
            },
            {
                id: 2,
                icon: <FaClock className="w-4 h-4" />,
                text: "24/7 customer support and flexible booking options to suit your schedule.",
            },
            {
                id: 3,
                icon: <FaCarSide className="w-4 h-4" />,
                text: "Modern, well-maintained vehicles with professional, licensed drivers.",
            },
            {
                id: 4,
                icon: <FaGlobeEurope className="w-4 h-4" />,
                text: "Comprehensive nationwide coverage with trusted service across the UK.",
            },
        ],
      
    };

    return (
        <div className='w-full py-16 bg-gradient-to-br from-white to-gray-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 bg-[#FFEE02] text-black px-4 py-2 rounded-full text-sm font-medium mb-4'>
                        <FaStar className="w-4 h-4" />
                        <span>Trusted Transport Solutions</span>
                    </div>
                    <h1 className='text-3xl md:text-4xl font-bold text-black mb-4'>
                        Travel Together with{' '}
                        <span className='text-[#FFEE02]'>Confidence</span>
                    </h1>
                    <div className='w-24 h-1 bg-[#FFEE02] mx-auto'></div>
                </div>

                <div className='flex flex-col lg:flex-row gap-12 items-center'>
                    {/* Images Section */}
                    <div className='w-full lg:w-1/2 relative'>
                        <div className='relative h-[500px] lg:h-[600px]'>
                            {/* Main Image */}
                            <div className='absolute top-0 left-0  sm:w-3/5 sm:h-3/5 z-10'>
                                <img 
                                    src="https://img.freepik.com/premium-photo/portrait-business-woman-near-luxury-minivan-taxi_506452-23577.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80" 
                                    alt="Professional transport service" 
                                    className='w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-[#FFEE02]'
                                />
                                <div className='absolute -bottom-6 hidden sm:flex -right-6 bg-[#FFEE02] text-black p-4 rounded-2xl shadow-lg z-20'>
                                    <div className='text-center'>
                                        <FaShieldAlt className="w-8 h-8 mx-auto mb-2" />
                                        <span className='font-bold text-sm'>Safe & Reliable</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Secondary Image */}
                            <div className='absolute bottom-0 hidden sm:flex right-0 w-3/5 h-1/2'>
                                <img 
                                    src="https://kingdomcoachhire.com/wp-content/uploads/2025/09/wmremove-transformed.jpeg" 
                                    alt="Luxury vehicle interior" 
                                    className='w-full h-full object-cover rounded-2xl shadow-xl border-4 border-[#FFEE02]'
                                />
                            </div>
                            
                            {/* Background Decoration */}
                            <div className='absolute -bottom-8 -left-8 w-32 h-32 bg-[#FFEE02]rounded-full opacity-20'></div>
                            <div className='absolute -top-8 -right-8 w-24 h-24 bg-[#FFEE02] rounded-full opacity-20'></div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='w-full lg:w-1/2 px-4'>
                        <div className='max-w-2xl'>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                {serviceHighlights.title}
                            </h2>
                            <p className="text-md text-gray-700 mb-2 leading-relaxed">
                                {serviceHighlights.description}
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1  ">
                                {serviceHighlights.features.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className='flex-shrink-0 w-8 h-8 bg-[#FFEE02] rounded-lg flex items-center justify-center text-black'>
                                            {item.icon}
                                        </div>
                                        <p className="text-gray-800 text-base leading-relaxed font-medium">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}