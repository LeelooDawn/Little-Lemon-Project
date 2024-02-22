import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer-background">
      <div className="container">
        <footer>
          <div className="footer-grid">
            <div>
              <ul>
                <li>Contact Info</li>
                <li>Phone Number: 312 - 555 - 4697</li>
                <li>Email: LittleLemon@Lemon.com</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#header");
                    }}
                  >
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#about");
                    }}
                  >
                    <p>About</p>
                  </Link>
                </li>
                <Link
                  to="/"
                  onClick={() => {
                    scrollTo("#Testimonials");
                  }}
                >
                  <p>Testimonials</p>
                </Link>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#header");
                    }}
                  >
                    <p>Reserve a Table</p>
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCamera} color="#f4ce14" />
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
