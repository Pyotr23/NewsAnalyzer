import { NewsActionTypes, INewsResponse, IFetchCommitsSuccess, IDetailedCommit, ICommitCard } from "../types";
import { fetchNewsError, fetchNewsPending, fetchNewsSuccess, showMore, fetchCountInTitleSuccess, fetchCommitsSuccess } from "../actions/actionCreator";
import { Dispatch } from "react";
import { getCommits } from "../modules/GitHubApi";
import CommitCard from "../commiCard";

export const fetchCommits = () => async (dispatch: Dispatch<NewsActionTypes | IFetchCommitsSuccess>) => {
    // dispatch(fetchNewsPending());
    try {
      const res = await getCommits<IDetailedCommit[]>();
      const cards = res.map(item => new CommitCard(item));
      dispatch(fetchCommitsSuccess(cards));
      console.log(cards);
      return cards;
    }
    catch (error) {
      return dispatch(fetchNewsError(error));
    }
  }
