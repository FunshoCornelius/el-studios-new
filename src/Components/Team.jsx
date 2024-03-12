import React, { useEffect } from "react";
import Samuel from "../images/team/samuel-el.png";
import Faith from "../images/team/faith-el.png";
import Cornelius from "../images/team/funsho-cornelius.png";
import Joshua from "../images/team/joshua-el.png";
import Chucks from "../images/team/chuks-el.png";
import Paul from "../images/team/paul-okwerre-el.png";
import Sphere from "../images/team/team-elipse.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import TeamHeader from "./TeamHeader";

const Personels = ({ name, img, animate, role }) => {
  return (
    <figure
      className="flex md:flex-col mb-[3rem] gap-5 items-center text-[1.4rem ] w-[100%] md:w-[25%]"
      data-aos={animate}
      data-aos-duration={"1500"}
    >
      <div className="w-[30%] ">
        <img src={img} className="mx-auto w-[100%]" alt={name} />
      </div>
      <div>
        <h3 className="md:text-[1.4vw] text-[3.5vw]">{name}</h3>
        <p className="md:text-[0.9vw] text-[2.5vw]">{role}</p>
      </div>
    </figure>
  );
};

const SeniorOfficers = () => {
  return (
    <div className="md:flex justify-between md:text-center w-[100%]">
      <Personels
        className="order-1"
        name={"Samuel Thompson George"}
        role="CEO/CG Generalist/ Animator/ VFX Artist/ Game Developer"
        img={Samuel}
        animate={"zoom-in"}
      />
      <Personels
        name={"Paul Okwerre"}
        role="COO/Sound Engineer/Video Editor/Graphics Designer"
        img={Paul}
        animate={"fade-down-right"}
      />
      <Personels
        name={"Chukwuma Nwokojie"}
        role="CCO/Cinematographer"
        img={Chucks}
        animate={"fade-down-left"}
      />
    </div>
  );
};

const MiddleLevelOfficers = () => {
  return (
    <div
      className="md:flex lg:my-[5vw] justify-center gap-[10%]"
      data-aos={"zoom-in"}
    >
      <Personels
        name={"Joshua Mbaya"}
        role="Creative Director/CG Generalist"
        img={Joshua}
        animate={"fade-right"}
      />
      <Personels
        name={"Faith Olateju Olatide"}
        role="Chief Operating Manager"
        img={Faith}
        animate={"fade-left"}
      />
    </div>
  );
};

const JuniorLevelOfficer = () => {
  return (
    <div className="md:flex justify-center">
      <Personels
        name={"Funsho Cornelius Olusumbo"}
        role={"Sound Designer/Sound Engineer"}
        img={Cornelius}
        animate={"zoom-out-up"}
      />
    </div>
  );
};

const Team = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${Sphere})`,
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
      className="md:px-[5rem] px-[2rem] bg-cover mt-[15rem] md:h-[80vw] text-2xl"
    >
      <TeamHeader heading={"Meet The Team"} color={"elPurple"} />
      <div className="">
        <div className="h-max pb-[10rem]">
          <SeniorOfficers />
          <MiddleLevelOfficers />
          <JuniorLevelOfficer />
        </div>
      </div>
    </div>
  );
};

export default Team;
