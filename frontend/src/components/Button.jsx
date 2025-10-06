

const Button = ({
  text,
  // bgHover = "white",
  // textHover = "black",
  // cutHover = "black",
  onClick,
}) => {
  return (
    <div className="relative">
      {/* <button
        onClick={onClick}
        className="relative overflow-hidden bg-[#FFEE02] w-[170px] px-6 py-3 cursor-pointer font-semibold text-black transition-all duration-500 group"
        style={{ clipPath: "polygon(100% 0, 85% 100%, 0 100%, 0 0)" }}
      >
        <div
          className={`absolute top-0 right-2 h-[100%] w-[50px] bg-${cutHover} z-20`}
          style={{ clipPath: "polygon(100% 0, 45% 100%, 25% 100%, 78% 0)" }}
        ></div>
        <span
          className={`absolute inset-0 bg-${bgHover} w-0 transition-all duration-500 group-hover:w-full z-10`}
        ></span>
        <span
          className={`relative z-30 ms-[-30px] group-hover:text-${textHover}`}
        >
          {text}
        </span>
      </button> */}



      <button onClick={onClick}>
        <span class="relative inline-flex items-center justify-center px-8 border border-white py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group">
          {/* Expanding circle effect - changed to yellow */}
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FFEE02] rounded-md group-hover:w-56 group-hover:h-56"></span>

          {/* Gradient overlay - updated to black/white theme */}
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-900"></span>

          {/* Text */}
          <span class="relative group-hover:text-black">{text}</span>
        </span>
      </button>


    </div>
  );
};

export default Button;
