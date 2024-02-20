import React from "react";
import salad from "./Images/greek salad.jpg";
import bruchetta from "./Images/bruchetta.svg";
import dessert from "./Images/lemon dessert.jpg";

function Specials() {
  return (
    <div className="container">
      <div className="menu">
        <div className="cards">
          <article className="card">
            <img src={salad} alt="close up on a Greek Salad" />
            <header>
              <h2>Greek Salad</h2>
              <p>$12.99</p>
            </header>
            <div className="content">
              <p>Try our delicious Greek Salad</p>
            </div>
            <footer> Order Online! </footer>
          </article>
          <article className="card">
            <img src={bruchetta} alt="Bruchetta topped baguette" />
            <header>
              <h2>Bruchetta</h2>
              <p>$5.99</p>
            </header>
            <div className="content">
              <p>Our Bruchetta is a great addition to any dish or salad.</p>
            </div>
            <footer>Order Online!</footer>
          </article>
          <article className="card">
            <img src={dessert} alt="a slice of lemon cake " />
            <header>
              <h2>Lemon Dessert</h2>
              <p>$7.99</p>
            </header>
            <div className="content">
              <p>Our lemon dessert is made with fresh meyer lemons!</p>
            </div>
            <footer>Order Online!</footer>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Specials;
