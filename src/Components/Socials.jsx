import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Socials = () => {
  return (
    <div className="flex flex-col gap-8 text-3xl absolute bottom-[15%] left-[5%] text-elLilac">
      <FaInstagram />
      <FaFacebook />
      <MdAlternateEmail />
    </div>
  );
};

export default Socials;
