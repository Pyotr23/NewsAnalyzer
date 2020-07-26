import React from 'react';
import './header-info.css';
import logo from "../../images/header-info/logo.svg";
import Ref from "../ref/ref";

const HomeHeaderInfo = () => (
  <div className="header-info">
    <img className="header-info__logo" src={logo} alt="NewsAnalyzer"/>
    <nav className="header-info__nav-menu">
      <ul className="header-info__page-links">
        <li className="header-info__link-item header-info__link-item_color_white" >
          <Ref text="Главная" href="/" modClassNames="ref_color_white" />
        </li>
        <li className="header-info__link-item">
          <Ref text="О проекте" href="/about"/>
        </li>
      </ul>
    </nav>
  </div>
);

export default HomeHeaderInfo;
