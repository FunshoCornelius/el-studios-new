import React, { useEffect, useState } from "react";
import Team from "../Components/Team";
import SectionHeader from "../Components/SectionHeader";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const AboutUs = () => {
    const aboutData = [
      {
        id: 1,
        title: "who are we?",
        description:
          "El Studios is an arm of El Global Inc. We are a multi-faceted media studio that offer services in 3D Modelling, VFX, graphics design, animations, motion graphics and game development. We are a team of dedicated individuals who are highly skillful with great work ethics offering several solutions in the media space.",
      },
      {
        id: 2,
        title: "What are we building?",
        description:
          "El Studios Entertainment strives to be the premier media entertainment company that provides high-quality animation, VFX, game development, and film production services that inspire and engage audiences around the world. We aim to achieve this by constantly innovating, investing in cutting-edge technology, and attracting and retaining the best talent in the industry.",
      },
      {
        id: 3,
        title: "How are we building?",
        description:
          "At El Studios Entertainment, our mission is to deliver exceptional media entertainment experiences to our clients, partners, and audiences worldwide. We are committed to using our expertise in animation, VFX, game development, and film production to create captivating and memorable content that entertains and educates. We foster a culture of creativity, collaboration, and excellence, and are dedicated to delivering on our promises with professionalism, integrity, and accountability.",
      },
    ];

    const [hoveredId, setHoveredId] = useState(null);

    const handleMouseEnter = (id) => {
      setHoveredId(id);
    };

    const handleMouseLeave = () => {
      setHoveredId(null);
    };

    return (
      <>
        {aboutData.map(({ id, title, description }) => (
          <article
            key={id}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
            className={`px-20 py-20 border-b h-[40vh] flex items-center transition-all duration-300 ${
              hoveredId === id ? "bg-elLilac text-elPurple" : ""
            }`}
          >
            {hoveredId === id ? (
              <p
                className="transition-all duration-500 text-[1.5vw] w-[100%] pl-[40%]"
                data-aos={"fade-left"}
              >
                {description}
              </p>
            ) : (
              <h2
                className="font-bold text-[5vw] transition-all duration-300"
                data-aos={"fade-right"}
              >
                {title.toLocaleUpperCase()}
              </h2>
            )}
          </article>
        ))}
      </>
    );
  };

  return (
    <section className="bg-elPurple py-[5rem]">
      <SectionHeader color={"elLilac"} section={"ABOUT"} />
      <div id="about" className="bg-elPurple text-elLilac  h-[100vh]">
        <AboutUs />
      </div>
      <div className="min-h-max">
        <Team />
      </div>
    </section>
  );
};

export default About;
