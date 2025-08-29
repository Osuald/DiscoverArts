function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-300 via-white to-purple-400 shadow-xl">
      <div className="container mx-auto px-35 py-3 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <button className="bg-gradient-to-r from-purple-700 to-orange-500 p-2 rounded-lg hover:from-purple-800 hover:to-orange-600 hover:scale-105 transition-all duration-200 cursor-pointer text-white font-bold text-base">
            DA
          </button>
          <div className="cursor-pointer transition-transform duration-200">
            <h2 className="text-lg font-bold bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-transparent">
              DiscoverArts
            </h2>
            <h4 className="text-xs text-gray-600">Creativity in arts</h4>
          </div>
        </div>

        <ul className="flex gap-6 list-none text-sm">
          {["Home", "Shop", "Artist", "About", "Blog", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href=""
                  className="text-gray-700 hover:text-purple-800 hover:scale-110 inline-block transition-all duration-200"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="flex gap-4 items-center text-sm">
          <a className="text-gray-700 hover:text-purple-800 hover:scale-110 inline-block transition-all duration-200 cursor-pointer">
            Sign In
          </a>
          <button className="bg-gradient-to-r from-purple-700 to-orange-500 px-4 py-2 rounded-lg hover:from-purple-800 hover:to-orange-600 hover:scale-105 transition-all duration-200 cursor-pointer text-white font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
