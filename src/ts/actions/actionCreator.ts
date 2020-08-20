import { FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, SHOW_MORE_NEWS } from "../constants";
import { NewsActionTypes, IArticles } from "../types";

export const fetchNewsPending = (): NewsActionTypes => ({
  type: FETCH_NEWS_PENDING,
})

export const fetchNewsSuccess = (news: IArticles[], searchText: string): NewsActionTypes => ({
  type: FETCH_NEWS_SUCCESS,
  payload: {
    news: [
      ...news
    ],
    searchText: searchText
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
