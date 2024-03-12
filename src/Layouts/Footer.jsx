import React from "react";
import FooterContactContainer from "../Components/FooterContactContainer";
import FooterAddressContainer from "../Components/FooterAddressContainer";
import Socials from "../Components/Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={"bg-footerBg px-[2rem] md:px-[20rem] py-[10rem] text-white"}
    >
      <FooterContactContainer />
      <hr />
      <FooterAddressContainer />
      <Socials
        className={
          "flex gap-[2rem] mt-[2rem] justify-center md:justify-start text-white text-[3rem]"
        }
      />

      <p className="text-center py-[5rem]">
        &copy; Copyright - El Studios El Global Inc {`${currentYear}`}{" "}
      </p>
    </footer>
  );
};

export default Footer;
