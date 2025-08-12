import React from "react";
import { motion } from "framer-motion";
import Audi from "../../assets/home/Audi.png";
import Vector from "../../assets/home/Vector.png";
import wallet from "../../assets/home/wallet.png";
import userTick from "../../assets/home/user-tick.png";
import support from "../../assets/home/24-support.png";
import messages from "../../assets/home/messages-2.png";

const WhyUs = () => {
  const data = [
    {
      id: 1,
      image: wallet,
      title: "Best Price Guaranteed",
      des: "Find a lower price? We'll refund you 100% of the difference.",
    },
    {
      id: 2,
      image: userTick,
      title: "Experienced Drivers",
      des: "Don't have a driver? Don't worry, we have many experienced drivers for you.",
    },
    {
      id: 3,
      image: support,
      title: "24 Hour Car Delivery",
      des: "Book your car anytime, and we will deliver it directly to you.",
    },
    {
      id: 4,
      image: messages,
      title: "24/7 Technical Support",
      des: "Have a question? Contact RentCars support any time you have a problem.",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-14 mt-20 px-6 md:px-12 lg:px-16 p-10 items-center bg-[#F5F5F5]">
      {/* Left Section - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative md:w-1/2"
      >
        <img src={Vector} alt="Vector" className="w-full ms-8" />
        <motion.img
          src={Audi}
          alt="Audi"
          className="absolute z-10 top-1/2 transform -translate-y-1/2 w-full"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      {/* Right Section - Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2"
      >
        {/* Tagline */}
        <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full w-fit font-semibold text-sm shadow-sm">
          Why Choose Us
        </p>

        {/* Title */}
        <h1 className="text-4xl  font-bold text-gray-900 mt-4 leading-snug">
          We Offer The <span className="text-blue-700">Best Experience</span> With Our Rental Deals
        </h1>

        {/* Features List */}
        <div className="mt-10 flex flex-col gap-6">
          {data.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 bg-white"
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon */}
              <motion.div
                className="w-12 h-12 bg-blue-100 p-2 flex items-center justify-center rounded-lg"
                whileHover={{ rotate: 8 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>

              {/* Content */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                <p className="text-gray-600 mt-1">{item.des}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyUs;
