import React from "react";

const ElGradientBg = () => {
  return (
    <div className="bg-elPurple flex justify-center items-center">
      <img
        className="w-[60%]"
        src={require("../images/el-studio-gradient.svg").default}
        alt=""
      />
    </div>
  );
};

export default ElGradientBg;
