import React from "react";
import FooterContactInfo from "./FooterContactInfo";

const FooterContactContainer = () => {
  return (
    <div className="flex mb-[2rem] md:flex-row flex-col-reverse justify-between md:items-center">
      <FooterContactInfo />
      <img
        className="w-[50%] md:w-auto"
        src={require("../images/footer-illustration.svg").default}
        alt=""
      />
    </div>
  );
};

export default FooterContactContainer;
