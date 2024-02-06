import React from "react";
import img1 from "../images/gallery/el-gallery-1.png";
import img2 from "../images/gallery/el-gallery-2.png";
import img3 from "../images/gallery/el-gallery-3.png";
import img4 from "../images/gallery/el-gallery-4.png";
import img5 from "../images/gallery/el-gallery-5.png";
import img6 from "../images/gallery/el-gallery-6.png";
import img7 from "../images/gallery/el-gallery-7.png";
import img8 from "../images/gallery/el-gallery-8.png";
import img9 from "../images/gallery/el-gallery-9.png";
import img10 from "../images/gallery/el-gallery-10.png";
import img11 from "../images/gallery/el-gallery-11.png";
import img12 from "../images/gallery/el-gallery-12.png";
import img13 from "../images/gallery/el-gallery-13.png";
import img14 from "../images/gallery/el-gallery-14.png";
import img15 from "../images/gallery/el-gallery-15.png";
import "aos/dist/aos.css";

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

const GalleryImages = () => {
  return (
    <div className="p-[10rem] grid grid-cols-8 justify-items-center items-center gap-y-[5rem] h-[100vh] overflow-scroll">
      {images.map((img, index) => (
        <li key={index} className={`list-none gallery_img-${index + 1}`}>
          <img src={img.src} alt={img.alt} />
        </li>
      ))}
    </div>
  );
};

export default GalleryImages;
