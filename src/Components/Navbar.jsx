import React from "react";
import Logo from "./Logo";
import { IoMdMenu } from "react-icons/io";
import NavigationLinks from "./NavigationLinks";
// import { useRef } from "react";
// import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className=" fixed w-[100%] z-10 flex justify-between items-center  bg-elPurple text-white px-20 py-5">
      <Logo />
      <NavigationLinks />
      <IoMdMenu className="sm:hidden w-[1.8rem]" />
    </nav>
  );
};

export default Navbar;
