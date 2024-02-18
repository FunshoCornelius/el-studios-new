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

  const heroMessage = (
    <h1
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="transition duration-700 ease-out text-6xl md:text-center cursor-default md:text-9xl text-center font-bold"
    >
      WELCOME TO <br />
      <span className="text-secColor">EL-STUDIOS</span>
    </h1>
  );

  const newHeroMessage = (
    <h1
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="md:h-[100%] ease-out cursor-default text-6xl md:text-9xl text-center w-[100%] font-bold"
    >
      <span className="text-secColor">EL-EVATE</span>
      <br /> YOUR BRAND WITH US
    </h1>
  );

  const Message = () => {
    return (
      <div
        data-aos="fade-in"
        className={`w-[50%] h-[40vh] transition duration-700 ${
          isHovered ? "bg-elLilac text-elPurple" : ""
        }`}
      >
        {isHovered ? newHeroMessage : heroMessage}
      </div>
    );
  };

  return (
    <div
      className={`md:h-[100vh] flex justify-center zoom-out items-center text-white`}
      data-aos={"fade-in"}
    >
      <Message />
    </div>
  );
};

export default Hero;
