import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Shop = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={() => setIsLoggedIn(false)} />
        
        <Newsletter />
        <Footer/>
        
    </div>
  );
};

export default Shop;