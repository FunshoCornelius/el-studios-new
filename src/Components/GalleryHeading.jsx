import React from "react";

const GalleryHeading = () => {
  return (
    <div className="">
      <p
        className={`text-elPurple border-b-2 py-[2rem] border-inherit border-solid px-[5rem] text-3xl`}
      >
        Gallery
      </p>
      <h3
        className={`text-center font-bold my-[3rem] text-elPurple text-[2rem] md:text-[4rem]`}
      >
        Explore a <span className="text-elPurpleSec">Gallery</span> of some of
        our past Projects
      </h3>
    </div>
  );
};

export default GalleryHeading;
