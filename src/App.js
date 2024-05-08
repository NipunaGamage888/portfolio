import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter className="app">
      <div className="app__nav">
        <Navbar />
      </div>

      <div className="app__layout">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
