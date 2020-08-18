import { API_KEY, PAGE_SIZE, DAYS_AGO_COUNT } from "../constants";

export default async function getNews<T>(question: string): Promise<T> {
  const dateTime = new Date();
  dateTime.setDate(dateTime.getDate() - DAYS_AGO_COUNT);
  const response =
    await fetch(`https://nomoreparties.co/news/v2/everything?q=${question}&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}&from=${dateTime.toISOString()}&sortBy=publishedAt`);
  // const response = await fetch(`https://praktikum.tk/news/v2/everything?q=${question}&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`);
  return response.json() as Promise<T>;
}
