import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  const socialMediaPages = [
    {
      platform: "Instagram",
      icon: <FaInstagram />,
      link: "",
    },
    {
      platform: "Facebook",
      icon: <FaFacebook />,
      link: "",
    },
    {
      platform: "X",
      icon: <FaXTwitter />,
      link: "",
    },
    {
      platform: "Tik Tok",
      icon: <FaTiktok />,
      link: "",
    },
    {
      platform: "Gmail",
      icon: <MdAlternateEmail />,
      link: "",
    },
  ];

  return (
    <div className="flex flex-col gap-[3rem] text-3xl fixed bg-elPurple p-[2rem] z-10 bottom-[15%] shadow-2xl left-[5%] text-elLilac">
      {socialMediaPages.map((page, index) => (
        <a href={page.link} key={index}>{page.icon}</a>
      ))}
    </div>
  );
};

export default Socials;
