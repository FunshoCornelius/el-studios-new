import React from "react";
import Logo from "./Logo";
import { IoMdMenu } from "react-icons/io";
// import { useRef } from "react";
// import { Link } from "react-scroll";

const linkTitle = [
  {
    id: 1,
    name: "Home",
    to: "",
  },
  {
    id: 2,
    name: "About",
    to: "about",
  },
  {
    id: 3,
    name: "Services",
    to: "services",
  },
  {
    id: 4,
    name: "Clients",
    to: "clients",
  },
  {
    id: 5,
    name: "Gallery",
    to: "gallery",
  },
  {
    id: 6,
    name: "Process",
    to: "process",
  },

  {
    id: 7,
    name: "Pricing",
    to: "pricing",
  },
];

const navLink = linkTitle.map((link) => (
  <li key={link.id}>
    <a href={`#${link.to}`} duration={500}>
      {link.name}
    </a>
  </li>
));

const Navbar = () => {
  return (
    <nav className=" fixed w-[100%] z-10 flex justify-between items-center  bg-elPurple text-white px-10 py-5">
      <Logo />
      <ul className="sm:flex gap-[2rem] hidden ">{navLink}</ul>
      <IoMdMenu className="sm:hidden w-[1.8rem]" />
    </nav>
  );
};

export default Navbar;
