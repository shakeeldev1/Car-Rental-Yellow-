import React from "react";
import { FaCar, FaRoad, FaTrophy, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const CarRentalStats = () => {
  const stats = [
    {
      icon: <FaCar size={30} />,
      value: "10+",
      label: "Years in Service",
      description: "Decade of trusted service excellence"
    },
    {
      icon: <FaRoad size={30} />,
      value: "50k+",
      label: "Trips Completed",
      description: "Smooth journeys across the country"
    },
    {
      icon: <FaTrophy size={30} />,
      value: "25+",
      label: "Awards Won",
      description: "Recognized for outstanding service"
    },
    {
      icon: <FaSmile size={30} />,
      value: "5k+",
      label: "Happy Customers",
      description: "Satisfied clients and counting"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      },
    },
  };

  return (
    <section className="py-10 px-4 pt-30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our <span className="text-[#FFEE02]">Achievements</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Numbers that showcase our commitment to excellence in car rental services
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-xl shadow-2xl hover:shadow-[#FFEE02]/20 hover:shadow-lg transition-all duration-500 group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(255, 238, 2, 0.1)"
              }}
            >
              <div className="mb-6 p-5 bg-gray-900 rounded-full group-hover:bg-[#FFEE02] group-hover:scale-110 transition-all duration-300">
                <div className="text-[#FFEE02] group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-4xl font-bold text-[#FFEE02] mb-3">
                {stat.value}
              </h3>
              <p className="text-white uppercase tracking-wider text-lg font-semibold mb-3">
                {stat.label}
              </p>
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarRentalStats;