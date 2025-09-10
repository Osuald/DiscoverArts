function Newsletter() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-700 to-pink-500 p-8 flex flex-col justify-center items-center text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="mb-6">
        Get the latest arts trends, news, and new products delivered straight to
        your inbox.
      </p>
      <form className="w-full max-w-md">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm  py-2 px-4">
          <input
            className="appearance-none bg-gradient-to-r from red-500 to-red-100 w-full text-white mr-3 py-2 px-2 rounded-full leading-tight focus:outline-none placeholder-white/70"
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
          />
          <button
            className="flex-shrink-0 bg-white text-purple-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors duration-200"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
      <div className="relative group">
        <span className="text-gray-800 group-hover:text-black transition duration-300">
          Hover me
        </span>
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
      </div>
      <div className="relative">
        {/* Gradient background */}
        <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-64"></div>
        <p className="w-full">hello i really like the way you make your irl moree beautiful than ours</p>

        {/* White wave overlay */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,213.3C672,203,768,149,864,122.7C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Newsletter;
