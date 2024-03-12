import React, { useEffect, useState } from "react";
import Team from "../Components/Team";
import SectionHeader from "../Components/SectionHeader";
import whoIllustration from "../images/team/undraw_creative_team_re_85gn.svg";
import whatIllustration from "../images/team/undraw_start_building_re_xani.svg";
import howIllustration from "../images/team/undraw_solution_mindset_re_57bf.svg";
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
        img: whoIllustration,
        title: "who are we?",
        description:
          "El Studios is an arm of El Global Inc. We are a multi-faceted media studio that offer services in 3D Modelling, VFX, graphics design, animations, motion graphics and game development. We are a team of dedicated individuals who are highly skillful with great work ethics offering several solutions in the media space.",
      },
      {
        id: 2,
        img: whatIllustration,
        title: "What are we building?",
        description:
          "El Studios Entertainment strives to be the premier media entertainment company that provides high-quality animation, VFX, game development, and film production services that inspire and engage audiences around the world. We aim to achieve this by constantly innovating, investing in cutting-edge technology, and attracting and retaining the best talent in the industry.",
      },
      {
        id: 3,
        img: howIllustration,
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
        {aboutData.map(({ id, title, img, description }) => (
          <article
            key={id}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
            className={`md:px-20 px-10 md:py-20 py-10 border-b h-[40vh] flex items-center transition-all duration-300 ${
              hoveredId === id ? "bg-elLilac text-elPurple" : ""
            }`}
          >
            {hoveredId === id ? (
              <div className="flex gap-[3rem] items-center">
                <figure className="w-[50%]">
                  <img src={img} alt={title} className="w-[80%]" />
                </figure>
                <p
                  className="transition-all duration-500 text-[2.8vw] md:text-[1.5vw] w-[100%]"
                  data-aos={"fade-left"}
                >
                  {description}
                </p>
              </div>
            ) : (
              <h2
                className="font-bold text-[7vw] md:text-[5vw] transition-all duration-300"
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
      <div id="about" className="bg-elPurple text-elLilac ">
        <AboutUs />
      </div>
      <div className="min-h-max">
        <Team />
      </div>
    </section>
  );
};

export default About;
