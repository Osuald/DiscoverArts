import { useState, useEffect } from "react";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-lg">
      {/* Track */}
      <div
        className="flex transition-transform ease-in-out duration-700 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-pink-700 to-purple-950 bg-clip-text bg-opacity-90 rounded-b-lg p-4 text-transparent">
              <p className="text-sm">{slide.date}</p>
              <h3 className="text-lg font-bold mt-1">{slide.heading}</h3>
              <p className="text-sm ">By {slide.author}</p>
              <a
                href={slide.link}
                className="mt-4 inline-block bg-gradient-to-r from-purple-700 to-pink-500 font-medium text-white rounded-full px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                Read Article
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-1 rounded-full bg-purple-500 bg-opacity-50 hover:bg-purple-300 transition-colors"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4  p-1 rounded-full bg-purple-500 bg-opacity-50 hover:bg-purple-300 "
      >
        &#10095;
      </button>

      {/* Dots indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
