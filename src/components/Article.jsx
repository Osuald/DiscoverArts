import { useState, useEffect } from "react";

const Article = ({ article }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className="rounded-lg w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 rounded-bl-lg">
          <button onClick={handleLike}>
            <i
              className={`fa-heart ${isLiked ? "text-red-500" : "text-white"}`}
            ></i>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-600">{article.author}</p>
        <p className="text-sm text-gray-600">{article.date}</p>
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
  );
};

export default Article;
