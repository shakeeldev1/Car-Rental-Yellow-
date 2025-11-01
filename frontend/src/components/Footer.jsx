import logo from "../assets/companyLogo.png";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import appStore from "../assets/about/app-store.png";
import googlePlay from "../assets/about/google-play.png";
import { Link } from "react-router-dom";
import { LuChevronsLeft } from "react-icons/lu";
import Button from "../components/Button.jsx";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black px-10 pt-10 mt-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Logo */}
        <div className="w-full md:w-[20%] md:ms-7 flex justify-center md:justify-start">
          <img
            src={logo}
            alt="company logo"
            loading="lazy"
            className="w-fit max-w-[100px]"
          />
        </div>

        {/* Call for Taxi */}
        <div className="w-full md:w-[30%] relative">
          <div
            className="max-w-[300px] h-[60px] md:h-[70px] bg-[#FFEE02]"
            style={{ clipPath: "polygon(20% 3%, 100% 0, 100% 100%, 0% 100%)" }}
          ></div>
          <div className="text-black flex items-center absolute top-2 right-14 md:top-3 md:right-8 lg:right-16 xl:right-20 2xl:right-24 max-w-[250px]">
            {/* <HiOutlineDevicePhoneMobile className="text-4xl me-2" /> */}
            <div className="">
              <p className="uppercase ms-4 mb-2 text-sm md:font-semibold">Call for Booking</p>
              <div className="flex items-center justify-center  space-x-4">
                <p className="text-md md:text-xl lg:text-xl">+44 161 706 1110</p>

                {/* Dial pad icon - opens phone dialer */}
                <a href="tel:+441617061110" className="text-black hover:scale-110 transition-transform">
                  <FaPhoneAlt className="text-lg" />
                </a>

                {/* WhatsApp icon - opens WhatsApp chat */}
                <a
                  href="https://wa.me/441617061110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:scale-110 transition-transform"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mt-5 mx-auto flex flex-col md:flex-row justify-between">
      
        <div className="w-full md:w-[30%] text-center md:text-left">
          <p className="text-white text-justify">
            Linkway Rides streamlines transportation services by connecting customers with reliable drivers, simplifying bookings, and enhancing ride management through intelligent, user-friendly technology
          </p>
          <div className='mt-4  flex items-center flex-wrap gap-2'>
            {/* Facebook Button */}
            <button className="w-8 h-8 flex items-center justify-center relative overflow-hidden border border-black/15 rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
              <FaFacebook className="text-gray-900 relative z-10 transition-all duration-300 group-hover:text-white text-sm" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>

            {/* Instagram Button */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full relative overflow-hidden border border-black/15 bg-white shadow-md shadow-gray-200 group transition-all duration-500">
              <FaInstagram className="text-gray-900 relative z-10 transition-all duration-500 group-hover:text-white" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>

            {/* Twitter Button */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full relative overflow-hidden border border-black/15 bg-white shadow-md shadow-gray-200 group transition-all duration-300">
              <FaTwitter className="text-black z-10 transition-all duration-300 group-hover:text-white" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-black z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>

            {/* LinkedIn Button */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full relative overflow-hidden border border-black/15 bg-white shadow-md shadow-gray-200 group transition-all duration-300">
              <FaLinkedinIn className="text-gray-900 relative z-10 transition-all duration-300 group-hover:text-white text-sm" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-600 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
          </div>
        </div>
        {/* Useful Links */}
        <div className="flex mt-5 text-white">
          <div className="max-w-[300px]">
            <h3 className="font-bold text-2xl uppercase">Useful Links</h3>
            <div className="relative mt-2">
              <hr className="w-[90%] border-gray-500" />
              <hr className="w-[30%] bg-[#FFEE02] h-1 rounded-full mt-[-2px]" />
            </div>
            <div className="flex flex-col gap-3 mt-2">
              {["Home", "Services", "About-us", "Contact"].map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <LuChevronsLeft className="mt-0.5" />
                  <Link
                    to={`/${item ? item.toLowerCase().replace(" ", "-") : 'about-us'}`}
                    className="relative text-white transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FFEE02] after:transition-all after:duration-300 hover:after:w-full rounded-full"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex mt-5 text-white">
          <div className="max-w-[300px]">
            <h3 className="font-bold text-2xl uppercase">Newsletter</h3>
            <div className="relative mt-2">
              <hr className="w-[90%] border-gray-500" />
              <hr className="w-[30%] bg-[#FFEE02] h-1 rounded-full mt-[-2px]" />
            </div>
            <p className="my-2 text-sm text-gray-400">
              Signup for our weekly Newsletter updates.
            </p>
            <div>
              <input
                type="email"
                className="p-3 mb-4 border border-gray-300 w-full max-w-[250px] rounded-md outline-none"
                placeholder="Enter your email"
              />
              <Button text="Subscribe" />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full text-gray-500 mt-8" />
      <div className="container mx-auto mt-4 pb-4 flex justify-between items-center">
        <div>
          <p className="text-white">
            © Copyright  Reserved By linkwayrides 2025
          </p>
        </div>
        <div>
          <div className="text-white items-center cursor-pointer flex gap-1 hover:text-[#FFEE02]">
            <FaFacebook className="text-white" />
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
