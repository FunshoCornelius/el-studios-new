import React from "react";
import Team from "../Components/Team";

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

const AboutUs = () => {
  return (
    <>
      {aboutData.map((data) => (
        <article key={data.id} className="px-20 py-20 mt-2 border-t">
          <h2 className="font-extrabold uppercase text-6xl text-white">
            {data.title}
          </h2>
          <p className="hidden">{data.description}</p>
        </article>
      ))}
    </>
  );
};

const About = () => {
  return (
    <section className="bg-elPurple">
      <div id="about" className="bg-elPurple text-elLilac  h-[100vh]">
        <span className="font-semibold text-xl px-20">ABOUT US</span>
        <AboutUs />
      </div>
      <div>
        <Team />
      </div>
    </section>
  );
};

export default About;
