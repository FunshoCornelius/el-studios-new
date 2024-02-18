import React, { useState } from "react";
import Logo from "./Logo";
import { IoMdMenu } from "react-icons/io";
import NavigationLinks from "./NavigationLinks";

const Navbar = () => {
  const stylesArr = [
    "fixed",
    "w-[100%]",
    "z-10",
    "flex",
    "justify-between",
    "items-center",
    "bg-elPurple",
    "text-white",
    "px-20",
    "py-5",
  ];

  const styles = stylesArr.join(" ");

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles}>
      <Logo />
      <NavigationLinks className={"hidden md:flex gap-[2rem]"} />
      <IoMdMenu
        onClick={handleToggle}
        className="md:hidden w-[3rem] cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
