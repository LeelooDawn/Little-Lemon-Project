import React from "react";
import logo from "./Images/Logo.svg";

function Nav() {
  return (
    <nav class="nav-container">
      <img src={logo} alt="Little Lemon Logo" />
      <ul class="nav-list">
        <li>
          <a href="" class="nav-link">
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
          <a href="" class="nav-link">
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
  );
}

export default Nav;
