import React from "react";
import { NewsData } from "../types/news.type";

interface Props {
  totalArticles: number;
  articlesPerPage: number;
  currentPage: number;
  articles: NewsData[];
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<Props> = ({
  totalArticles,
  articlesPerPage,
  currentPage,
  articles,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalArticles / articlesPerPage);
    const displayedPages = 10;
    const halfDisplayedPages = Math.floor(displayedPages / 2);

    let startPage = currentPage - halfDisplayedPages;
    let endPage = currentPage + halfDisplayedPages;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(displayedPages, totalPages);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - displayedPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (startPage > 2) {
      pageNumbers.unshift("...");
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push("...");
    }

    if (endPage < totalPages) {
      pageNumbers.push(totalPages);
    }

    if (!pageNumbers.includes(1)) {
      pageNumbers.unshift(1);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <>
      {articles.length > 0 && (
        <div className="flex justify-center gap-10 py-7">
          {currentPage > 1 && (
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="text-lg hover:text-red transition-all"
            >
              Précédent
            </button>
          )}

          <div className="flex gap-2">
            {pageNumbers.map((pageNumber, index) => (
              <button
                key={index}
                onClick={() => {
                  if (typeof pageNumber === "number") {
                    onPageChange(pageNumber);
                  }
                }}
                className={
                  currentPage === pageNumber
                    ? "font-bold text-red text-lg"
                    : "text-lg"
                }
              >
                {pageNumber}
              </button>
            ))}
          </div>

          {currentPage < Math.ceil(totalArticles / articlesPerPage) && (
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="text-lg hover:text-red transition-all"
            >
              Suivant
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Pagination;
