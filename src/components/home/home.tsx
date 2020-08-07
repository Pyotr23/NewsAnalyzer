import React, { Component } from "react";
import HeaderWrapper from "../header-wrapper/header-wrapper";
import Cards from "../cards/cards";
import Author from "../author/author";
import Loading from "../loading/loading";
import NoResult from "../no-result/no-result";
import { IFormContext } from "../../ts/types";

export const FormContext = React.createContext<IFormContext>({
  inputErrorText: "Нужно ввести ключевое слово"
});

class Home extends Component {
  render() {
  return <FormContext.Provider value = {{ inputErrorText: "Нужно ввести ключевое слово" }}>
    <HeaderWrapper />
    <Loading />
    <NoResult />
    <Cards />
    <Author />
  </FormContext.Provider>
  }
}

export default Home;
