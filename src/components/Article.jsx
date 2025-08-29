import { useState } from "react";

const Article = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Calculate indexes
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Total pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Handle direct page click
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  // Handle next/prev
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Render Articles */}
      {currentArticles.map((article) => (
        <div
          key={article.id}
          className="flex flex-col gap-4 border p-4 rounded-lg shadow"
        >
          <div className="relative">
            <img
              src={article.image}
              alt={article.title}
              className="rounded-lg w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 rounded-bl-lg">
              <button>
                <i className="fa-heart text-white"></i>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <p>{article.author}</p>
            <p>{article.date}</p>
          </div>
          <h3 className="text-lg font-bold">{article.title}</h3>
          <p className="text-sm text-gray-600">{article.description}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">{article.views} views</p>
            <button className="text-sm bg-purple-700 text-white rounded-full px-4 py-2">
              Read more
            </button>
            <i className="fa-comment"></i>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-4">
        {/* Prev button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-700 text-white"
          }`}
        >
          Prev
        </button>

        {/* Page numbers */}
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            id={number + 1}
            onClick={handleClick}
            className={`px-4 py-2 rounded-full ${
              currentPage === number + 1
                ? "bg-purple-900 text-white"
                : "bg-purple-700 text-white"
            }`}
          >
            {number + 1}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-700 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Article;
