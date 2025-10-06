import React from "react";
import { FaCar, FaRoad, FaTrophy, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const CarRentalStats = () => {
  const stats = [
    {
      icon: <FaCar size={15} />,
      value: "10+",
      label: "Years in Service",
      description: `A decade of unmatched dedication in the car rental industry. 
We’ve built trust with thousands of clients nationwide. 
From city commutes to long road trips, we’ve seen it all. 
Every journey backed by our passion for excellence.`
    },
    {
      icon: <FaRoad size={15} />,
      value: "50k+",
      label: "Trips Completed",
      description: `Over fifty thousand trips successfully completed. 
Every road, every mile, handled with precision and care. 
From bustling cities to scenic countryside escapes. 
Our cars have carried stories across the nation.`
    },
    {
      icon: <FaTrophy size={15} />,
      value: "25+",
      label: "Awards Won",
      description: `Proud recipients of industry-leading recognitions. 
Honored for service quality, safety, and innovation. 
Each award represents the trust of our customers. 
Striving always to raise the standard of excellence.`
    },
    {
      icon: <FaSmile size={15} />,
      value: "5k+",
      label: "Happy Customers",
      description: `Thousands of customers choose us with confidence. 
From families on holiday to executives on business. 
Each smile is proof of our customer-first approach. 
We turn every ride into a memorable experience.`
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
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our <span className="text-[#cec20fd5]">Achievements</span>
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
              className="flex flex-col hover:bg-[#FFEE02] hover:text-black overflow-hidden  relative p-8 py-4 rounded-xl shadow-2xl hover:shadow-[#FFEE02]/20 hover:shadow-lg transition-all duration-500 group"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(255, 238, 2, 0.1)"
              }}
            >
              <div className="mb-6 p-5 group-hover:transform group-hover:-translate-x-5 group-hover:translate-y-0 border-2 absolute right-0 h-10 w-10 flex justify-center items-center bg-gray-900 rounded-full group-hover:border group-hover:bg-black group-hover:scale-110 transition-all transform translate-x-10 -translate-y-18 duration-300">
                <div className="text-[#FFEE02]  group-hover:text-white transition-colors duration-300">
                  <span className=" text-lg">{stat.icon}</span>
                </div>
              </div>

              <p className="text-black group-hover:text-black sm:mt-10 uppercase tracking-wider text-lg font-semibold mb-3">
                {stat.label}
              </p>
              <p className="text-gray-400 group-hover:text-black text-justify text-sm">
                {stat.description}
              </p>
              <div className="w-full flex justify-start items-center gap-2 sm:w-6/12 ">
                <hr className="h-1 group-hover:transform group-hover:translate-x-9 transition-all ease-in-out delay-75 w-[40%] bg-black group-hover:bg-black" />
                <h3 className="group-hover:transform group-hover:-translate-x-16 text-xl mt-2 font-bold  mb-3 transition-all ease-in-out delay-75">
                  {stat.value}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarRentalStats;