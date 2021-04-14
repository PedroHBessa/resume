import React from "react";
import { Link } from "react-router-dom";
import "../../ui/style.css";
import logo1 from "../../../assets/logo1.png";

const navBar = () => {
  return (
    <nav className="nav-bar">
      <a href="browse" className="logo">
        <img src={logo1} alt="logo1" width="100" height="70"></img>
      </a>
      <nav className="menu">
        <ul>
          <li className="link-nav-bar">
            <Link to="/">HOME</Link>
          </li>
          <li className="link-nav-bar">
            <Link to="/portfolio">PORTFÓLIO</Link>
          </li>
          <li className="link-nav-bar">
            <Link to="/news">NEWS</Link>
          </li>
          <li className="link-nav-bar">
            <Link to="/blog">BLOG</Link>
          </li>
          <li className="link-nav-bar">
            <Link to="/contato">CONTATO</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default navBar;
