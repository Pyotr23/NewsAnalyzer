import { IArticle } from "./types";
import { SHOWED_NEWS_PACK_SIZE } from "./constants";

export const GetNewShowedArticlesCount = (articles: IArticle[], oldCount: number): number => {
  const newCount = oldCount + SHOWED_NEWS_PACK_SIZE;
  return newCount > articles.length
    ? articles.length
    : newCount;
}
