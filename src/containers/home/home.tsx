import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import HeaderWrapper from "../../components/header-wrapper/header-wrapper";
import Cards from "../../components/cards/cards";
import Author from "../../components/author/author";
import Loading from "../../components/loading/loading";
import NoResult from "../../components/no-result/no-result";
import BadRequest from "../../components/bad-request/bad-request";

import { NewsActionTypes, IArticles } from "../../ts/types";
import { REQUIRED_VALIDATE_INPUT_TEXT, START_SHOWED_NEWS_COUNT } from "../../ts/constants";
import { fetchNews } from "../../ts/fetchers/fetchNews";
import { RootState } from "../../ts/reducers/index";
import { FormContext } from "../../ts/contexts";
import { showMore } from "../../ts/actions/actionCreator";
import { INewsState } from "../../ts/reducers/news";
import { GetNewShowedArticlesCount } from "../../ts/helpers";


interface HomeProps {
  fetchNews: (question: string) => (dispatch: Dispatch<NewsActionTypes>) => Promise<void | IArticles[]>,
  showMore: (count: number) => NewsActionTypes,
}

type HomeState = {
  value: string,
  noValidateText: string,
  inputStyle: string,
  isValid?: boolean
}


class Home extends Component<HomeProps & INewsState, HomeState> {
  constructor(props: HomeProps & INewsState){
    super(props);

  }

  state = {
    value: "",
    noValidateText: "",
    inputStyle: "form__input",
    showedNewsCount: this.props.showedNewsCount
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

  private _refreshFormState(value: string) {
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

  showMore = () => {
    const { showMore, showedNewsCount, articles } = this.props;
    showMore(GetNewShowedArticlesCount(articles, showedNewsCount));
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
    const { pending, error, articles, showedNewsCount } = this.props;
    return <FormContext.Provider value = { context }>
      <HeaderWrapper />
      { pending && <Loading />}
      { !pending && error && <BadRequest title={error} modClassName="title_place_bad-request" /> }
      { !pending && showedNewsCount > 0
        ? <Cards news={ articles } showedCount={ showedNewsCount } showMore={ this.showMore }/>
        : showedNewsCount != START_SHOWED_NEWS_COUNT && <NoResult />}
      <Author />
    </FormContext.Provider>
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    pending: state.news.pending,
    articles: state.news.articles,
    error: state.news.error,
    showedNewsCount: state.news.showedNewsCount
  }
}

const mapDispatchToProps = (dispatch: Dispatch<NewsActionTypes>) => ({
  fetchNews: bindActionCreators(fetchNews, dispatch),
  showMore: bindActionCreators(showMore, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps) (Home);
