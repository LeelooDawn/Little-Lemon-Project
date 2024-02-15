import React from "react";
import mario from "./Images/Mario and Adrian A.jpg";
import adrian from "./Images/Mario and Adrian b.jpg";

function About() {
  return (
    <div>
      <div class="about">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon was opened by two best friends. Mario and Adrian went to
          the same culinary school and have the same love of Mediterranean food.
          They wanted to share their love with their community
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
  );
}
