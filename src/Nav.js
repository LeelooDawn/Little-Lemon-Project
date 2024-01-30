import React from "react";
import logo from "./Images/Logo.svg";

function Nav() {
  return (
    <div>
      <img src={logo} alt="Little Lemon Logo" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
