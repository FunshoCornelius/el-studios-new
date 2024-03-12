import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const Message = () => {
    return (
      <div
        data-aos="fade-in"
        className={`w-[100%] flex justify-center items-center h-[70vh] transition duration-700 `}
      >
        <h1
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${
            isHovered ? "bg-elLilac text-elPurple" : ""
          } transition duration-700 ease-out text-7xl py-[5rem] px-[1rem] cursor-default md:text-9xl text-center font-bold`}
        >
          {isHovered ? "El-EEVATE YOUR BRAND WITH US" : "WELCOME TO "}
          <br />
          <span className="text-secColor">{isHovered ? "" : "EL-STUDIOS"}</span>
        </h1>
      </div>
    );
  };

  return (
    <div
      className={`md:h-[100vh] flex justify-center zoom-out items-center text-white `}
      data-aos={"fade-in"}
    >
      <div className={` my-auto w-[90%] md:w-[60%]`}>
        <Message />
      </div>
    </div>
  );
};

export default Hero;
