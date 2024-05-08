import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom/dist";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li onClick={()=>navigate('/')} className="nav__li">
            Home 
        </li>
        <li onClick={()=>navigate('/about')} className="nav__li">
            About Me
        </li>
        <li onClick={()=>navigate('/Contact')} className="nav__li">
            Contact
        </li>
        <li  onClick={()=>navigate('/projects')} className="nav__li"> 
          Projects
        </li>

     
      </ul>
    </nav>
  );
};

export default Navbar;
