import React from "react";
import headimage from "./Images/restauranfood.jpg";

function Header() {
  return (
    <div className="container">
      <header className="header-container">
        <h1 className="header1">Little Lemon</h1>
        <h2 className="header2">Chicago</h2>
        <p className="headerP">
          We're a family owned Mediterranean restaurant. Located on Clark Street
          in Chicago, we focus on traditional recipes and serve them with a
          modern twist!{" "}
        </p>
        <img
          src={headimage}
          alt="Chef holding a prepared dish"
          className="headimage"
          width="250px"
        />
        <button className="headerbutton">Reserve a Table</button>
      </header>
    </div>
  );
}

export default Header;
