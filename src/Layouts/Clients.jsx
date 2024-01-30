import React, { useEffect } from "react";
import SectionHeader from "../Components/SectionHeader";
import bg from "../images/el-client-bg.svg";
import meta from "../images/el-client-meta.png";
import ror from "../images/el-client-ror.png";
import kininso from "../images/el-client-kininso.png";
import carel from "../images/el-client-carel.png";
import oxygen from "../images/el-client-oxygen.png";
import para from "../images/el-client-para.png";
import sf from "../images/el-client-sf.png";
import ybnl from "../images/el-client-ybnl.png";
import wg from "../images/el-client-wg.png";
import lw from "../images/el-client-lw.png";
import lcc from "../images/el-client-lcc.png";
import near from "../images/el-client-near.png";
import vote from "../images/el-client-vote.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const clients = [
    { img: ror, alt: "Rapsody of Realities" },
    { img: meta, alt: "Meta Card" },
    { img: sf, alt: "Squared Financial" },
    { img: para, alt: "Paradigm Initiative" },
    { img: ybnl, alt: "YBNL" },
    { img: carel, alt: "Carel Films" },
    { img: wg, alt: "WG Films" },
    { img: kininso, alt: "Kininso Koncepts" },
    { img: oxygen, alt: "Oxygen Films" },
    { img: lw, alt: "Love World" },
    { img: lcc, alt: "Life Changers Church" },
    { img: near, alt: "Near Hub" },
    { img: vote, alt: "Vote023" },
  ];

  const Client = () => {
    return clients.map(({ img, alt }) => (
      <img src={img} alt={alt} data-aos={"zoom-in"} />
    ));
  };

  return (
    <section id="clients" className="bg-elLilac relative">
      <SectionHeader
        section={"CLIENTS"}
        color={"elPurple"}
        heading={
          "Think of us as the shepherds who guides industry giants to the summit of product excellence"
        }
        animate={"fade-right"}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-[10rem] py-[5rem] gap-[3rem]">
        <Client />
        <img
          src={bg}
          className="absolute bottom-[-50%] left-[-10%] z-[-1]"
          alt="background"
        />
      </div>
    </section>
  );
};

export default Clients;
