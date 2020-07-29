import React from 'react';
import './header.css';
import logo from "../../images/header/logo-black.svg";
import Ref from "../ref/ref";

const AnalyticsHeader = () => (
  <div className="header">
    <Ref href="/">
      <img className="header__logo header__logo_black" alt="NewsAnalyzer"/>
    </Ref>
    <nav className="header__nav-menu">
      <ul className="header__page-links">
        <li className="header__link-item" >
          <Ref text="Главная" href="/" modClassNames="ref_hover_black"/>
        </li>
        <li className="header__link-item">
          <Ref text="О проекте" href="/about" modClassNames="ref_hover_black"/>
        </li>
      </ul>
    </nav>
  </div>
);

export default AnalyticsHeader;
