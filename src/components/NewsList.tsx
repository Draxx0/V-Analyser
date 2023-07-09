import React from "react";
import { INews } from "../types/news.type";
import { formatDate } from "../functions/formatDate";
import { sliceText } from "../functions/sliceText";
import { BsPlayFill } from "react-icons/bs";
import Loading from "./common/Loading";

interface Props {
  articles: INews[];
}

const NewsList: React.FC<Props> = ({ articles }) => {
  return (
    <>
      {articles.length > 0 ? (
        articles.map((article) => (
          <div
            key={article.url}
            onClick={() => window.open(article.url)}
            className="flex flex-col gap-3 cursor-pointer article"
          >
            <div className="relative border-2 rounded border-red image-wrapper">
              <img src={article.banner_url} alt={article.title} />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 overlay"></div>
              <span className="absolute top-3 left-3 p-2 bg-red rounded-full capitalize text-[11px] font-bold">
                {article.category}
              </span>
              {article.external_link && (
                <div
                  className="flex gap-1 items-center absolute bottom-3 left-3 py-1 px-4 bg-red rounded-full play-button"
                  onClick={() => window.open(article.external_link)}
                >
                  <button className=" font-bold text-[10px]">
                    {article.external_link.includes("youtu")
                      ? "Watch Video"
                      : "Read More"}
                  </button>
                  <BsPlayFill size={1} />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 grid-rows-2 gap- h-[170px]">
              <h2 className="text-xl font-bold tracking-wide">
                {sliceText(article.title, 50)}
              </h2>
              <p className="text-sm">{formatDate(article.date)}</p>
            </div>
          </div>
        ))
      ) : (
        <Loading isAbsolute />
      )}
    </>
  );
};

export default NewsList;
