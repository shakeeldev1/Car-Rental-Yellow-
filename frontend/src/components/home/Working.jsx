import React from 'react';
import locationTic from '../../assets/home/location-tick.png';
import calendar from '../../assets/home/calendar.png';
import car from '../../assets/home/car.png';
import { motion } from 'framer-motion';

const Working = () => {
  const steps = [
    {
      icon: locationTic,
      title: "Choose Location",
      description: "Select your location and find the best car for you."
    },
    {
      icon: calendar,
      title: "Pick-up Date",
      description: "Select your pick-up date and time to book your car."
    },
    {
      icon: car,
      title: "Book Your Car",
      description: "Book your car and we will deliver it directly to you."
    }
  ];

  return (
    <div className="mt-16 px-6 md:px-12 lg:px-20 text-center">
      {/* Tagline */}
      <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full w-fit mx-auto font-semibold text-sm tracking-wide shadow-sm">
        HOW IT WORKS
      </p>

      {/* Title */}
      <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mt-4 leading-tight">
        Rent With These <span className="text-blue-700">3 Easy Steps</span>
      </h1>

      {/* Steps */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
          >
            {/* Step Number */}
            <div className="absolute -top-5 bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg">
              {index + 1}
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="bg-blue-100 p-6 rounded-full shadow-inner"
            >
              <img src={step.icon} className="w-16 h-16" alt={step.title} />
            </motion.div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 mt-6">{step.title}</h2>

            {/* Description */}
            <p className="text-gray-600 mt-3">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Working;
