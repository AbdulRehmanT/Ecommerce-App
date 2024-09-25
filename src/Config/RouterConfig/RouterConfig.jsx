import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Screens/Home/Home";
import About  from "../../Screens/About/About";
import Contact from "../../Screens/Contact/Contact";
import Navbar from "../../Components/Navbar/Navbar"
import Product from "../../Screens/Product/Product";

function RouterConfig() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterConfig;
