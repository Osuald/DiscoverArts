import Slider from "../components/Slider";

import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

import { useState, useEffect } from "react";
import Article from "../components/Article";

const slideData = [
  {
    image: blog1,
    date: "August 28, 2025",
    heading: "Eating one Carrot a day can bring you Surprising Results",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Jane Doe",
    views: 0,
    link: "#",
  },
  {
    image: blog2,
    date: "August 27, 2025",
    heading: "Tomatoes are good fruits for your skin, and vision",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    views: 0,
    link: "#",
  },
  {
    image: blog3,
    date: "August 26, 2025",
    heading: "Eating cabbages can help you lose weight",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Alex Johnson",
    views: 0,
    link: "#",
  },
];

function Blog() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((i) => (i + 1) % slideData.length),
      5000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="px-20 mt-15 flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="flex flex-col items-center gap-2 p-4 mx-auto w-1/2">
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
      <div className="bg-gray-100 m-20 flex flex-col justify-center">
        <div>
          <h2 className="text-xl font-bold" >Featured Posts</h2>
          <h2 className="text-sm">Discover our most popular articles</h2>
        </div>
        <div className="w-full mt-4 bg-gradient-to-r from-black-700 to-black-300 rounded-xl shadow-lg">
          <Slider slides={slideData} currentIndex={index} />
        </div>
      </div>
      <div className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <div>
            <h2 className="text-xl font-bold">Latest Articles</h2>
            <h2 className="text-sm">Discover our newest Articles</h2>
          </div>
          <div>
            <Article article={slideData[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
