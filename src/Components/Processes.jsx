import React from "react";

const Processes = () => {
  const processData = [
    {
      id: 1,
      name: "Project Brief",
      message:
        "We work closely with you to understand Your Requirement and goals for the project.",
      img: require("../images/process/project-brief.svg").default,
      color: "white",
    },
    {
      id: 2,
      name: "Concept Design",
      message:
        "We work closely with you to understand Your Requirement and goals for the project.",
      img: require("../images/process/concept-design.svg").default,
      color: "#FEC4D9",
    },
    {
      id: 3,
      name: "Review",
      message:
        "We work closely with you to understand Your Requirement and goals for the project.",
      img: require("../images/process/review.svg").default,
      color: "#FFAFDF",
    },
    {
      id: 4,
      name: "Production",
      message:
        "We work closely with you to understand Your Requirement and goals for the project.",
      img: require("../images/process/production.svg").default,
      color: "#FF81FA",
    },
    {
      id: 5,
      name: "Delivery",
      message:
        "We work closely with you to understand Your Requirement and goals for the project.",
      img: require("../images/process/delivery.svg").default,
      color: "#DDA7FF",
    },
  ];

  return processData.map((process) => (
    <li
      style={{ backgroundColor: process.color }}
      key={process.id}
      className={`w-[100%] gap-5 md:w-[33%] flex flex-col text-center rounded-lg md:px-[6rem] py-[6rem] justify-center items-center`}
    >
      <img src={process.img} alt={process.name} />
      <h3 className={`font-bold text-[2.5rem]`}>{process.name}</h3>
      <p style={{ textTransform: "capitalize" }}>{process.message}</p>
    </li>
  ));
};

export default Processes;
