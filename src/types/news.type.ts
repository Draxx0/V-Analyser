export interface News {
  status: number;
  data: NewsData;
}

export type NewsData = {
  banner_url: string;
  category: string;
  date: string;
  external_link: string;
  title: string;
  url: string;
};
