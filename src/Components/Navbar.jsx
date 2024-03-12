import React, { useState } from "react";
import Logo from "./Logo";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import NavigationLinks from "./NavigationLinks";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const stylesArr = [
    // "fixed",
    "w-[100%]",
    "z-10",
    "flex",
    "justify-between",
    "items-center",
    "bg-elPurple",
    "text-white",
    "md:px-20",
    "px-5",
    "py-5",
    "relative",
    "text-[3.5rem]",
  ];

  const navLinksStyle = [
    "absolute",
    "md:static",
    "top-[100%]",
    navOpen ? "right-[0]" : "right-[1000%]",
    "flex",
    "flex-col",
    "md:flex-row",
    "gap-[2rem]",
    "w-[25rem]",
    "md:w-auto",
    "h-auto",
    "text-center",
    "bg-elLilac",
    "md:bg-elPurple",
    "text-elPurple",
    "md:text-elLilac",
    "border-b-2",
    "md:border-0",
    "py-[2rem]",
    "transition-all",
    "duration-500",
    "ease-in-out",
    "z-20",
    "text-[2rem]",
    "md:border-0 border-b",
  ];

  const styles = stylesArr.join(" ");

  return (
    <nav className={styles}>
      <Logo className="z-10 md:w-[3rem] w-[1rem]" />
      <ul className={navLinksStyle.join(" ")}>
        <NavigationLinks className={"border-b md:border-0"} />
      </ul>
      {navOpen ? (
        <FaTimes
          className="cursor-pointer z-10 "
          onClick={() => setNavOpen(!navOpen)}
        />
      ) : (
        <IoMdMenu
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-[5rem] cursor-pointer"
        />
      )}
    </nav>
  );
};

export default Navbar;
