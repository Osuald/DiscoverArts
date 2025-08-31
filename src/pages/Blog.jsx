import Slider from "../components/Slider";
import Article from "../components/Article";
import { useState, useEffect } from "react";

// Import your images
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

const slideData = [
  {
    image: blog1,
    date: "August 28, 2025",
    heading: "New Study Shows Surprising Results",
    author: "Jane Doe",
    link: "#",
  },
  {
    image: blog2,
    date: "August 27, 2025",
    heading: "The Future of Web Development",
    author: "John Smith",
    link: "#",
  },
  {
    image: blog3,
    date: "August 26, 2025",
    heading: "Mastering React and Tailwind",
    author: "Alex Johnson",
    link: "#",
  },
];

// Define the static article data
const initialArticleData = [];
for (let i = 0; i < 10; i++) {
  const id = i + 1;
  const image = i % 3 === 0 ? blog1 : i % 3 === 1 ? blog2 : blog3;
  const date = `August ${30 - i}, 2025`;
  const heading = `Vegetable ${i + 1} is good for your ${
    i % 2 === 0 ? "health" : "beauty"
  }`;
  const explanation =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const author =
    i % 3 === 0 ? "Jane Doe" : i % 3 === 1 ? "John Smith" : "Alex Johnson";
  const views = 0;
  const link = "#";
  initialArticleData.push({
    id,
    image,
    date,
    heading,
    explanation,
    author,
    views,
    link,
  });
}

function Blog() {
  const [index, setIndex] = useState(0);

  // CORRECTED: State for articles is now managed here
  const [articleList, setArticleList] = useState(
    initialArticleData.map((a) => ({ ...a, isLiked: false }))
  );

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((i) => (i + 1) % slideData.length),
      5000
    );
    return () => clearInterval(intervalId);
  }, []);

  // CORRECTED: The handleLike function lives here
  const handleLike = (id) => {
    setArticleList((prev) =>
      prev.map((article) =>
        article.id === id ? { ...article, isLiked: !article.isLiked } : article
      )
    );
  };

  return (
    <div className="flex flex-col justify-center bg-gradient-to-r from-purple-300 via-white to-purple-400">
      <div className="px-20 mt-15 flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="flex flex-col items-center gap-2 p-4 mx-auto w-1/2 text-grey">
          <h2 className="w-fit py-1 px-2 text-center rounded-full border border-gray-400">
            Latest Articles
          </h2>
          <h2 className="text-3xl font-bold text-center">Our Blog</h2>
          <p className=" text-md text-center">
            A place where we share our thoughts, experiences and insights on the
            world of art. Our blog is a platform for artists to share their
            stories, showcase their work and connect with other creatives. We
            also feature articles on art trends, news, and tips for artists.
          </p>
        </div>
      </div>
      <div className="w-200  mx-50 mt-10 flex-1 flex-col justify-center">
        <div>
          <h2 className="text-xl font-bold">Featured Posts</h2>
          <h2 className="text-sm">Discover our most popular articles</h2>
        </div>
        <div className="w-full mt-4 bg-gradient-to-r from-black-700 to-black-300 rounded-xl shadow-sm">
          <Slider slides={slideData} currentIndex={index} />
        </div>
      </div>
      <div className="m-10 flex flex-col justify-center">
        <div>
          <h2 className="text-xl font-bold">Latest Articles</h2>
          <h2 className="text-sm">Discover our newest Articles</h2>
        </div>
        <div className="mt-4">
          {/* CORRECTED: Pass the articles and the like handler to the Article component */}
          <Article articles={articleList} onLike={handleLike} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
