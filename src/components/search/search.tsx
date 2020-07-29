import React from "react";
import "./search.css";
import Form from "../form/form";

const Search = () => (
  <main className="search">
    <h1 className="search__title">Что в мире творится?</h1>
    <p className="search__text">
      Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за прошедшую неделю.
    </p>
    <Form />
  </main>
);

export default Search;
