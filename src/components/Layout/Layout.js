import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";

import { useLocation } from "react-router-dom/dist";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

function Layout() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Projects/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Layout;
