import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Socials = ({ className }) => {
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
    <ul className={className}>
      {socialMediaPages.map((page, index) => (
        <li key={index}>
          <a href={page.link}>{page.icon}</a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
