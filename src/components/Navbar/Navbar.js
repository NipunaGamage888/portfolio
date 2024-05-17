import React, { useState } from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom/dist";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate=useNavigate()
  const [open, setOpen]=useState(false)

  const toggleNavBar= ()=>{
    setOpen(true)
  }
  const toggleOff =()=>{
    setOpen(false)
  }
  const home =()=>{
    navigate('/')
    setOpen(false)
  }
  const about =()=>{
    navigate('/about')
    setOpen(false)
  }
  const contact =()=>{
    navigate('/Contact')
    setOpen(false)
  }
  const project =()=>{
    navigate('/Project')
    setOpen(false)
  }
  return (
    <nav className="nav">
      <FontAwesomeIcon
          onClick={toggleNavBar}
          className="nav__icon"
          icon={faBars}
          style={{ color: "#ffb400" }}
        />
      <div className={`nav__mobile ${open ? 'nav__mobile-open':''}`}>
      <FontAwesomeIcon icon={faXmark}
      className="nav__icon"
      style={{ color: "#ffb400" }}
      onClick={toggleOff}
      />
        
        <ul className="nav__list-mobile">
        <li onClick={home} className="nav__li-mobile">
            Home 
        </li>
        <li onClick={about} className="nav__li-mobile">
            About Me
        </li>
        <li onClick={contact} className="nav__li-mobile">
            Contact
        </li>
        <li  onClick={project} className="nav__li-mobile"> 
          Projects
        </li>

     
      </ul>
      </div>
      <ul className="nav__list">
        <li onClick={home} className="nav__li">
            Home 
        </li>
        <li onClick={about} className="nav__li">
            About Me
        </li>
        <li onClick={contact} className="nav__li">
            Contact
        </li>
        <li  onClick={project} className="nav__li"> 
          Projects
        </li>

     
      </ul>
    </nav>
  );
};

export default Navbar;
