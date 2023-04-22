import { useEffect, useState } from "react";
import { NewsData } from "../types/news.type";
import Pagination from "../components/Pagination";
import NewsList from "../components/NewsList";
import PlayerWidget from "../components/PlayerWidget";
import NewsFilter from "../components/NewsFilter";

const News = () => {
  const [news, setNews] = useState<NewsData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const articlesPerPage = 8;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCategorySelect = (category: string) => {
    if (category === "all") setSelectedCategory("");
    else setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredNews = selectedCategory
    ? news.filter((article) => article.category === selectedCategory)
    : news;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredNews.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const getNews = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/website/en-us`
      ).then((res) => res.json());
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold tracking-wide">News</h1>
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