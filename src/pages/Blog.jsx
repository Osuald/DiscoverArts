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
for (let i = 0; i < 40; i++) {
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
  // The handleLike function is defined here and passed down to Article
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
        <div className="w-full mt-4  rounded-xl shadow-sm">
          <Slider slides={slideData} currentIndex={index} />
        </div>
      </div>
      <div className="flex m-10 items-start ">
        <div className="mt-10 flex-1 flex flex-col justify-center">
          <div>
            <h2 className="text-xl font-bold">Latest Articles</h2>
            <h2 className="text-sm">Discover our newest Articles</h2>
          </div>
          <div className="mt-4">
            <Article articles={articleList} onLike={handleLike} />
          </div>
        </div>

        {/*
          This is the section that has been updated.
          I've added the `sticky` and `top-20` classes to the <section> element.
          This will make the right panel stick to the top of the viewport
          once the user scrolls past its initial position.
        */}
        <div className="sticky top-2">
          <div className="flex flex-col gap-4 mt-20 bg-gradient-to-r from purple-200 to-purple-300 p-4 rounded-lg shadow-md w-80">
            <div>
              <h2 className="text-lg font-bold">Categories</h2>
              {[
                "All Posts",
                "Design",
                "Development",
                "Business",
                "Lifestyle",
              ].map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:underline flex flex-col mr-2"
                >
                  {category}
                </a>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-bold">Popular Posts</h2>
              {slideData.map((article) => (
                <div key={article.id} className="flex gap-2 mt-2">
                  <img
                    src={article.image}
                    alt={article.heading}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <h3 className="text-sm">{article.heading}</h3>
                </div>
              ))}
            </div>
            <h2 className="text-lg font-bold">Tags</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "All Posts",
                "Design",
                "Development",
                "Business",
                "Lifestyle",
              ].map((tag) => (
                <a key={tag} href="#" className="hover:underline inline-block">
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
