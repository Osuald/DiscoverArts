import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = ({
  email,
  password,
  error,
  setEmail,
  setPassword,
  handleLogin,
}) => {
  const navigate = useNavigate();

  const checkAdmin = () => {
    if (email === "kai@gmail.com" && password === "kai") {
      navigate("/admin-dashboard", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-300 justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-sm w-80"
      >
        <h2 className="text-xl font-semibold text-center mb-6">
          Login to DiscoverArts
        </h2>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          className="cursor-pointer w-full bg-gradient-to-r from-purple-600 to-pink-400 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-purple-800 hover:to-pink-600 transition"
          onClick={checkAdmin}
        >
          Login
        </button>

        <h1 className="text-md font-semibold mt-6 text-center">
          New to DiscoverArts?
          <span>
            {/* The Link components are already correct! */}
            <Link
              to="/register"
              className="bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent cursor-pointer ml-2 hover:bg-gradient-to-r hover:from-purple-800 hover:to-pink-600"
            >
              Register
            </Link>
          </span>
        </h1>
      </form>
    </div>
  );
};

export default Login;
