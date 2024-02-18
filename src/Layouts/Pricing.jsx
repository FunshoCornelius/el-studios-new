import React from "react";
import SectionHeader from "../Components/SectionHeader";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-elPurple h-[100vh]">
      <SectionHeader color={"elLilac"} section={"PRICING"} />
      <div className="flex justify-center items-center h-[80vh]">
        <img
          src={require("../images/process/pricing-card.svg").default}
          alt="Pricing Card"
        />
      </div>
    </section>
  );
};

export default Pricing;
