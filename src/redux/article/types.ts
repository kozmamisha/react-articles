export type Article = {
  id: string;
  date: string;
  title: string;
  content: string;
  description: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ArticleSliceState {
  items: Article[];
  status: Status;
}

export type SearchArticleParams = {
  isSearched: string;
}