import React, { useEffect, useState } from "react";
import SectionHeader from "../Components/SectionHeader";

import Aos from "aos";
import "aos/dist/aos.css";

// import required modules

// Import Images
import animation from "../images/services/animation-img.svg";
import graphics from "../images/services/graphics-img.svg";
import motion from "../images/services/motion-graphics-img.svg";
import threeD from "../images/services/3D-modelling-img.svg";
import vfx from "../images/services/vfx-img.svg";
import gameDev from "../images/services/game-dev-img.svg";

import ServiceComponent from "../Components/ServiceComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Services = () => {
  const slidesData = [
    {
      id: 1,
      name: "Animation",
      img: animation,
      description:
        "Our animators specialize in 2D and 3D animation and are experienced in creating both character and motion graphics animations. Our animation services include concept design, story boarding, character design, asset creation, and animation.",
    },
    {
      id: 2,
      name: "VFX",
      img: vfx,
      description:
        "Our VFX team has extensive experience in creating realistic and seamless visual effects for film, television, and commercials. Our services include green screen removal, compositing, 3D tracking, particle simulations, and digital matte painting Etc",
    },
    {
      id: 3,
      name: "Game Development",
      img: gameDev,
      description:
        "Our game development team creates immersive games for desktop, mobile, and consoles. We specialize in concept design, game design, and artwork creation. We use industry-standard tools such as Unity and Unreal Engine to develop games that meet client expectations. Our end-to-end game development services ensure high-quality and timely delivery of games.",
    },
  ];

  const slidesData2 = [
    {
      id: 1,
      name: "Motion Design",
      img: motion,
      description:
        "Our motion graphics team specializes in creating animated graphics and typography for videos, presentations, and websites. Our services include concept design, story boarding, asset creation, animation, and sound design.",
    },
    {
      id: 2,
      name: "Graphics Design",
      img: graphics,
      description:
        "Our graphics design team specializes in creating high-quality and visually appealing designs for a wide range of applications, including branding, advertising, packaging, and digital media. We work closely with clients to bring their vision to life",
    },
    {
      id: 3,
      name: "3D Modelling",
      img: threeD,
      description:
        "Our 3D modeling team is highly skilled in creating realistic and detailed 3D models for film, television, and gaming industries. We offer services in character and prop modeling, environment and architectural visualization, and product design. Our team works closely with clients to deliver exceptional results.",
    },
  ];

  const [rightSlideIndex, setRightSlideIndex] = useState(0);

  const handleRightSlideIndex = (id) => {
    setRightSlideIndex(id);
  };
  const [leftSlideIndex, setLeftSlideIndex] = useState(0);

  const handleLeftSlideIndex = (id) => {
    setLeftSlideIndex(id);
  };

  // Service section component containing the 3 slider frames
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      id="services"
      className="bg-elPurple md:h-[100vh] h-[140vh] pb-[5rem]"
    >
      <SectionHeader
        color={"elLilac"}
        section={"SERVICES"}
        heading={"Our team is proficient in the following areas"}
        animate={"zoom-out"}
      />
      <div className="w-[90%] py-[5rem] md:py-[10rem] gap-[10rem] md:flex justify-between mx-auto">
        <div className="w-full md:w-[40%] md:mb-0 mb-[5rem]">
          <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            autoplay={true}
            slidesPerView={1}
            effect="fade"
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(slide) => handleLeftSlideIndex(slide.activeIndex)}
          >
            <SwiperSlide>
              <ServiceComponent img={slidesData[0].img} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceComponent img={slidesData[1].img} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceComponent img={slidesData[2].img} />
            </SwiperSlide>
          </Swiper>
          <div className="text-elLilac">
            <h3 className="font-bold text-[2rem] md:text-[2.8rem] my-[1.5rem]">
              {slidesData[leftSlideIndex].name}
            </h3>
            <p className="md:text-[2rem] h-[20vh] text-[1.6rem]">
              {slidesData[leftSlideIndex].description}
            </p>
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            autoplay={true}
            slidesPerView={1}
            effect="fade"
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(slide) => {
              handleRightSlideIndex(slide.activeIndex);
            }}
          >
            <SwiperSlide>
              <ServiceComponent img={slidesData2[0].img} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceComponent img={slidesData2[1].img} />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceComponent img={slidesData2[2].img} />
            </SwiperSlide>
          </Swiper>
          <div className="text-elLilac">
            <h3 className="font-bold text-[2rem] md:text-[2.8rem] my-[1.5rem]">
              {slidesData2[rightSlideIndex].name}
            </h3>
            <p className="md:text-[2rem] h-[20vh] md:h-auto text-[1.6rem]">
              {slidesData2[rightSlideIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
