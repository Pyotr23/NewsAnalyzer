import React from 'react';
import './header.css';
import Ref from "../ref/ref";

const HomeHeader = () => (
  <div className="header">
      <Ref href="/">
        <img className="header__logo" alt="NewsAnalyzer"/>
      </Ref>
    <nav className="header__nav-menu">
      <ul className="header__page-links">
        <li className="header__link-item header__link-item_color_white" >
          <Ref text="Главная" href="/" modClassNames="ref_color_white" />
        </li>
        <li className="header__link-item">
          <Ref text="О проекте" href="/about" modClassNames="ref_hover_white"/>
        </li>
      </ul>
    </nav>
  </div>
);

export default HomeHeader;
