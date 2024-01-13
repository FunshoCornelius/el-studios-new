import React from "react";
import Samuel from "../images/samuel-el.png";
import Faith from "../images/faith-el.png";
import Cornelius from "../images/funsho-cornelius.png";
import Joshua from "../images/joshua-el.png";
import Chucks from "../images/chuks-el.png";
import Paul from "../images/paul-okwerre-el.png";
import Sphere from "../images/team-elipse.svg";

const teamInfo = [
  {
    id: 1,
    name: "Paul Okwerre",
    role: "COO/Sound Engineer/Video Editor/Graphics Designer",
    img: Paul,
    col: 1,
    row: 1,
  },

  {
    id: 2,
    name: "Samuel Thompson George",
    role: "CEO/CG Generalist/ Animator/ VFX Artist/ Game Developer",
    img: Samuel,
    col: 3,
    row: 1,
  },
  {
    id: 3,
    name: "Chuckwuma Nwokeoji",
    role: "CCO/Cinematographer",
    img: Chucks,
    col: 5,
    row: 1,
  },
  {
    id: 4,
    name: "Joshua Mbaya",
    role: "Creative Director/CG Generalist",
    img: Joshua,
    col: 2,
    row: 2,
  },
  {
    id: 5,
    name: "Faith Olateju Olatide",
    role: "Chief Operating Manager",
    img: Faith,
    col: 4,
    row: 2,
  },
  {
    id: 6,
    name: "Funsho Cornelius Olusumbo",
    role: "Sound Designer/ Sound Engineer",
    img: Cornelius,
    col: 3,
    row: 3,
  },
];

const Members = teamInfo.map((member) => (
  <figure key={member.id} className={`grid-item-${member.id}`}>
    <img src={member.img} alt={member.name} />
    <h4>{member.name}</h4>
    <p>{member.role}</p>
  </figure>
));

const Team = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Sphere})`,
      }}
      className="p-[5rem] bg-cover"
    >
      <h3 className="text-elPurple border-b font-bold text-7xl pb-[1rem] mb-[5rem]">
        Meet The Team
      </h3>
      <div className=" grid grid-cols-5 grid-rows-3 h-[100vh] bg-cover ">
        {Members}
      </div>
    </div>
  );
};

export default Team;
