import { NewsActionTypes, INewsResponse } from "../types";
import { fetchNewsError, fetchNewsPending, fetchNewsSuccess } from "../actions/actionCreator";
import getNews from "../modules/NewsApi";
import { Dispatch } from "react";

const fetchNews = (question: string) => async (dispatch: Dispatch<NewsActionTypes>) => {
    dispatch(fetchNewsPending());
    try {
      const res = await getNews<INewsResponse>(question);
      if (res.status !== "ok")
        throw (res.status);
      dispatch(fetchNewsSuccess(res.articles));
      console.log(res.articles);
      return res.articles;
    }
    catch (error) {
      return dispatch(fetchNewsError(error));
    }
  }


export default fetchNews;
