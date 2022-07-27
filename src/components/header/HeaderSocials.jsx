import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/lelyak-andriy-3a599123a/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Lelyak-Andriy"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/lelyakandriy"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
