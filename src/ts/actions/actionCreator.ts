import { FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, SHOW_MORE_NEWS, FETCH_COUNT_IN_TITLE, FETCH_COMMITS_SUCCESS } from "../constants";
import { NewsActionTypes, IArticle, ICommitCard, IFetchCommitsSuccess } from "../types";

export const fetchNewsPending = (): NewsActionTypes => ({
  type: FETCH_NEWS_PENDING,
})

export const fetchNewsSuccess = (news: IArticle[], searchText: string, total: number): NewsActionTypes => ({
  type: FETCH_NEWS_SUCCESS,
  payload: {
    news: [
      ...news
    ],
    searchText: searchText,
    totalResults: total
  }
})

export const fetchNewsError = (error: string): NewsActionTypes => ({
  type: FETCH_NEWS_ERROR,
  payload: {
    error: error
  }
})

export const showMore = (currentShowedCount: number): NewsActionTypes => ({
  type: SHOW_MORE_NEWS,
  payload: {
    currentShowedCount: currentShowedCount
  }
})

export const fetchCountInTitleSuccess = (count: number): NewsActionTypes => ({
  type: FETCH_COUNT_IN_TITLE,
  payload: {
    countInTitle: count
  }
})

export const fetchCommitsSuccess = (commitCards: ICommitCard[]): IFetchCommitsSuccess => ({
  type: FETCH_COMMITS_SUCCESS,
  payload: {
    commitCards: commitCards
  }
})
