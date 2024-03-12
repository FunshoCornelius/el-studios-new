import React from "react";
import ElLogo from "../images/logo.svg";

const Logo = (className) => {
  return (
    <div>
      <img src={ElLogo} className={className} alt="el-studios-logo" />
    </div>
  );
};

export default Logo;
