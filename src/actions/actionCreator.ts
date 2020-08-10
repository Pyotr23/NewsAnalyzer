import { ADD_ARTICLES } from "../ts/constants";
import { IGetArticlesAction, INewsResponse } from "../ts/types";

export const addNews = (response: INewsResponse): IGetArticlesAction => ({
  type: ADD_ARTICLES,
  payload: response.articles
});
