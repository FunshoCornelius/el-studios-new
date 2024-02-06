import React from "react";
import SectionHeader from "../Components/SectionHeader";
import ProcessContainer from "../Components/ProcessContainer";

const Process = () => {
  return (
    <section id="process" className="bg-elPurple">
      {" "}
      <SectionHeader
        section={"PROCESS"}
        color={"elLilac"}
        heading={
          "We follow a streamlined a process to ensure we deliver high-quality work that meets your expectations:"
        }
      />
      <ProcessContainer />
    </section>
  );
};

export default Process;
