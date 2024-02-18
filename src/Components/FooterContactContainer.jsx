import React from "react";
import FooterContactInfo from "./FooterContactInfo";

const FooterContactContainer = () => {
  return (
    <div className="flex justify-between items-center">
      <FooterContactInfo />
      <img src={require("../images/footer-illustration.svg").default} alt="" />
    </div>
  );
};

export default FooterContactContainer;
