import React, { Component } from "react";

import HeaderWrapper from "../../components/header-wrapper/header-wrapper";
import Cards from "../../components/cards/cards";
import Author from "../../components/author/author";
import Loading from "../../components/loading/loading";
import NoResult from "../../components/no-result/no-result";

import { IHomeContext } from "../../ts/types";
import { REQUIRED_VALIDATE_INPUT_TEXT } from "../../ts/constants";
import NewsApi from "../../ts/modules/NewsApi";
import { INewsResponse, IFormProps } from "../../ts/types";

export const FormContext = React.createContext<IHomeContext>({
  formProps: {
    onChange: () => {},
    onSubmit: () => {},
    inputStyle: "",
    errorText: "",
  }
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
    this._refreshFormState(value);
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { value } = this.state;
    this._refreshFormState(value);
    if (value.length !== 0){
      NewsApi<INewsResponse>(value)
        .then((resp) => { console.log(resp) })
    }
    else {
      console.log("Плохо!");
    }
  }

  private _refreshFormState(value: string): void {
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


  render() {
    const { inputStyle, error } = this.state;
    const context = {
      formProps: {
        onChange: this.handleInputChange,
        onSubmit: this.handleSubmit,
        inputStyle: inputStyle,
        errorText: error
      }
    }
    return <FormContext.Provider value = { context }>
      <HeaderWrapper />
      <Loading />
      <NoResult />
      <Cards />
      <Author />
    </FormContext.Provider>
  }
}

export default Home;
