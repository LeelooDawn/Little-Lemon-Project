import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <footer className="footer-container">
        <div>
          <ul>
            <li>Contact Info</li>
            <li>Phone Number: 555 - 4697</li>
            <li>Email: LittleLemon@Lemon.com</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Reserve a Table</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
