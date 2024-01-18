import React from "react";

const SectionHeader = ({ section, color }) => {
  return (
    <div>
      <h3 className={`text-${color} px-[5rem] mb-[2rem]`}>{section}</h3>
      <hr className={`bg-${color}`} />
    </div>
  );
};

export default SectionHeader;
