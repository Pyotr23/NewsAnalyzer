import React from "react";
import logo from "../../images/header/logo.svg";
import "./header.css";
import "../title/title";
import Title from "../title/title";
import Form from "../form/form";
import Link from "../link/link";

const Header = () => (
  <header className="header">
      <div className="header__info">
        <img className="header__logo" src={logo} alt="NewsAnalyzer"/>
        <nav className="header__nav-menu">
          <ul className="header__page-links">
            <li className="header__link-item">
              <a>
                Главная
              </a>
            </li>
            <li className="header__link-item header__link-item_active">
              <a>
                О проекте
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Title title="Что в мире творится?" modificatorClassName="title_place_header"/>
      <p className="header__text">
        Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за прошедшую неделю.
      </p>
      <Form />
  </header>
);

export default Header;
