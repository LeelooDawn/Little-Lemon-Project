import React from "react";
import "./Header.css";
import headimage from "../../images/restauranfood.jpg";

function Header() {
  return (
    <div className="header-background">
      <div className="container">
        <header id="header">
          <div className="header-container">
            <div className="header-left">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                We're a family owned Mediterranean restaurant. Located on Clark
                Street in Chicago, we focus on traditional recipes and serve
                them with a modern twist!{" "}
              </p>
              <button className="header-button">Reserve a Table</button>
            </div>
            <div className="header-right">
              <img
                src={headimage}
                alt="Chef holding a prepared dish"
                width="250px"
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
