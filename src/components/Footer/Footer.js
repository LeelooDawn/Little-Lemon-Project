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
              <ul className="contact">
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
                    className="foot-link"
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
                    className="foot-link"
                  >
                    <p>About</p>
                  </Link>
                </li>
                <Link
                  to="/"
                  onClick={() => {
                    scrollTo("#testimonials");
                  }}
                  className="foot-link"
                >
                  <p>Testimonials</p>
                </Link>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#header");
                    }}
                    className="foot-link"
                  >
                    <p>Reserve a Table</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <a href="www.instagram.com" className="foot-link">
                <FontAwesomeIcon icon={faCamera} color="#f4ce14" size="lg" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
