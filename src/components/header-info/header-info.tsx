import React, { FunctionComponent } from 'react';
import './header-info.css';
import logo from "../../images/header/logo.svg";
import Ref from "../ref/ref";

type HeaderInfoProps = {
  isHomeActive?: boolean
}

const HeaderInfo: FunctionComponent<HeaderInfoProps> = ({ isHomeActive }) => {
  console.log(isHomeActive);
  const activeLink = "header-info__link-item header-info__link-item_active";
  const simpleLink = "header-info__link-item";
  return <div className="header-info">
    <img className="header-info__logo" src={logo} alt="NewsAnalyzer"/>
    <nav className="header-info__nav-menu">
      <ul className="header-info__page-links">
        <li className={isHomeActive ? activeLink : simpleLink} >
          <Ref text="Главная" href="/" modClassNames={isHomeActive ?  "ref_color_white" : ""} />
        </li>
        <li className={isHomeActive ? simpleLink : activeLink}>
          <Ref text="О проекте" href="/about" modClassNames={isHomeActive ? "" : "ref_color_white"}/>
        </li>
      </ul>
    </nav>
  </div>
};

export default HeaderInfo;
