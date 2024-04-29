import React from "react";
import { AnimatePresence, div } from "framer-motion";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from '../Home/Home';
import About from "../About/About";
import Portfolio from '../Portfolio/Portfolio';
import { useLocation } from "react-router-dom/dist";


function Layout() {
    const location = useLocation()
  return (
    <div>
      <AnimatePresence exitBeforeEnter={false}>
      <Routes location={location} key = {location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Layout;
