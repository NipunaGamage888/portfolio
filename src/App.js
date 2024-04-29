import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
