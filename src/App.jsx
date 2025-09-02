import { useState } from "react";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      {!isLoggedIn ? (
        <Login
          email={email}
          password={password}
          error={error}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        <div>
          {/* ✅ pass login state + logout function to Navbar */}
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

          <Blog />
          <Newsletter />
          <Footer />
          <AdminDashboard />
        </div>
      )}
    </div>
  );
}

export default App;
