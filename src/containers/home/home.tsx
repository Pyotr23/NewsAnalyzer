import React, { Component } from "react";

import HeaderWrapper from "../../components/header-wrapper/header-wrapper";
import Cards from "../../components/cards/cards";
import Author from "../../components/author/author";
import Loading from "../../components/loading/loading";
import NoResult from "../../components/no-result/no-result";

import { IFormContext } from "../../ts/types";
import { REQUIRED_VALIDATE_INPUT_TEXT } from "../../ts/constants";
import NewsApi from "../../ts/modules/NewsApi";
import { INewsResponse, FormProps, FormState } from "../../ts/types";

export const FormContext = React.createContext<IFormContext>({
  onChange: () => {},
  onSubmit: () => {},
  inputStyle: "",
  errorText: "",
});

class Home extends Component {
  state = {
    value: "",
    error: "",
    inputStyle: "form__input"
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    let { error, inputStyle } = this.state;
    const isValid = value.length !== 0;
    error = isValid
      ? ""
      : REQUIRED_VALIDATE_INPUT_TEXT;
    inputStyle = isValid
      ? "form__input"
      : "form__input form__input_error";
    this.setState({
      value,
      error,
      isValid,
      inputStyle
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { error, value, inputStyle } = this.state;
    const isValid = value.length !== 0;
    error = isValid
      ? ""
      : REQUIRED_VALIDATE_INPUT_TEXT;
    inputStyle = isValid
      ? "form__input"
      : "form__input form__input_error";
    this.setState({
      value,
      error,
      isValid,
      inputStyle
    });
    if (isValid){
      NewsApi<INewsResponse>(value)
        .then((resp) => { console.log(resp) })
    }
    else {
      console.log("Плохо!");
    }
  }

  render() {
    const { inputStyle, error } = this.state;
  return <FormContext.Provider value = {{ onChange: this.handleInputChange, onSubmit: this.handleSubmit, inputStyle: inputStyle, errorText: error }}>
    <HeaderWrapper />
    <Loading />
    <NoResult />
    <Cards />
    <Author />
  </FormContext.Provider>
  }
}

export default Home;
