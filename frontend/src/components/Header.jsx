import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import pageTitle from "../assets/contact/page-title.png";

const Header = ({ name, title }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative">
        <img
          src={pageTitle}
          alt={`${title} banner`}
          className="w-full h-[300px] md:h-[450px] object-cover brightness-75"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        {/* Page Title */}
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg tracking-wide animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          {name}
        </h1>

        {/* Tagline (based on your business description) */}
        <p
          className="text-gray-200 text-sm md:text-lg max-w-2xl mb-6 leading-relaxed font-light animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          Reliable Coach, Minibus & Van Hire Across the UK — private and group
          transport solutions for weddings, tours, schools, corporate events,
          airport transfers and more.
        </p>

        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 text-gray-300 text-sm md:text-base animate-fadeInUp"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            to="/"
            className="text-white hover:text-[#FFEE02] transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          <FaChevronRight className="text-xs opacity-80" />
          <span className="text-[#FFEE02] font-semibold">{title}</span>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#efe97b92] to-transparent"></div>
    </div>
  );
};

export default Header;
