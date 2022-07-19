import React from "react";
import "./app.css";
import Navber from "./navber";
import Home from "./home";
import Brand from "./brand";
import Contact from "./contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route path="//Home" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
