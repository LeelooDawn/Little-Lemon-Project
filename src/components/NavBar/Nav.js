import React from "react";
import "./Nav.css";
import logo from "../../images/Logo.svg";

function Nav() {
  return (
    <div className="container">
      <nav className="nav-container">
        <img src={logo} alt="Little Lemon Logo" />
        <ul className="nav-list">
          <li>
            <a href="/" className="nav-link">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              MENU
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              RESERVATIONS
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              ORDER ONLINE
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              LOGIN
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
