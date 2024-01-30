import React from "react";
import img1 from "../images/el-gallery-1.svg";
import img2 from "../images/el-gallery-2.svg";
import img3 from "../images/el-gallery-3.svg";
import img4 from "../images/el-gallery-4.png";
import img5 from "../images/el-gallery-5.png";
import img6 from "../images/el-gallery-6.png";
import img7 from "../images/el-gallery-7.png";
import img8 from "../images/el-gallery-8.png";
import img9 from "../images/el-gallery-9.png";
import img10 from "../images/el-gallery-10.png";
import img11 from "../images/el-gallery-11.png";
import img12 from "../images/el-gallery-12.png";
import img13 from "../images/el-gallery-13.png";
import img14 from "../images/el-gallery-14.png";
import img15 from "../images/el-gallery-15.png";

const Gallery = () => {
  const images = [
    {
      src: img1,
      alt: "",
    },
    {
      src: img2,
      alt: "",
    },
    {
      src: img3,
      alt: "",
    },
    {
      src: img4,
      alt: "",
    },
    {
      src: img5,
      alt: "",
    },
    {
      src: img6,
      alt: "",
    },
    {
      src: img7,
      alt: "",
    },
    {
      src: img8,
      alt: "",
    },
    {
      src: img9,
      alt: "",
    },
    {
      src: img10,
      alt: "",
    },
    {
      src: img11,
      alt: "",
    },
    {
      src: img12,
      alt: "",
    },
    {
      src: img13,
      alt: "",
    },
    {
      src: img14,
      alt: "",
    },
    {
      src: img15,
      alt: "",
    },
  ];

  // const Image = ({ img, name, animate }) => {
  //   return <img src={img} className="shrink" alt={name} data-aos={animate} />;
  // };

  const Image = () => {
    return (
      <>
        {images.map((img, index) => (
          <li key={index}>
            <img src={img.src} alt={img.alt} />
          </li>
        ))}
      </>
    );
  };

  return (
    <>
      <section className="bg-elLilac w-full " id="gallery">
        <div className="">
          <p
            className={`text-elPurple border-b-2 py-[2rem] border-inherit border-solid px-[5rem] text-3xl`}
          >
            Gallery
          </p>
          <h3
            className={`text-center font-bold mt-[3rem] text-elPurple
             text-[3.6rem]`}
          >
            Explore a <span className="text-elPurpleSec">Gallery</span> of some
            of our past Projects
          </h3>
        </div>
        <div className="p-[10rem] grid grid-cols-3 justify-items-center items-center gap-[3rem]">
          <Image />
        </div>
      </section>
    </>
  );
};

export default Gallery;
