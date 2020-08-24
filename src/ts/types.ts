import {  FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, SHOW_MORE_NEWS, FETCH_COUNT_IN_TITLE, FETCH_COMMITS_SUCCESS } from "./constants";

export interface IDetailedCommit {
  sha: string,
  node_id: string,
  commit: ICommit,
  url: string,
  html_url: string,
  comments_url: string,
  author: IDetailedPerson,
  parents: IParent[]
}

export interface ICommitCard {
  name: string,
  email: string,
  date: Date,
  message: string,
  avatarUrl: string
}

interface IParent {
  sha: string,
  url: string,
  html_url: string
}

interface IDetailedPerson {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean
}

interface ICommit {
  author: IPerson,
  committer: IPerson,
  message: string,
  tree: ITree,
  url: string,
  comment_count: number,
  verification: IVerification
}

interface IVerification {
  verified: boolean,
  reason: string,
  signature: null,
  payload: null
}

interface ITree {
  sha: string,
  url: string
}

interface IPerson {
  name: string,
  email: string,
  date: Date
}

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

export interface IFetchCommitsSuccess {
  type: typeof FETCH_COMMITS_SUCCESS,
  payload: {
    commitCards: ICommitCard[]
  }
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
