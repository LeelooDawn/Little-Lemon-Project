import React from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const icon = <FontAwesomeIcon icon={faStar} />;

function Testimonials() {
  return (
    <div className="testimonials-background">
      <div className="container">
        <div className="testimonials" id="testimonials">
          <h2 className="testimonial-headline">Testimonials</h2>
          <div className="reviews-grid">
            <div className="review">
              <div className="stars">
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
              </div>
              <p>
                "I love Little Lemon. Especially their Bruchetta, its great! -
                Tracy{" "}
              </p>
            </div>
            <div className="review">
              <div className="stars">
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
              </div>
              <p>
                "I had my birthday at Little Lemon. They provided the best Lemon
                Cake ever! - Rebecca{" "}
              </p>
            </div>
            <div className="review">
              <div className="stars">
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
                <span>{icon}</span>
              </div>
              <p>
                "Little Lemon is a great weekend night out. They have live music
                on Fridays!" - Anonymous{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
