import React from "react";
import "./footer.css";
import Ref from "../ref/ref";
import facebookIcon from "../../images/footer/Facebook.svg";
import githubIcon from "../../images/footer/github.svg";

const Footer = () => (
  <footer className="footer">
    <div className="footer__text-container">
      <nav className="footer__nav-menu">
        <ul className="footer__page-links">
          <li className="footer__link-item">
            <Ref text="Главная" href="/" modClassNames="ref_place_footer"/>
          </li>
          <li className="footer__link-item">
            <Ref text="О проекте" href="/about" modClassNames="ref_place_footer"/>
          </li>
          <li className="footer__link-item">
            <Ref text="Яндекс.Практикум" href="https://praktikum.yandex.ru" modClassNames="ref_place_footer"/>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">
        &copy; 2020 by Pyotr Kolesnikov
      </p>
    </div>
    <ul className="footer__icons">
      <li className="footer__icon-item">
        <Ref href="https:\\www.github.com">
          <img src={githubIcon} alt="иконка Github"/>
        </Ref>
      </li>
      <li className="footer__icon-item">
        <Ref href="https:\\www.facebook.com">
          <img src={facebookIcon} alt="иконка Facebook"/>
        </Ref>
      </li>
    </ul>
  </footer>
);

export default Footer;
