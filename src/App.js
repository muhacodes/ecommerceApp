import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ProductsCatalog from "./Components/ProductsCatalog";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import Checkout from "./Components/Pages/Checkout";
import Success from "./Components/Pages/Success";
import Contact from "./Components/Pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./Components/context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
