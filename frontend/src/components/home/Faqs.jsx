import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import faq1 from "../../assets/home/faq1-1.jpg";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How to book a taxi cab in a city tour?",
      answer:
        "Booking a taxi cab for a city tour is simple. You can visit our website or download our mobile app to choose your preferred date, time, and vehicle type. Once selected, you will receive an instant confirmation along with driver details. Our system also allows you to track your taxi in real-time, ensuring complete transparency and convenience throughout your trip.",
    },
    {
      question: "What are the payment options available?",
      answer:
        "We accept multiple payment methods including all major credit cards, debit cards, net banking, UPI payments, and popular digital wallets. Additionally, we provide corporate billing for business clients. For in-city rides, you can also choose to pay in cash directly to the driver.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, you can cancel your booking up to 24 hours before your scheduled ride without any charges. Cancellations made within 24 hours may incur a small fee. To cancel, simply log in to your account via the app or website, go to 'My Bookings', and click 'Cancel'. You will receive a cancellation confirmation instantly.",
    },
    {
      question: "Do you offer corporate packages?",
      answer:
        "Absolutely! We offer customized corporate travel solutions including priority booking, dedicated account managers, monthly billing, and special discounts. Whether it's daily employee commutes, airport transfers, or VIP guest transportation, our corporate packages ensure smooth, professional, and reliable travel services.",
    },
    {
      question: "Are your drivers trained and licensed?",
      answer:
        "Yes, all our drivers are fully licensed and undergo a strict selection process. They receive professional training in safe driving practices, customer service, and local route knowledge. In addition, our drivers are background-checked and regularly evaluated to ensure the highest safety and comfort for our passengers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container flex flex-col md:flex-row gap-20 mx-auto py-16 mt-5 items-center">
      {/* FAQ Section */}
      <div className="w-full md:w-[50%] mx-5">
        <p className="mb-2 text-amber-500 font-semibold tracking-wide p-3 sm:p-0">
          Have you any question?
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-8 p-3 sm:p-0">
          Frequently Asked Questions
        </h1>

        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-6 m-3 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-xl bg-white transition-all duration-300 border-l-4 border-transparent hover:border-amber-400"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="font-semibold text-lg">{faq.question}</h4>
                <motion.div
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <FaChevronDown className="text-amber-500" />
                  ) : (
                    <FaChevronRight className="text-amber-500" />
                  )}
                </motion.div>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex w-[50%] items-center justify-center relative">
        <div
          className="bg-black h-[220px] w-[150px] mr-[-120px] left-0 -translate-y-1/2"
          style={{
            clipPath: "polygon(53% 0, 100% 0, 49% 100%, 0% 100%)",
          }}
        ></div>

        <div className="relative h-[450px] w-[300px]">
          <img
            src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Faq"
            className="w-fit h-full object-cover"
            style={{
              clipPath: "polygon(53% 0, 100% 0, 49% 100%, 0% 100%)",
            }}
          />
        </div>

        <div
          className="bg-[#FFEE02] h-[450px] w-[250px] ml-[-100px]"
          style={{
            clipPath: "polygon(53% 0, 100% 0, 49% 100%, 0% 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Faqs;
