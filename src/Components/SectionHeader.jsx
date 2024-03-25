import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionHeader = ({ section, color, animate, heading }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <p
        className={`text-${color} border-b-2 py-[2rem] border-inherit border-solid px-[5rem] text-3xl`}
      >
        {section}
      </p>
      <h3
        className={`text-center font-bold mt-[3rem] text-${color} text-[2rem] md:text-[4rem]`}
        data-aos={animate}
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionHeader;
