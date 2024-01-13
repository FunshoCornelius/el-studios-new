import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Socials from "../Components/Socials";

const Header = () => {
  return (
    <header className="bg-elPurple  h-[100vh] w-[100%] relative">
      <Navbar />
      <Hero />
      <Socials />
    </header>
  );
};

export default Header;
