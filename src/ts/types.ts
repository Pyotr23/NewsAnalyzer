import {  FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, SHOW_MORE_NEWS, FETCH_COUNT_IN_TITLE } from "./constants";

export interface ITableRow {
  dayNumber: number,
  day: string,
  count: number,
  percent: number
}

export interface INewsResponse {
  status: string,
  totalResults: number,
  articles: IArticle[]
}

export interface IArticle {
  source: ISource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: Date,
  content: string
}

interface ISource {
  id?: string,
  name: string
}

export interface IFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputStyle: string,
  noValidateText: string,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}

export interface IHomeContext {
  formProps: IFormProps
}

interface IFetchNewsPending {
  type: typeof FETCH_NEWS_PENDING,
}

interface IFetchNewsSuccess {
  type: typeof FETCH_NEWS_SUCCESS,
  payload: {
    news: IArticle[],
    searchText: string,
    totalResults: number
  }
}

interface IFetchNewsError {
  type: typeof FETCH_NEWS_ERROR,
  payload: {
    error: string
  }
}

interface IShowMoreNews {
  type: typeof SHOW_MORE_NEWS,
  payload: {
    currentShowedCount: number
  }
}

interface IFetchCountInTitle {
  type: typeof FETCH_COUNT_IN_TITLE,
  payload: {
    countInTitle: number
  }
}

export type NewsActionTypes = IFetchNewsPending | IFetchNewsError | IFetchNewsSuccess | IShowMoreNews | IFetchCountInTitle;
