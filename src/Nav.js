import React from "react";
import logo from "./Images/Logo.svg";

function Nav() {
  return (
    <nav class="nav-container">
      <img src={logo} alt="Little Lemon Logo" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
