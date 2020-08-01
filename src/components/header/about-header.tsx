import React from 'react';
import './header.css';
import Ref from "../ref/ref";
import smallLogo from "../../images/header/logo-black.svg";
import largeLogo from "../../images/header/logo-black-large.svg";

const AboutHeader = () => (
  <div className="header">
    <Ref href="/">
      <picture>
        <source srcSet={largeLogo} media="(min-width: 423px)" />
        <img className="header__logo" src={smallLogo} alt="логотип" />
      </picture>
    </Ref>
    <nav className="header__nav-menu">
      <ul className="header__page-links">
        <li className="header__link-item" >
          <Ref text="Главная" href="/" modClassNames="ref_hover_black"/>
        </li>
        <li className="header__link-item header__link-item_color_black">
          <Ref text="О проекте" href="/about" modClassNames="ref_color_black" />
        </li>
      </ul>
    </nav>
  </div>
);

export default AboutHeader;
