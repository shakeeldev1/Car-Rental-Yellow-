import React from "react";
import { FaCar, FaRoad, FaTrophy, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const CarRentalStats = () => {
  const stats = [
    {
      icon: <FaCar className="text-[#FFEE02]" size={30} />,
      value: "10+",
      label: "Years in Service",
    },
    {
      icon: <FaRoad className="text-[#FFEE02]" size={30} />,
      value: "50k+",
      label: "Trips Completed",
    },
    {
      icon: <FaTrophy className="text-[#FFEE02]" size={30} />,
      value: "25+",
      label: "Awards Won",
    },
    {
      icon: <FaSmile className="text-[#FFEE02]" size={30} />,
      value: "5k+",
      label: "Happy Customers",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className=" pt-16 px-4">
      <div className="max-w-7xl mx-auto">
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
              className=" flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className=" mb-4 p-4 bg-gray-900 rounded-full group-hover:text-gray-900 transition-colors duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#FFEE02] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-300 uppercase tracking-wider text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarRentalStats;