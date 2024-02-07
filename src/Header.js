import React from "react";
import headimage from "./Images/restauranfood.jpg";

function Header() {
  return (
    <header class="header-container">
      <h1 class="header1">Little Lemon</h1>
      <h2 class="header2">Chicago</h2>
      <p class="headerP">
        We're a family owned Mediterranean restaurant. Located on Clark Street
        in Chicago, we focus on traditional recipes and serve them with a modern
        twist!{" "}
      </p>
      <img
        src={headimage}
        alt="Chef holding a prepared dish"
        class="headimage"
        width="250px"
      />
      <button class="headerbutton">Reserve a Table</button>
    </header>
  );
}

export default Header;
