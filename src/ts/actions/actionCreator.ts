import { FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, BAD_NEWS_API_RESULT } from "../constants";
import { NewsActionTypes, INews, INewsResponse } from "../types";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import getNews from "../modules/NewsApi";

export const fetchNewsPending = (): NewsActionTypes => ({
  type: FETCH_NEWS_PENDING
})

export const fetchNewsSuccess = (news: INews[]): NewsActionTypes => ({
  type: FETCH_NEWS_SUCCESS,
  payload: {
    ...news
  }
})

export const fetchNewsError = (error: string): NewsActionTypes => ({
  type: FETCH_NEWS_ERROR,
  payload: {
    error: error
  }
})
