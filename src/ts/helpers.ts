import { IArticles } from "./types";
import { SHOWED_NEWS_PACK_SIZE } from "./constants";

export const GetNewShowedArticlesCount = (articles: IArticles[], oldCount: number): number => {
  const newCount = oldCount + SHOWED_NEWS_PACK_SIZE;
  return newCount > articles.length
    ? articles.length
    : newCount;
}
