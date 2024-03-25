import React, { useState } from "react";

const TeamTestimonialMessage = () => {
  const testimonialData = [
    {
      id: 1,
      fullName: "Samuel Thompson George",
      role: "CEO/CG Generalist/ Animator/ VFX Artist/ Game Developer",
      message1:
        "El Studios: born from ambition, sculpted by growth. It may not be in the final form, but the ongoing journey fuels my fire",
      message2: "Just call me the big cheese",
    },
    {
      id: 2,
      fullName: "Chukwuma Nwokeoji",
      role: "CCO/Cinematographer",
      message1:
        "El Studios has been my dream for years and that coming to pass was one of the happiest moments of my life",
      message2: "I am the Chief Creative Officer",
    },
    {
      id: 3,
      fullName: "Joshua Mbaya",
      role: "Creative Director/ CG Generalist",
      message1: "Glad to be a part of the growing team at El Studios",
      message2: "I am become Josh, The creator of worlds",
    },
    {
      id: 4,
      fullName: "Paul Okwerre",
      role: "COO/Sound Engineer/Video Editor/Graphics Designer",
      message1:
        "Seasoned Veteran here, ready to break new ground in Nigeria multimedia with this stellar team",
      message2:
        'When Clients say the word "Just" to a creative, your next thought is "Dey play"  ',
    },
    {
      id: 5,
      fullName: "Olatide Faith",
      role: "Chief Operating Officer",
      message1: "I have no words",
      message2: "Why use words when you can shoot",
    },
    {
      id: 6,
      fullName: "Funsho Cornelius Olusumbo",
      role: "Sound Engineer/Sound Design",
      message1:
        "El Studios has been one of my astonishing achievements, it hasn't gotten to the point I envisioned it but it's all good",
      message2:
        "El Studios has been one of my astonishing achievements, it hasn't gotten to the point I envisioned it but it's all good",
    },
  ];

  const [hoveredStates, setHoveredStates] = useState(
    Array(testimonialData.length).fill(false)
  );

  const handleMouseEvents = (index, isMouseEnter) => {
    setHoveredStates((prevHoveredStates) => {
      const newHoveredStates = [...prevHoveredStates];
      newHoveredStates[index] = isMouseEnter;
      return newHoveredStates;
    });
  };

  return (
    <div className="overflow-scroll h-[100vh] md:w-[70%] testimonial">
      {testimonialData.map((data, index) => (
        <div key={data.id}>
          <hr />
          <article
            onMouseEnter={() => handleMouseEvents(index, true)}
            onMouseLeave={() => handleMouseEvents(index, false)}
            style={{ transform: `translateY(${data[index]} * 100)` }}
            className={`md:h-[70vh] h-[40vh] flex items-start md:py-[3rem] mt-[3rem] rounded-lg bg-${
              hoveredStates[index] ? "elLilac" : ""
            } text-${hoveredStates[index] ? "elPurple" : ""}`}
          >
            <img
              src={require("../images/gridicons_quote.svg").default}
              alt="Big Quote"
            />
            <div className="flex flex-col justify-between h-[100%] py-[3rem]">
              <h3 className="font-bold md:text-[4.5rem] text-[2.4rem] leading-none ">
                {hoveredStates[index] ? data.message2 : data.message1}
              </h3>
              <div>
                <h4 className="font-bold md:text-5xl">{data.fullName}</h4>
                <p>{data.role}</p>
              </div>
            </div>
          </article>
        </div>
      ))}{" "}
    </div>
  );
};

export default TeamTestimonialMessage;
