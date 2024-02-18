import React from "react";
import FooterContactContainer from "../Components/FooterContactContainer";
import FooterAddressContainer from "../Components/FooterAddressContainer";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={"bg-footerBg px-[20rem] py-[10rem] text-white"}>
      <FooterContactContainer />
      <hr />
      <FooterAddressContainer />
      <p className="text-center py-[5rem]">
        &copy; Copyright - El Studios El Global Inc {`${currentYear}`}{" "}
      </p>
    </footer>
  );
};

export default Footer;
