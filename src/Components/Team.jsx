import React, { useEffect } from "react";
import Samuel from "../images/samuel-el.png";
import Faith from "../images/faith-el.png";
import Cornelius from "../images/funsho-cornelius.png";
import Joshua from "../images/joshua-el.png";
import Chucks from "../images/chuks-el.png";
import Paul from "../images/paul-okwerre-el.png";
import Sphere from "../images/team-elipse.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const Personels = ({ name, img, animate, role }) => {
    return (
      <figure
        className="flex flex-col items-center text-[1.4rem ] w-[25%]"
        data-aos={animate}
        data-aos-duration={"1500"}
      >
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>
      </figure>
    );
  };

  const SeniorOfficers = () => {
    return (
      <div className="flex justify-between text-center w-[100%]">
        <Personels
          name={"Paul Okwerre"}
          role="COO/Sound Engineer/Video Editor/Graphics Designer"
          img={Paul}
          animate={"fade-down-right"}
        />
        <Personels
          name={"Samuel Thompson George"}
          role="CEO/CG Generalist/ Animator/ VFX Artist/ Game Developer"
          img={Samuel}
          animate={"zoom-in"}
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
      <div className="flex justify-center gap-[10%]" data-aos={"zoom-in"}>
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
      <div className="flex justify-center">
        <Personels
          name={"Funsho Cornelius Olusumbo"}
          role={"Sound Designer/Sound Engineer"}
          img={Cornelius}
          animate={"zoom-out-up"}
        />
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Sphere})`,
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
      className="p-[5rem] bg-cover mt-[15rem] h-[80vw] text-2xl"
    >
      <h3
        className="text-elPurple border-b font-bold text-7xl pb-[1rem] mb-[5rem]"
        data-aos={"fade-right"}
        data-aos-duration={"700"}
      >
        Meet The Team
      </h3>
      <div className="">
        <div className="members-row-one">
          <SeniorOfficers />
          <MiddleLevelOfficers />
          <JuniorLevelOfficer />
        </div>
      </div>
    </div>
  );
};

export default Team;
