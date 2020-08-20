import { FETCH_NEWS_ERROR, FETCH_NEWS_PENDING, FETCH_NEWS_SUCCESS, BAD_NEWS_API_RESULT, SHOW_MORE_NEWS, START_SHOWED_NEWS_COUNT } from "../constants";
import { IArticles, NewsActionTypes } from "../types";

export interface INewsState {
  pending: boolean,
  articles: IArticles[],
  error: string,
  currentShowedCount: number,
  searchText: string
}

const initialState: INewsState = {
  pending: false,
  articles: [],
  error: "",
  currentShowedCount: START_SHOWED_NEWS_COUNT,
  searchText: ""
}

const news = (state = initialState, action: NewsActionTypes): INewsState => {
  switch (action.type) {
    case FETCH_NEWS_PENDING:
      return {
        ...state,
        pending: true,
      }
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        pending: false,
        articles: action.payload.news,
        searchText: action.payload.searchText
      }
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        pending: false,
        error: BAD_NEWS_API_RESULT
      }
    case SHOW_MORE_NEWS:
      return {
        ...state,
        currentShowedCount: action.payload.currentShowedCount
      }
    default:
      return state;
  }
}

export default news;
