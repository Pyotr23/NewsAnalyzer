import {  FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, SHOWED_NEWS_PACK_SIZE, SHOW_MORE_NEWS } from "./constants";

export interface INewsResponse {
  status: string,
  totalResults: number,
  articles: IArticles[]
}

export interface IArticles {
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
  type: typeof FETCH_NEWS_PENDING
}

interface IFetchNewsSuccess {
  type: typeof FETCH_NEWS_SUCCESS,
  payload: IArticles[]
}

interface IFetchNewsError {
  type: typeof FETCH_NEWS_ERROR,
  payload: {
    error: string
  }
}

interface IShowMoreNews {
  type: typeof SHOW_MORE_NEWS,
  payload: number
}

export type NewsActionTypes = IFetchNewsError | IFetchNewsSuccess | IFetchNewsPending | IShowMoreNews;
