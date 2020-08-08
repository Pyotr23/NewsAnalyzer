import { API_KEY, PAGE_SIZE } from "../constants";

export default async function getNews<T>(question: string): Promise<T> {
  const response = await fetch(`https://praktikum.tk/news/v2/everything?q=${question}&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`);
  return response.json() as Promise<T>;
}
