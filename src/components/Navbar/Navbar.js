import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom/dist";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__li">
          <Link to={"/"}>
            Home
          </Link>
        </li>
        <li className="nav__li">
          <Link to={"/about"}>
            Home
          </Link>
        </li>
        <li className="nav__li">
          <Link to={"/Contact"}>
            Contact
          </Link>
        </li>

     
      </ul>
    </nav>
  );
};

export default Navbar;
