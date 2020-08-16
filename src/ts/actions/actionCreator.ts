import { FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, SHOW_MORE_NEWS } from "../constants";
import { NewsActionTypes, IArticles } from "../types";

export const fetchNewsPending = (): NewsActionTypes => ({
  type: FETCH_NEWS_PENDING
})

export const fetchNewsSuccess = (news: IArticles[]): NewsActionTypes => ({
  type: FETCH_NEWS_SUCCESS,
  payload: [
    ...news
  ]
})

export const fetchNewsError = (error: string): NewsActionTypes => ({
  type: FETCH_NEWS_ERROR,
  payload: {
    error: error
  }
})

export const showMore = (showedNewsCount: number): NewsActionTypes => ({
  type: SHOW_MORE_NEWS,
  payload: showedNewsCount
})
