import React, { useEffect } from "react";
import bg from "../images/client/el-client-bg.svg";
import meta from "../images/client/el-client-meta.png";
import ror from "../images/client/el-client-ror.png";
import kininso from "../images/client/el-client-kininso.png";
import carel from "../images/client/el-client-carel.png";
import oxygen from "../images/client/el-client-oxygen.png";
import para from "../images/client/el-client-para.png";
import sf from "../images/client/el-client-sf.png";
import ybnl from "../images/client/el-client-ybnl.png";
import wg from "../images/client/el-client-wg.png";
import lw from "../images/client/el-client-lw.png";
import lcc from "../images/client/el-client-lcc.png";
import near from "../images/client/el-client-near.png";
import vote from "../images/client/el-client-vote.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const clients = [
    { id: 1, img: near, alt: "Near Hub" },
    { id: 2, img: meta, alt: "Meta Card" },
    { id: 3, img: sf, alt: "Squared Financial" },
    { id: 4, img: para, alt: "Paradigm Initiative" },
    { id: 5, img: ybnl, alt: "YBNL" },
    { id: 6, img: carel, alt: "Carel Films" },
    { id: 7, img: wg, alt: "WG Films" },
    { id: 8, img: kininso, alt: "Kininso Koncepts" },
    { id: 9, img: oxygen, alt: "Oxygen Films" },
    { id: 10, img: lw, alt: "Love World" },
    { id: 11, img: lcc, alt: "Life Changers Church" },
    { id: 12, img: ror, alt: "Rapsody of Realities" },
    { id: 13, img: vote, alt: "Vote023" },
  ];

  const Client = () => {
    return clients.map(({ img, alt, id }) => (
      <img src={img} alt={alt} key={id} data-aos={"zoom-in"} />
    ));
  };

  return (
    <section id="clients" className="bg-elLilac overflow-hidden relative">
      <div className="">
        <p
          className={`text-elPurple border-b-2 py-[2rem] border-inherit border-solid px-[2.5rem] md:px-[5rem] text-3xl`}
        >
          Clients
        </p>
        <h3
          className={`text-center font-bold md:my-[3rem] md:px-[5rem] text-elPurple md:text-[4rem] text-[2.4rem]`}
        >
          Think of us as shepherds who guides{" "}
          <span className="text-elPurpleSec">Industry giants</span> to the
          summit of product excellence
        </h3>
      </div>
      <div className="relative z-10 grid w-full md:grid-cols-2 lg:grid-cols-3 h-[100vh] overflow-scroll justify-center items-center px-[3rem] md:px-[10rem] py-[5rem] gap-[2rem]">
        <Client />
      </div>
      <img
        src={bg}
        className="w-[60%] absolute bottom-[-50%] translate-y-[-50%]"
        alt="background"
      />
    </section>
  );
};

export default Clients;
