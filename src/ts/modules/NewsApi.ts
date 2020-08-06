import React, { Component } from "react";
import { API_KEY, PAGE_SIZE } from "../constants";

export interface INewsResponse {
  status: string,
  totalResults: number,
  articles: INews[]
}

interface INews {
  source: ISource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: Date,
  content: string
}

interface ISource {
  id?: string,
  name: string
}

export default async function newsApi<T>(question: string): Promise<T> {
  const response = await fetch(`https://praktikum.tk/news/v2/everything?q=${question}&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`);
  if (!response.ok)
    throw new Error(response.statusText);
  return response.json() as Promise<T>;
}
