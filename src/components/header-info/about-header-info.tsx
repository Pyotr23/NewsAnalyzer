import React from 'react';
import './header-info.css';
import logo from "../../images/header-info/logo-black.svg";
import Ref from "../ref/ref";

const AboutHeaderInfo = () => (
  <div className="header-info header-info_not-home">
    <img className="header-info__logo" src={logo} alt="NewsAnalyzer"/>
    <nav className="header-info__nav-menu">
      <ul className="header-info__page-links">
        <li className="header-info__link-item" >
          <Ref text="Главная" href="/"/>
        </li>
        <li className="header-info__link-item header-info__link-item_color_black">
          <Ref text="О проекте" href="/about" modClassNames="ref_color_black" />
        </li>
      </ul>
    </nav>
  </div>
);

export default AboutHeaderInfo;
