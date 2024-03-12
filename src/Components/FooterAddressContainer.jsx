import React from "react";
import FooterAddress from "./FooterAddress";
import NavigationLinks from "./NavigationLinks";

const FooterAddressContainer = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center mt-[3rem]">
      <FooterAddress />
      <div>
        <h3 className="font-bold">SITE MAPS</h3>
        <NavigationLinks className={"flex flex-col gap-[.4rem] mt-[.5rem]"} />
      </div>
    </div>
  );
};

export default FooterAddressContainer;
