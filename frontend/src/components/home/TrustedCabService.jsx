// import trusted1 from "../../assets/home/trusted1.jpg";
// import about2 from "../../assets/home/about1-2.png";
// import about3 from "../../assets/home/about1-3.png";
import one from "../../assets/home/one.png";
import two from "../../assets/home/two.png";
import dot from "../../assets/home/dot.png";

import { CiCalendarDate } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";

const TrustedCabService = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-10 mx-auto mt-3 py-3 px-5"
      style={{background:`url(${dot})`,backgroundSize:'cover'}}
    >
     
      <div className="w-full md:w-[30%]  flex justify-center items-center">
          <img src={one} alt="" className="sm:h-100 h-60 " />
      </div>
      <div className="w-full md:w-[45%] mt-7  md:text-left">
        <p className="text-gray-600 text-center">Welcome to Our Company</p>
        <h1 className="text-3xl md:text-5xl font-bold my-3 text-center">
          We Provide Trusted Cab Services
        </h1>
        <p className="text-gray-600 my-3 text-center">
          We successfully cope with tasks of varying complexity, provide
          long-term guarantees and regularly master new technologies.
        </p>
        <p className="text-gray-600 text-center">
          Our portfolio includes dozens of successfully completed projects of
          houses of different storeys.
        </p>

        {/* Features */}
        <div className="flex justify-center flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start mt-4">
          <div className="flex items-center gap-2">
            <CiCalendarDate className="text-3xl" />
            <h4 className="text-xl">Online Booking</h4>
          </div>
          <div className="flex items-center gap-2">
            <FaHeadset className="text-2xl" />
            <h4 className="text-xl">24/7 Support</h4>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center  mt-10 mb-2">
          <Link to="/services">
          <Button text="Book Service" bgHover="black" textHover="white" cutHover="white"/>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[30%] hidden sm:flex justify-center items-center">
          <img src={two} alt="" className="sm:h-100 h-60" />
      </div>
    </div>
  );
};

export default TrustedCabService;
