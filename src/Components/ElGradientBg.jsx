import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const ElGradientBg = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-elPurple flex md:h-[100vh] justify-center items-center">
      <img
        className="w-[60%]"
        src={require("../images/el-studio-gradient.svg").default}
        alt=""
        data-aos={"zoom-out-down"}
        data-aos-duration={"700"}
      />
    </div>
  );
};

export default ElGradientBg;
