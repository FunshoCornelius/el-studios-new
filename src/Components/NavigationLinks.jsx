import React from "react";

const NavigationLinks = ({ className }) => {
  const linkTitle = [
    {
      id: 1,
      name: "Home",
      to: "",
    },
    {
      id: 2,
      name: "About",
      to: "about",
    },
    {
      id: 3,
      name: "Services",
      to: "services",
    },
    {
      id: 4,
      name: "Clients",
      to: "clients",
    },
    {
      id: 5,
      name: "Gallery",
      to: "gallery",
    },
    {
      id: 6,
      name: "Process",
      to: "process",
    },

    {
      id: 7,
      name: "Pricing",
      to: "pricing",
    },
  ];

  return linkTitle.map((link) => (
    <li key={link.id} className={className}>
      <a href={`#${link.to}`} duration={500}>
        {link.name}
      </a>
    </li>
  ));
};

export default NavigationLinks;
