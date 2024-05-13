import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom/dist";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <nav className="nav">
      <div className="nav__mobile">
        <FontAwesomeIcon
          className="nav__icon"
          icon={faBars}
          style={{ color: "#ffb400" }}
        />
        <ul className="nav__list-mobile">
        <li onClick={()=>navigate('/')} className="nav__li-mobile">
            Home 
        </li>
        <li onClick={()=>navigate('/about')} className="nav__li-mobile">
            About Me
        </li>
        <li onClick={()=>navigate('/Contact')} className="nav__li-mobile">
            Contact
        </li>
        <li  onClick={()=>navigate('/projects')} className="nav__li-mobile"> 
          Projects
        </li>

     
      </ul>
      </div>
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
