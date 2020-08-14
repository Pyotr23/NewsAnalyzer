import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import HeaderWrapper from "../../components/header-wrapper/header-wrapper";
import Cards from "../../components/cards/cards";
import Author from "../../components/author/author";
import Loading from "../../components/loading/loading";
import NoResult from "../../components/no-result/no-result";

import { NewsActionTypes, INews } from "../../ts/types";
import { REQUIRED_VALIDATE_INPUT_TEXT, BAD_NEWS_API_RESULT } from "../../ts/constants";
import fetchNews from "../../ts/fetchers/fetchNews";
import { RootState } from "../../ts/reducers/index";
import { FormContext } from "../../ts/contexts";


type HomeProps = {
  fetchNews: (question: string) => (dispatch: Dispatch<NewsActionTypes>) => Promise<void | INews[]>,
  pending: boolean,
  news: INews[],
  noValidateText: string
}


class Home extends Component<HomeProps, {}> {
  constructor(props: HomeProps){
    super(props);

  }

  state = {
    value: "",
    noValidateText: "",
    inputStyle: "form__input",
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
      const { fetchNews } = this.props;
      fetchNews(value);
    }
  }

  private _refreshFormState(value: string): void {
    let { noValidateText, inputStyle } = this.state;
    const isValid = value.length !== 0;
    noValidateText = isValid
      ? ""
      : REQUIRED_VALIDATE_INPUT_TEXT;
    inputStyle = isValid
      ? "form__input"
      : "form__input form__input_error";
    this.setState({
      value,
      noValidateText,
      isValid,
      inputStyle
    });
  }


  render() {
    const { inputStyle, noValidateText } = this.state;
    const context = {
      formProps: {
        onChange: this.handleInputChange,
        onSubmit: this.handleSubmit,
        inputStyle: inputStyle,
        noValidateText: noValidateText
      }
    }
    const { pending } = this.props;
    return <FormContext.Provider value = { context }>
      <HeaderWrapper />
      {pending && <Loading />}
      <NoResult />
      <Cards />
      <Author />
    </FormContext.Provider>
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    pending: state.news.pending,
    news: state.news.news,
    error: state.news.error
  }
}

const mapDispatchToProps = (dispatch: Dispatch<NewsActionTypes>) => {
  return bindActionCreators(
    {
      fetchNews
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps) (Home);
