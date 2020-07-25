import React from "react";
import "./header.css";
import "../title/title";
import Form from "../form/form";
import HeaderInfo from "../header-info/header-info";

const Header = () => (
  <header className="header">
    <HeaderInfo isHomeActive={true} />
      <h1 className="header__title">Что в мире творится?</h1>
      <p className="header__text">
        Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за прошедшую неделю.
      </p>
      <Form />
  </header>
);

export default Header;
