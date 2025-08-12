import React from "react";
import { FiPhoneMissed } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { BsCursor } from "react-icons/bs";
import Button from "../Button";

const ContactForm = () => {
  return (
    <div className="container mx-auto my-16 px-4">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Section (Form) */}
        <div className="w-full md:w-[48%]">
          <p className="uppercase text-gray-800 tracking-wider text-sm mb-2">Send us email</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Feel <span className="text-[#FFEE02]"> free to </span> write
          </h1>
          <form
            type="submit"
            className="my-5 flex flex-col flex-wrap md:flex-row gap-4"
          >
            <div className="w-full flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="w-full md:w-[48%] p-4 bg-[#F4F5F8] rounded-lg outline-none focus:ring-2 focus:ring-[#FFEE02] transition-all duration-300 shadow-sm hover:shadow-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full md:w-[48%] p-4 bg-[#F4F5F8] rounded-lg outline-none focus:ring-2 focus:ring-[#FFEE02] transition-all duration-300 shadow-sm hover:shadow-md"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                className="w-full md:w-[48%] p-4 bg-[#F4F5F8] rounded-lg outline-none focus:ring-2 focus:ring-[#FFEE02] transition-all duration-300 shadow-sm hover:shadow-md"
              />
              <input
                type="number"
                name="phone"
                placeholder="Enter Phone"
                className="w-full md:w-[48%] p-4 bg-[#F4F5F8] rounded-lg outline-none focus:ring-2 focus:ring-[#FFEE02] transition-all duration-300 shadow-sm hover:shadow-md"
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter Message"
              className="w-full min-h-[180px] p-4 bg-[#F4F5F8] rounded-lg outline-none focus:ring-2 focus:ring-[#FFEE02] transition-all duration-300 shadow-sm hover:shadow-md"
            />
            <div className="w-full mt-2">
              <Button
                text="Send Message"
                bgHover="black"
                textHover="white"
                cutHover="white"
              />
            </div>
          </form>
        </div>

        {/* Right Section (Contact Details) */}
        <div className="w-full md:w-[48%]">
          <p className="uppercase text-gray-800 tracking-wider text-sm mb-2">Need any help?</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Get <span className="text-[#FFEE02]"> in touch </span> with us
          </h1>
          <p className="text-gray-600 text-base my-6 leading-relaxed">
            AIS provides smart automation, real-time analytics, and seamless data integration. Contact us for customized AI-driven business solutions and expert support.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 mt-8">
            <ContactInfo
              icon={<FiPhoneMissed className="text-2xl" />}
              title="Have any question?"
              text="Free +92 (020)-9850"
            />
            <ContactInfo
              icon={<MdEmail className="text-2xl" />}
              title="Write email"
              text="needhelp@company.com"
            />
            <ContactInfo
              icon={<BsCursor className="text-2xl" />}
              title="Visit anytime"
              text="66 Brooklyn Golden Street, New York"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Info Component
const ContactInfo = ({ icon, title, text }) => (
  <div className="flex gap-5 cursor-default items-center group">
    <div className="bg-[#FFEE02] w-[70px] h-[70px] rounded-lg p-4 flex items-center justify-center text-xl transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:scale-105 shadow-md">
      {icon}
    </div>
    <div>
      <h1 className="font-bold text-xl transition-colors duration-300 group-hover:text-[#FFEE02]">
        {title}
      </h1>
      <p className="text-gray-600 transition-colors duration-300 group-hover:text-black mt-1">
        {text}
      </p>
    </div>
  </div>
);

export default ContactForm;