import React from "react";
import Process from "./Processes";

const ProcessContainer = () => {
  return (
    <div className="overflow-x-auto py-[10rem] process-container">
      <ul className="flex gap-[2rem] px-[10rem] w-[160%]">
        <Process />
      </ul>
    </div>
  );
};

export default ProcessContainer;
