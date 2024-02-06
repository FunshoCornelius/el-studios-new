import React from "react";
import GalleryImages from "../Components/GalleryImages";
import GalleryHeading from "../Components/GalleryHeading";
import Testimonials from "../Components/Testimonials";

// const Image = ({ img, name, animate }) => {
//   return <img src={img} className="shrink" alt={name} data-aos={animate} />;
// };

const Gallery = () => {
  return (
    <section className="bg-elLilac w-full " id="gallery">
      <GalleryHeading />
      <GalleryImages />
      <Testimonials />
    </section>
  );
};

export default Gallery;
