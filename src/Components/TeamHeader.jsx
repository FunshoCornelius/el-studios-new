import React from "react";

const TeamHeader = ({ heading, color }) => {
  return (
    <div>
      <h3
        className={`text-${color} border-b font-bold text-7xl pb-[1rem] mb-[5rem]`}
        data-aos={"fade-right"}
        data-aos-duration={"700"}
      >
        {heading}{" "}
      </h3>
    </div>
  );
};

export default TeamHeader;
