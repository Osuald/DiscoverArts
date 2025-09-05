import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Register from "./pages/Register"; // Assuming you have a Register page

// Component to represent the Home Page with the default content
const HomePage = ({ isLoggedIn, handleLogout }) => (
  <>
    {/* Always show Navbar, passing state and logout handler */}
    <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    <Blog />
    <Newsletter />
    <Footer />
  </>
);

// A simple component to handle protected routes
const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Use a simple mock authentication
  const correctEmail = "kai";
  const correctPassword = "kai";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="App font-['Poppins'] min-h-screen bg-gray-50">
      <BrowserRouter>
        <Routes>
          {/* Main Home Route: Shows Navbar, Blog, Newsletter, Footer */}
          <Route
            path="/"
            element={
              <HomePage isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            }
          />

          {/* Login Route: Handles authentication */}
          <Route
            path="/login"
            element={
              <Login
                email={email}
                password={password}
                error={error}
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            }
          />

          {/* Register Route */}
          {/* Assuming you have a Register.jsx component */}
          <Route path="/register" element={<Register />} />

          <Route path="/admin-dashboard"
            element={
              <AdminDashboard />
            }
          />
          {/* Protected Admin Route */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                {/* Wrap the content with Navbar,
                  passing the login state and logout function
                */}
                <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
