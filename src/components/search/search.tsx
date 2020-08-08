import React from "react";
import "./search.css";
import Form from "../form/form";
import { FormContext } from "../../containers/home/home";
import { IFormContext } from "../../ts/types";

const Search: React.FC = (): React.ReactElement => (
  <FormContext.Consumer>
    {({ onChange, onSubmit, inputStyle, errorText }: IFormContext) => (
      <main className="search">
       <h1 className="search__title">Что в мире творится?</h1>
       <p className="search__text">
         Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за прошедшую неделю.
       </p>
       <Form onChange={ onChange } onSubmit={ onSubmit } inputStyle={ inputStyle } errorText={errorText}/>
     </main>
    )}
  </FormContext.Consumer>
);

export default Search;
