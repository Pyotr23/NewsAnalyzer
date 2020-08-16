import { NewsActionTypes, INewsResponse } from "../types";
import { fetchNewsError, fetchNewsPending, fetchNewsSuccess, showMore } from "../actions/actionCreator";
import getNews from "../modules/NewsApi";
import { Dispatch } from "react";

export const fetchNews = (question: string) => async (dispatch: Dispatch<NewsActionTypes>) => {
    dispatch(fetchNewsPending());
    try {
      const res = await getNews<INewsResponse>(question);
      if (res.status !== "ok")
        throw (res.status);
      dispatch(fetchNewsSuccess(res.articles));
      return res.articles;
    }
    catch (error) {
      return dispatch(fetchNewsError(error));
    }
  }

// export const showMoreNews = (count: number) => (dispatch: Dispatch<NewsActionTypes>) => {
//   console.log(count);
//   dispatch(showMore(count));
// }
