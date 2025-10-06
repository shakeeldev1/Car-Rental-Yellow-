import { useState, useEffect } from "react";
import Button from "../Button";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  {
    image:
      "https://img.freepik.com/premium-photo/bus-with-number-41-front_1098119-13716.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
    title: "Reliable Coach & Minibus Hire",
    subtitle: "Across the United Kingdom",
    description:
      "Providing safe, comfortable, and affordable transport for group tours, corporate events, weddings, and private travel across the UK.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/driver-helps-business-couple-carry-their-suitcases-car-from-hotel_506452-23590.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
    title: "Corporate & Event Transport",
    subtitle: "Professional & Punctual Service",
    description:
      "Perfect transport solutions for business meetings, conferences, and events ensuring timely arrivals and premium comfort.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/elegant-businessman-with-assistant-with-suitcase-is-coming-by-car-airport-runway-flying-quarantine_447912-6271.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
    title: "Airport Transfers Made Easy",
    subtitle: "Stress-Free Travel",
    description:
      "Reliable airport transfers with spacious vehicles and courteous drivers from early-morning flights to late-night arrivals.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/full-length-children-road_1048944-8876850.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
    title: "School & Group Travel",
    subtitle: "Safe, Comfortable & Trusted",
    description:
      "From school trips to community tours, our professional drivers ensure every journey is secure, efficient, and enjoyable.",
  },
];


  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // loop forever
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 md:px-16 lg:px-24 w-full md:w-[65%] ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          {slides[currentSlide].title}
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            {slides[currentSlide].subtitle}
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 leading-relaxed bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm border-l-4 border-yellow-500">
          {slides[currentSlide].description}
        </p>

        <div className="flex gap-4">
          <Button text="Discover more" />
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-yellow-500 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Header;
