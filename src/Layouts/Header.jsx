import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Socials from "../Components/Socials";

const Header = () => {
  return (
    <header className="bg-elPurple  h-[100vh] w-[100%] relative">
      <Navbar />
      <Hero />
      <Socials
        className={
          "flex md:flex-col gap-[3rem] absolute bottom-[10%]  md:left-[5%] left-[50%] translate-x-[-50%] md:text-[3rem] bg-elPurple p-[2rem] shadow-2xl text-elLilac"
        }
      />
    </header>
  );
};

export default Header;
