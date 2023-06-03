import { useEffect, useState, useMemo } from "react";
import { INews } from "../types/news.type";
import Pagination from "../components/Pagination";
import NewsList from "../components/NewsList";
import PlayerWidget from "../components/common/PlayerWidget";
import NewsFilter from "../components/NewsFilter";
import ApiService from "../services/api.service";

const News = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const articlesPerPage = 8;

  const getNews = async (): Promise<void> => {
    try {
      const response = await ApiService.getNews().then((res) => res.data);
      setNews(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handleCategorySelect = (category: string): void => {
    if (category === "all") setSelectedCategory("");
    else setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredNews = useMemo(
    () =>
      selectedCategory
        ? news.filter((article) => article.category === selectedCategory)
        : news,
    [selectedCategory, news]
  );

  const indexOfLastArticle = useMemo(
    () => currentPage * articlesPerPage,
    [currentPage, articlesPerPage]
  );

  const indexOfFirstArticle = useMemo(
    () => indexOfLastArticle - articlesPerPage,
    [indexOfLastArticle, articlesPerPage]
  );

  const currentArticles = useMemo(() => {
    return filteredNews.slice(indexOfFirstArticle, indexOfLastArticle);
  }, [filteredNews, indexOfFirstArticle, indexOfLastArticle]);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-wide">News</h1>
        <PlayerWidget />
      </div>
      <NewsFilter
        categories={[
          "all",
          "announcements",
          "game_updates",
          "esports",
          "patch_notes",
          "dev",
          "community",
        ]}
        selectedCategory={selectedCategory}
        onSelect={handleCategorySelect}
      />

      <div className="grid grid-cols-4 gap-10 mb-5">
        <NewsList articles={currentArticles} />
      </div>

      <Pagination
        totalArticles={filteredNews.length}
        articlesPerPage={articlesPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        articles={currentArticles}
      />
    </section>
  );
};

export default News;
