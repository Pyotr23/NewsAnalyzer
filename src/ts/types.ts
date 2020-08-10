import { ADD_ARTICLES } from "./constants";

export interface INewsResponse {
  status: string,
  totalResults: number,
  articles: INews[]
}

export interface INews {
  source?: ISource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt?: Date,
  content: string
}

interface ISource {
  id?: string,
  name: string
}


export interface IGetArticlesAction {
  type: typeof ADD_ARTICLES;
  payload: INews[]
}


export interface IFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputStyle: string,
  errorText: string,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}


export interface IHomeContext {
  formProps: IFormProps
}


export interface ILoadingProps {
  isVisible: boolean;
}
