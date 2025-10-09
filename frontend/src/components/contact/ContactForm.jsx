import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import Button from "../Button";

const ContactForm = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Section - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black text-white p-10 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl"
          >
            {/* Subtle background shapes */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FFEE02] opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Let’s Connect
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                We’d love to hear from you! Whether it’s a partnership, inquiry, or feedback — 
                our team is always ready to assist you.
              </p>

              <div className="space-y-8">
                <ContactItem icon={<MdEmail />} label="Email" text="support@ais-taxi.com" />
                <ContactItem icon={<FiPhone />} label="Phone" text="+1 (995) 544-2318" />
                <ContactItem icon={<MdLocationOn />} label="Location" text="2739 Saint Augustine Trl, Marietta, GA, USA" />
                <ContactItem icon={<span className="text-2xl">🕒</span>} label="Hours" text="24/7 Available Service" />
              </div>

              <div className="mt-14 pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Need instant assistance? Reach out to our live chat or call us directly.  
                  We’re committed to providing fast and reliable support every time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Send Us a Message
            </h1>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Fill out the form below, and we’ll get back to you shortly.  
              Your satisfaction is our top priority.
            </p>

            <form className="space-y-8">
              <InputField type="text" placeholder="Your Name" />
              <InputField type="email" placeholder="Your Email" />
              <TextArea placeholder="Your Message" />

              <div className="pt-4">
                <Button
                  text="Submit Message"
                  bgColor="black"
                  textColor="white"
                  hoverBg="[#FFEE02]"
                  hoverText="black"
                  className="w-full md:w-auto px-12 py-4 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                />
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

/* ---------------- COMPONENTS ---------------- */
const InputField = ({ type, placeholder }) => (
  <div className="relative">
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-4 text-lg text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-[#FFEE02] outline-none transition-all duration-300 placeholder-gray-500"
    />
  </div>
);

const TextArea = ({ placeholder }) => (
  <div className="relative">
    <textarea
      rows="4"
      placeholder={placeholder}
      className="w-full px-4 py-4 text-lg text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-[#FFEE02] outline-none transition-all duration-300 placeholder-gray-500 resize-none"
    />
  </div>
);

const ContactItem = ({ icon, label, text }) => (
  <div className="flex items-start gap-5 group cursor-pointer transition-all duration-300">
    <div className="bg-[#FFEE02] text-gray-900 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <p className="text-gray-400 text-sm uppercase tracking-wide">{label}</p>
      <p className="text-white text-lg font-medium group-hover:text-[#FFEE02] transition-colors duration-300">
        {text}
      </p>
    </div>
  </div>
);

export default ContactForm;
