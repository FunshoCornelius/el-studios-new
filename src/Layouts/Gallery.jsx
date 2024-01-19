import React from "react";
import img1 from "../images/el-gallery-1.png";
import img2 from "../images/el-gallery-2.png";
import img3 from "../images/el-gallery-3.png";
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
import img16 from "../images/el-gallery-16.png";
import img17 from "../images/el-gallery-17.png";

const Gallery = ({ img, name, animate }) => {
  const Image = () => {
    return <img src={img} alt={name} data-aos={animate} />;
  };

  return (
    <section className="bg-elPurpleSec h-[100vh]" id="gallery">
      <div className="gallery-row-one flex gap-[2rem]">
        <Image img={img1} />.
        <Image img={img2} />.
        <Image img={img3} />.
      </div>
      <div className="gallery-row-two flex gap-[2rem]">
        <Image img={img4} />.
        <Image img={img5} />.
        <Image img={img6} />.
      </div>
      <div className="gallery-row-three flex gap-[2rem]">
        <Image img={img7} />.
        <Image img={img8} />.
        <Image img={img9} />.
      </div>
      <div className="gallery-row-four flex gap-[2rem]">
        {" "}
        <Image img={img10} />.
        <Image img={img11} />.
        <Image img={img12} />.
      </div>
      <div className="gallery-row-five flex gap-[2rem]">
        <Image img={img13} />.
        <Image img={img14} />.
        <Image img={img15} />.
      </div>
      <div className="gallery-row-six flex gap-[2rem]">
        <Image img={img16} />.
        <Image img={img17} />.
      </div>
    </section>
  );
};

export default Gallery;
