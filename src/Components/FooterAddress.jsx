import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";

const FooterAddress = () => {
  return (
    <div>
      <Logo />
      <p className="my-[2rem]">
        16, Kehinde Lawrence Street
        <br /> Beckley Estate, <br />
        Ifako-Ijaiye, Lagos Nigeria{" "}
      </p>
      <Socials className={"flex gap-[2rem] text-white text-[3rem]"} />
    </div>
  );
};

export default FooterAddress;
