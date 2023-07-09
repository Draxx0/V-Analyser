import { Status } from "./common/generic";

export interface INewsResponse extends Status {
  data: INews;
}

export interface INews {
  banner_url: string;
  category: string;
  date: string;
  external_link: string;
  title: string;
  url: string;
}
