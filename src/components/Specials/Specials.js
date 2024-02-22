import React from "react";
import "./Specials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import salad from "../../images/greek salad.jpg";
import bruchetta from "../../images/bruchetta.svg";
import dessert from "../../images/lemon dessert.jpg";

const icon = <FontAwesomeIcon icon={faCar} />;

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
              <p>
                Try our delicious Greek Salad. The Greek Salad comes with fresh
                tomatos, olives, and cucumbers and a homemade Greek dressing
              </p>
              <button>
                Order Online! <span className="order">{icon}</span>{" "}
              </button>
            </div>
          </article>
          <article className="card">
            <div className="card-content">
              <img src={bruchetta} alt="Bruchetta topped baguette" />
              <header>
                <h4>Bruchetta</h4>
                <p className="price">$5.99</p>
              </header>
              <p>
                Our Bruchetta is a great addition to any dish or salad. Our
                Toasted bread is topped with tomatoes, Parmesan cheese, garlic,
                and fresh basil{" "}
              </p>
              <button>
                Order Online! <span className="order">{icon}</span>{" "}
              </button>
            </div>
          </article>
          <article className="card">
            <div className="card-content">
              <img src={dessert} alt="a slice of lemon cake " />
              <header>
                <h4>Lemon Dessert</h4>
                <p className="price">$7.99</p>
              </header>
              <p>
                Our lemon dessert is a light, creamy, and refreshing lemon cake
                made with Meyer lemons. Served with a simple dusting of powdered
                sugar and dollops of whipped creme.
              </p>
              <div className="order">
                <button>
                  Order Online! <span className="order">{icon}</span>{" "}
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Specials;
