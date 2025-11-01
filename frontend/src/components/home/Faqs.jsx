import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
 
  const faqs = [
  {
    question: "How can I book a coach, minibus, or van?",
    answer:
      "Booking with us is simple and convenient. You can request a quote or make a reservation directly through our website by selecting your journey details, vehicle type, and travel date. Once confirmed, you’ll receive your booking details along with driver information via email or SMS. Our team is also available by phone for personalized assistance.",
  },
  {
    question: "Do you provide transport for weddings and events?",
    answer:
      "Yes, we specialize in private hire for weddings, corporate events, tours, and other occasions. Whether you need a luxury coach for guests or multiple minibuses for group transfers, we ensure a punctual, professional, and comfortable experience for every journey.",
  },
  {
    question: "What areas across the UK do you cover?",
    answer:
      "We offer nationwide coverage across the United Kingdom — including London, Manchester, Birmingham, Edinburgh, Glasgow, and beyond. No matter where your journey begins or ends, we’ll ensure reliable and timely transport service anywhere in the UK.",
  },

  {
    question: "Do you offer airport transfers?",
    answer:
      "Yes, we provide reliable airport transfers to and from all major UK airports including Heathrow, Gatwick, Manchester, and Edinburgh. Our drivers monitor flight times to ensure on-time pickup and drop-off, even in case of delays.",
  },
 
  {
    question: "Do you offer transport for schools or regular group travel?",
    answer:
      "Yes, we provide safe and dependable transport for schools, colleges, and organizations. Whether it’s daily commutes, sports trips, or educational tours, our vehicles are well-maintained, and all drivers follow strict safety protocols.",
  },
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Define variants for the answer container
  const answerVariants = {
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    collapsed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-10 px-4 overflow-x-hidden font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-0.5 bg-[#FFEE02]"></div>
            <span className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
              Got Questions?
            </span>
            <div className="w-12 h-0.5 bg-[#FFEE02]"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r 	from-black to-gray-800 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFEE02] to-amber-300 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Find quick answers to common questions about our taxi services,
            bookings, and policies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-4">
          {/* FAQ Items - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                // --- FIX: Move onClick to the parent motion.div
                onClick={() => toggleFAQ(index)} 
                layout
                className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 cursor-pointer ${openIndex === index
                    ? "border-[#FFEE02] bg-white shadow-2xl"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                  }`}
                whileHover={{ y: -2 }}
              >
                {/* Background Pattern */}
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${openIndex === index ? "opacity-5" : ""
                    }`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFEE02] rounded-full -translate-y-16 translate-x-16"></div>
                </div>

                {/* --- FIX: Changed from <button> to <div> since the parent handles the click */}
                <div
                  // Removed onClick from here
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <div className="flex items-start gap-4">
                    {/* Number Indicator */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${openIndex === index
                          ? "bg-[#FFEE02] text-black scale-110"
                          : "bg-gray-100 text-gray-600 group-hover:bg-[#FFEE02] group-hover:text-black"
                        }`}
                    >
                      {index + 1}
                    </div>

                    <h3
                      className={`text-lg font-semibold pr-8 transition-colors duration-300 ${openIndex === index
                          ? "text-black"
                          : "text-gray-800 group-hover:text-black"
                        }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Animated Icon */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${openIndex === index
                        ? "border-[#FFEE02] bg-[#FFEE02] text-black"
                        : "border-gray-300 text-gray-400 group-hover:border-[#FFEE02] group-hover:text-[#FFEE02]"
                      }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Answer Animation */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key={`answer-${index}`} // Unique key for AnimatePresence is required
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={answerVariants}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 ml-12 border-l-2 border-[#FFEE02]">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>


              </motion.div>
            ))}
          </motion.div>

          {/* Visual Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Main Floating Card */}
            <div className="relative z-10 w-80 h-96 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFEE02] to-amber-300"></div>

              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FFEE02] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg">Quick Support</h3>
                    <p className="text-gray-600 text-sm">We're here to help</p>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#FFEE02] rounded-full mt-2"></div>
                      <div className="bg-gray-100 rounded-2xl p-3 flex-1">
                        <div className="h-2 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-[#FFEE02] to-amber-300 rounded-2xl text-center">
                  <p className="text-black font-semibold">24/7 Customer Support</p>
                  <p className="text-black text-sm opacity-80">Always here to assist you</p>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFEE02] rounded-full opacity-10 -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-40 left-0 w-38 h-38 bg-black rounded-full opacity-5 translate-y-20 -translate-x-20"></div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-4 w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center"
            >
              <div className="w-8 h-8 bg-[#FFEE02] rounded-full"></div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 right-8 w-12 h-12 bg-black rounded-2xl shadow-lg flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-[#FFEE02] rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
