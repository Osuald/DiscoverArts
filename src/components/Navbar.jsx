import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-300 via-white to-purple-400 shadow-xl">
      <div className="container mx-auto px-20 py-3 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {/* Use Link to navigate to the homepage for the DA button */}
          <Link to="/">
            <button className="bg-gradient-to-r from-purple-700 to-orange-500 p-2 rounded-lg hover:from-purple-800 hover:to-orange-600 hover:scale-105 transition-all duration-200 cursor-pointer text-white font-bold text-base">
              DA
            </button>
          </Link>
          {/* Use Link to navigate to the homepage for the text */}
          <Link to="/">
            <div className="cursor-pointer transition-transform duration-200">
              <h2 className="text-lg font-bold bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-transparent">
                DiscoverArts
              </h2>
              <h4 className="text-xs text-gray-600">Creativity in arts</h4>
            </div>
          </Link>
        </div>

        <ul className="flex gap-6 list-none text-sm">
          {[
            { name: "Home", to: "/" },
            { name: "Blog", to: "/" }, // Assuming Blog is on the homepage
            { name: "Shop", to: "/shop" }, // Add routes for these pages in App.jsx
            { name: "Artist", to: "/artist" },
            { name: "About", to: "/about" },
            { name: "Contact", to: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              {/* Use Link for internal navigation */}
              <Link
                to={item.to}
                className="text-gray-700 hover:text-purple-800 hover:scale-110 inline-block transition-all duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-right text-sm">
          {!isLoggedIn ? (
            <>
              {/* Correctly use Link without wrapping it in an <a> tag */}
              <Link
                to="/login"
                className="text-gray-700 hover:text-purple-800 hover:scale-110 inline-block transition-all duration-200 cursor-pointer"
              >
                Sign in
              </Link>

              {/* Assuming 'Get Started' also goes to the login/register page */}
              <Link to="/register">
                <button className="bg-gradient-to-r from-purple-700 to-orange-500 px-4 py-2 rounded-lg hover:from-purple-800 hover:to-orange-600 hover:scale-105 transition-all duration-200 cursor-pointer text-white font-semibold">
                  Get Started
                </button>
              </Link>
            </>
          ) : (
            <>
              {/* Show this ONLY if logged in */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
              {/* Add a link to the protected admin page if the user is logged in */}
              <Link
                to="/admin"
                className="text-gray-700 hover:text-purple-800 hover:scale-110 inline-block transition-all duration-200 cursor-pointer"
              >
                Admin
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
