import React from "react";
import About from "../Layouts/About";
import Services from "../Layouts/Services";
import Gallery from "../Layouts/Gallery";
import Pricing from "../Layouts/Pricing";
import Clients from "../Layouts/Clients";
import Process from "../Layouts/Process";
import ElGradientBg from "../Components/ElGradientBg";

const Main = () => {
  return (
    <main>
      <About />
      <ElGradientBg />
      <Services />
      <Clients />
      <Gallery />
      <Process />
      <Pricing />
      <ElGradientBg />
    </main>
  );
};

export default Main;
