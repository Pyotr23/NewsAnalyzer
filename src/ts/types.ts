import {  FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS } from "./constants";

export interface INewsResponse {
  status: string,
  totalResults: number,
  articles: INews[]
}

export interface INews {
  source?: ISource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt?: Date,
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

export interface INewsState {
  pending: boolean,
  news: INews[],
  error: string
}

interface IFetchNewsPending {
  type: typeof FETCH_NEWS_PENDING
}

interface IFetchNewsSuccess {
  type: typeof FETCH_NEWS_SUCCESS,
  payload: INews[]
}

interface IFetchNewsError {
  type: typeof FETCH_NEWS_ERROR,
  payload: {
    error: string
  }
}

export type NewsActionTypes = IFetchNewsError | IFetchNewsSuccess | IFetchNewsPending;
