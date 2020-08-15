import { FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, BAD_NEWS_API_RESULT } from "../constants";
import { load } from "redux-localstorage-simple";
import { IArticles, NewsActionTypes } from "../types";

export interface INewsState {
  pending: boolean,
  articles: IArticles[],
  error: string
}

const savedNews: any = load({ namespace: "home" });

const initialState: INewsState = {
  pending: false,
  // articles: [],
  articles: (savedNews && savedNews.news) ? savedNews.news.articles : [],
  error: ""
}

const news = (state = initialState, action: NewsActionTypes): INewsState => {
  switch (action.type) {
    case FETCH_NEWS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        pending: false,
        articles: action.payload
      }
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        pending: false,
        error: BAD_NEWS_API_RESULT
      }
    default:
      return state;
  }
}

export default news;
