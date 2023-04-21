import React from "react";
import { NewsData } from "../types/news.type";
import { formatDate } from "../functions/formatDate";
import { sliceText } from "../functions/sliceText";

interface Props {
  articles: NewsData[];
}

const NewsList: React.FC<Props> = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div key={article.url} className="flex flex-col gap-3 cursor-pointer">
          <div
            className="relative border-2 rounded border-red"
            onClick={() => window.open(article.url)}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <span className="absolute top-3 left-3 p-2 bg-red rounded-full capitalize text-[11px] font-bold">
              {article.category}
            </span>
            <img src={article.banner_url} alt={article.title} />
          </div>

          <div className="grid grid-cols-1 grid-rows-2 gap-2">
            <h2 className="text-xl font-bold tracking-wide">
              {sliceText(article.title, 50)}
            </h2>
            <p className="text-sm">{formatDate(article.date)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsList;
