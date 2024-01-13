import React from "react";

const Hero = () => {
  return (
    <section className="md:h-[100vh] flex justify-center items-center text-white">
      <h1 className="text-6xl cursor-default md:text-9xl text-center w-[40%] font-bold">
        WELCOME TO <br />
        <span className="text-secColor">EL-STUDIOS</span>
      </h1>
      <h1 className="hidden text-6xl md:text-9xl text-center w-[40%] font-bold">
        <span className="text-secColor">EL-EVATE</span>
        <br /> YOUR BRAND WITH US
      </h1>
      {/* <img src={require('../images/faith-el.png')} alt="" /> */}
    </section>
  );
};

export default Hero;
