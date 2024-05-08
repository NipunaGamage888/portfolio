import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter className='app'>
      <div className='app__nav'>
      <Navbar />
      </div>
      
      <div className="app__layout">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
