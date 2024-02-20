import React from "react";
import logo from "./Images/Logo.svg";

function Nav() {
  return (
    <div className="container">
      <nav className="nav-container">
        <img src={logo} alt="Little Lemon Logo" />
        <ul className="nav-list">
          <li>
            <a href="" className="nav-link">
              HOME
            </a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>MENU</a>
          </li>
          <li>
            <a href="" className="nav-link">
              RESERVATIONS
            </a>
          </li>
          <li>
            <a>ORDER ONLINE</a>
          </li>
          <li>
            <a>LOGIN</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
