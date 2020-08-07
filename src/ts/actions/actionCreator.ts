import { GET_ARTICLES } from "../constants";
import { IGetArticlesAction, INewsResponse } from "../types";

export const addTast = (response: INewsResponse): IGetArticlesAction => ({
  type: GET_ARTICLES,
  payload: response.articles
});
