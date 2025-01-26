import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  // Toggle function to switch the cart visibility
  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <Router>
      <Header toggleCart={toggleCart} />
      {/* Pass both showCart and toggleCart to Cart */}
      {showCart && <Cart showCart={showCart} toggleCart={toggleCart} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
