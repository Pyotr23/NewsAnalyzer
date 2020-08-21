import { NewsActionTypes, INewsResponse } from "../types";
import { fetchNewsError, fetchNewsPending, fetchNewsSuccess, showMore, fetchCountInTitleSuccess } from "../actions/actionCreator";
import { getNews, getInTitleNews} from "../modules/NewsApi";
import { Dispatch } from "react";
import { GetNewShowedArticlesCount } from "../helpers";

export const fetchNews = (question: string) => async (dispatch: Dispatch<NewsActionTypes>) => {
    dispatch(fetchNewsPending());
    try {
      const resInTitle = await getInTitleNews<INewsResponse>(question);
      if (resInTitle.status !== "ok")
        throw (resInTitle.status);
      dispatch(fetchCountInTitleSuccess(resInTitle.totalResults));
      const res = await getNews<INewsResponse>(question);
      if (res.status !== "ok")
        throw (res.status);
      dispatch(fetchNewsSuccess(res.articles, question, res.totalResults));
      console.log(res);
      dispatch(showMore(GetNewShowedArticlesCount(res.articles, 0)));
      return res.articles;
    }
    catch (error) {
      return dispatch(fetchNewsError(error));
    }
  }
