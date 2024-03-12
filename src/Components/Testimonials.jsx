import React from "react";
import TeamHeader from "./TeamHeader";
import TeamTestimonialMessage from "./TeamTestimonialMessage";
import TeamTestimonialImages from "./TeamTestimonialImages";

const Testimonials = () => {
  return (
    <div className="bg-elPurple py-[10rem] px-[2rem] md:px-[5rem]">
      <TeamHeader heading={"What They Said"} color={"elLilac"} />
      <div className="flex items-center gap-[10%] text-elLilac overflow-scroll justify-between">
        <TeamTestimonialMessage />
        <TeamTestimonialImages />
      </div>
    </div>
  );
};

export default Testimonials;
