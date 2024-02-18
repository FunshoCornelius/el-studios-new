import React from "react";

const TeamTestimonialImages = () => {
  const imgArray = [
    {
      id: 1,
      img: require("../images/testimonials/samuel-testimonial.png"),
      alt: "Samuel Thompson George, CEO, El Studios",
    },
    {
      id: 2,
      img: require("../images/testimonials/paul-testimonial.png"),
      alt: "Paul Okwerre",
    },
    {
      id: 3,
      img: require("../images/testimonials/chucks-testimonial.png"),
      alt: "Chucks Nwokeoji",
    },
    {
      id: 4,
      img: require("../images/testimonials/faith-testimonial.png"),
      alt: "Olatide Faith",
    },
    {
      id: 5,
      img: require("../images/testimonials/joshua-testimonial.png"),
      alt: "Joshua Mbaya",
    },
    {
      id: 6,
      img: require("../images/testimonials/cornelius-testimonial.png"),
      alt: "Funsho Cornelius Olusumbo",
    },
  ];
  return (
    <div className="h-[60vh] flex flex-col items-end w-[30%] overflow-scroll testimonial">
      {imgArray.map((img) => (
        <div
          key={img.id}
          className=" flex gap-[2rem] items-center cursor-pointer mb-[5rem]"
        >
          <img
            src={require("../images/left-arrow-polygon.svg").default}
            alt={"testimonial pointer "}
          />
          <img src={img.img} className="w-[full]" alt={img.alt} />
        </div>
      ))}
    </div>
  );
};

export default TeamTestimonialImages;
