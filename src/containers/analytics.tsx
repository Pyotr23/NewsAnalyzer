import React, { Component } from "react";
import AnalyticsHeader from "../components/header/analytics-header";
import Digits from "../components/digits/digits";
import Daily from "../components/daily/daily";
import { RootState } from "../ts/reducers";
import { INewsState } from "../ts/reducers/news";
import { connect } from "react-redux";

class Analytics extends Component<INewsState> {
  constructor(props: INewsState){
    super(props);
  }

  render(){
    const { searchText, countInTitle, totalResults } = this.props;
    return <>
      <AnalyticsHeader />
      <Digits question={ searchText } total={ totalResults } countInTitle={ countInTitle }/>
      <Daily />
    </>
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    searchText: state.news.searchText,
    articles: state.news.articles,
    countInTitle: state.news.countInTitle,
    totalResults: state.news.totalResults
  }
}

export default connect(mapStateToProps, {}) (Analytics);
