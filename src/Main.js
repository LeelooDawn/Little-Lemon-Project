import React from "react";
import salad from "./Images/greek salad.jpg";
import bruchetta from "./Images/bruchetta.svg";
import dessert from "./Images/lemon dessert.jpg";
import mario from "./Images/Mario and Adrian A.jpg";
import adrian from "./Images/Mario and Adrian b.jpg";

function Main() {
  return (
    <main class="main-container">
      <div class="menu">
        <div class="cards">
          <article class="card">
            <img src={salad} alt="close up on a Greek Salad" />
            <header>
              <h2>Greek Salad</h2>
              <p>$12.99</p>
            </header>
            <div class="content">
              <p>Try our delicious Greek Salad</p>
            </div>
            <footer> Order Online! </footer>
          </article>
          <article class="card">
            <img src={bruchetta} alt="Bruchetta topped baguette" />
            <header>
              <h2>Bruchetta</h2>
              <p>$5.99</p>
            </header>
            <div class="content">
              <p>Our Bruchetta is a great addition to any dish or salad.</p>
            </div>
            <footer>Order Online!</footer>
          </article>
          <article class="card">
            <img src={dessert} alt="a slice of lemon cake " />
            <header>
              <h2>Lemon Dessert</h2>
              <p>$7.99</p>
            </header>
            <div class="content">
              <p>Our lemon dessert is made with fresh meyer lemons!</p>
            </div>
            <footer>Order Online!</footer>
          </article>
        </div>
      </div>
      <div class="testimonials">
        <h2 class="testimonial-headline">Testimonials</h2>
        <div class="reviews">
          <div>
            <h3>5 stars</h3>
            <p>
              "I love Little Lemon. Especially their Bruchetta, its great! -
              Tracy{" "}
            </p>
          </div>
          <div>
            <h3>5 stars</h3>
            <p>
              "I had my birthday at Little Lemon. They provided the best Lemon
              Cake ever! - Rebecca{" "}
            </p>
          </div>
          <div>
            <h3>5 stars</h3>
            <p>
              "Little Lemon is a great weekend night out. They have live music
              on Fridays!{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="about">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon was opened by two best friends. Mario and Adrian went
            to the same culinary school and have the same love of Mediterranean
            food. They wanted to share their love with their community
          </p>
        </div>
        <div class="chef-images">
          <img
            src={mario}
            alt="Mario and Adrian picking out spices"
            width="250px"
          />
          <img src={adrian} alt="Adrian and Mario" width="250px" />
        </div>
      </div>
    </main>
  );
}

export default Main;
