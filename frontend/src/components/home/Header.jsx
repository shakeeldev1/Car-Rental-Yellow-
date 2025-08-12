import header from "../../../src/assets/home/header.jpg";
import Button from "../Button";

const Header = () => {
  return (
    <div className="relative w-full max-h-[550px] overflow-hidden">
      {/* Background Image with overlay */}
      <div className="relative">
        <img
          src={header}
          alt="Header poster"
          className="w-full h-[550px] object-cover object-center"
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start text-white 
        px-4 sm:px-6 md:px-10 lg:px-16 
        w-full sm:w-[80%] md:w-[60%] lg:w-[50%]
        text-center sm:text-left">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight 
        transform transition-all duration-500 hover:scale-105">
          Reserve Your Taxi <br/>From Any Location
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl 
        bg-black bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro
          fugit error assumenda quasi dolor placeat nemo et expedita nostrum,
          suscipit neque harum iure unde voluptatum nisi aspernatur alias
          perferendis!
        </p>

        <div className="mt-8 flex sm:justify-start justify-center 
        transform transition-all duration-300 hover:scale-110">
          <Button text="Discover More" />
        </div>
      </div>
    </div>
  );
};

export default Header;