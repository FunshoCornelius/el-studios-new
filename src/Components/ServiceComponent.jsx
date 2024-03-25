import React from "react";

const ServiceComponent = ({ name, opacity, description, img }) => {
  return (
    <figure className="flex flex-col  text-elLilac w-full items-center gap-[2rem] text-justify">
      <div className="w-full h-[30%]">
        <img src={img} className="w-full" alt={name} width={"100%"} />
      </div>
    </figure>
  );
};

export default ServiceComponent;
