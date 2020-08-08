import { GET_ARTICLES } from "./constants";

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



export interface IGetArticlesAction {
  type: typeof GET_ARTICLES;
  payload: INews[]
}



export interface FormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputStyle: string,
  errorText: string,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}

export type FormState = {
  value: string,
  error: string,
  isValid: boolean
}



export interface IFormContext extends FormProps {
}
