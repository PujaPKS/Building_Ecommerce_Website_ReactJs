import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy loading components for code splitting
const Home = lazy(() => import("./components/home/Home"));
const Store = lazy(() => import("./components/store/Store"));
const About = lazy(() => import("./components/about/About"));
const Cart = lazy(() => import("./components/cart/Cart"));
const ContactUs = lazy(() => import("./components/contact/ContactUs"));
const ProductDetail = lazy(() => import("./components/product/ProductDetail"));
const Login = lazy(() => import("./components/login/Login"));

function App() {
  const [showCart, setShowCart] = useState(false);

  // Toggle function to switch the cart visibility
  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <Router>
      <Header toggleCart={toggleCart} />
      {/* Conditionally render Cart */}
      {showCart && (
        <Suspense fallback={<div>Loading Cart...</div>}>
          <Cart showCart={showCart} toggleCart={toggleCart} />
        </Suspense>
      )}
      <Suspense fallback={<div className="text">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={
              <ProtectedRoute>
                <Store toggleCart={toggleCart} />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;