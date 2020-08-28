import React, { Component, Dispatch } from "react";
import AboutHeader from "../header/about-header";
import Description from "../description/description";
import Stack from "../stack/stack";
import Author from "../author/author";
import Commits from "../commits/commits";
import { IFetchCommitsSuccess, ICommitCard, NewsActionTypes } from "../../ts/types";
import { fetchCommits } from "../../ts/fetchers/fetchCommits";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../ts/reducers";

type AboutProps = {
  fetchCommits: () => (dispatch: Dispatch<IFetchCommitsSuccess>) => Promise<ICommitCard[]>
}

class About extends Component<AboutProps, {}>{
  constructor(props: AboutProps){
    super(props);
  }

  render(){
    fetchCommits();
    return <>
      <AboutHeader />
      <Description />
      <Stack />
      <Author />
      <Commits />
    </>
  }
}

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchCommits: bindActionCreators(fetchCommits, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps) (About);
