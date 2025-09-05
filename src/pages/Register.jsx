import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    // Simple validation
    if (!username || !email || !phoneNumber || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // You would typically send this data to an API for real registration
    console.log("Registration data:", {
      username,
      email,
      phoneNumber,
      password,
    });

    // Simulate successful registration
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-300 justify-center h-screen">
        <div className="bg-white p-8 rounded-2xl shadow-sm w-80 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Registration Successful!
          </h2>
          <p className="text-gray-700 mb-4">
            Thank you for registering. You can now log in.
          </p>
          <Link
            to="/login"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-400 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-purple-800 hover:to-pink-600 transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-300 justify-center h-screen">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-sm w-80"
      >
        <h2 className="text-xl font-semibold text-center mb-6">
          Register for DiscoverArts
        </h2>

        {/* Username Field */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
        />

        {/* Email Field */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
        />

        {/* Phone Number Field */}
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
        />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
        />

        {/* Confirm Password Field */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          className="cursor-pointer w-full bg-gradient-to-r from-purple-600 to-pink-400 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-purple-800 hover:to-pink-600 transition"
        >
          Register
        </button>

        <h1 className="text-md font-semibold mt-6 text-center">
          Already have an Account?
          <span>
            <Link
              to="/login"
              className="bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent cursor-pointer ml-2 hover:bg-gradient-to-r hover:from-purple-800 hover:to-pink-600"
            >
              Login
            </Link>
          </span>
        </h1>
      </form>
    </div>
  );
}

export default Register;
