import React from "react";
import { Link } from "react-router-dom";
import "../../ui/style.css";

const navBar = () => {
  return (
    <nav className="nav-bar">
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
