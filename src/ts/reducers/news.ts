import { FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, BAD_NEWS_API_RESULT } from "../constants";
import { load } from "redux-localstorage-simple";
import { INews, INewsState, NewsActionTypes } from "../types";

const savedNews: any = load({ namespace: "home" });

const initialState: INewsState = {
  pending: false,
  news: (savedNews && savedNews.news) ? savedNews.news : [],
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
        news: action.payload
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
