function Newsletter() {
  return (
    <div className="w-full h-50 bg-gradient-to-r from-purple-700 to-pink-500 p-8 flex flex-col justify-center items-center text-center text-white mt-20">
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
    </div>
  );
}

export default Newsletter;
