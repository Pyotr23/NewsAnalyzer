import { ADD_ARTICLES } from "../ts/constants";
import { load } from "redux-localstorage-simple";
import { INews, IGetArticlesAction } from "../ts/types";

type HomeState = INews[]

const savedNews: any = load({ namespace: "home" });

const initialState: HomeState = (savedNews && savedNews.news) ? savedNews.news : [];

const news = (state = initialState, action: IGetArticlesAction): HomeState => {
  switch (action.type) {
    case ADD_ARTICLES :
      return [...state].concat(action.payload);
    default:
      return state;
  }
}

export default news;
