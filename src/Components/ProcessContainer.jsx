import React from "react";
import Processes from "./Processes";

const ProcessContainer = () => {
  return (
    <div className="overflow-x-auto py-[10rem] process-container">
      <ul className="flex gap-[2rem] md:px-[10rem] w-[350%] p-[2rem] md:w-[160%]">
        <Processes />
      </ul>
    </div>
  );
};

export default ProcessContainer;
