import React from "react";

const ServiceComponent = ({ name, description, img }) => {
  return (
    <figure className="flex flex-col items-center basis-1/2 gap-[2rem] text-justify">
      <img src={img} alt={name} />
      <h3 className="font-700">{name}</h3>
      <p>{description}</p>
    </figure>
  );
};

export default ServiceComponent;
