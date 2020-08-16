import { FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, BAD_NEWS_API_RESULT, SHOW_MORE_NEWS } from "../constants";
import { load } from "redux-localstorage-simple";
import { IArticles, NewsActionTypes } from "../types";

export interface INewsState {
  pending: boolean,
  articles: IArticles[],
  error: string,
  showedNewsCount: number
}

const savedNews: any = load({ namespace: "home" });

const initialState: INewsState = {
  pending: false,
  articles: (savedNews && savedNews.news && savedNews.news.articles) ? savedNews.news.articles : [],
  error: "",
  showedNewsCount: (savedNews && savedNews.news && savedNews.news.showedNewsCount) ? savedNews.news.showedNewsCount : 3,
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
        articles: action.payload,
        showedNewsCount: 3
      }
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        pending: false,
        error: BAD_NEWS_API_RESULT
      }
    case SHOW_MORE_NEWS:
      console.log(action.payload);
      return {
        ...state,
        showedNewsCount: action.payload
      }
    default:
      return state;
  }
}

export default news;
