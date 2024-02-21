import React from "react";
import "./Specials.css";
import salad from "../../images/greek salad.jpg";
import bruchetta from "../../images/bruchetta.svg";
import dessert from "../../images/lemon dessert.jpg";

function Specials() {
  return (
    <div className="container">
      <div className="menu">
        <h2>This Weeks Specials</h2>
        <div className="cards">
          <article className="card">
            <div className="card-content">
              <img src={salad} alt="close up on a Greek Salad" />
              <header>
                <h4>Greek Salad</h4>
                <p className="price">$12.99</p>
              </header>
              <p>Try our delicious Greek Salad</p>
              <h4> Order Online! icon</h4>
            </div>
          </article>
          <article className="card">
            <div className="card-content">
              <img src={bruchetta} alt="Bruchetta topped baguette" />
              <header>
                <h4>Bruchetta</h4>
                <p className="price">$5.99</p>
              </header>
              <p>Our Bruchetta is a great addition to any dish or salad.</p>
              <h4>Order Online! icon</h4>
            </div>
          </article>
          <article className="card">
            <div className="card-content">
              <img src={dessert} alt="a slice of lemon cake " />
              <header>
                <h4>Lemon Dessert</h4>
                <p className="price">$7.99</p>
              </header>
              <p>Our lemon dessert is made with fresh meyer lemons!</p>
              <h4>Order Online! icon </h4>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Specials;
