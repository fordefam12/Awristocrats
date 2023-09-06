import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faMale,
  faFemale,
  faInfoCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons
import "../App.scss";
import LogoS from "../assets/images/Logos/awristocrats logo.png";

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/Home">
        <img
          src={LogoS}
          className="navbar-logo"
          alt="Logo"
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMobileMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${
          isMobileMenuOpen ? "show" : ""
        }`}
      >
        <ul className="navbar-nav">
          <li className={`nav-item ${currentPage === "/" ? "active" : ""}`}>
            <Link
              className="nav-link link-icon"
              to="/"
              data-text="Brands" // Specify the text to display on hover
            >
              <FontAwesomeIcon icon={faStore} className="link-icon" />
            </Link>
          </li>
          <li className={`nav-item ${currentPage === "/Men" ? "active" : ""}`}>
            <Link
              className="nav-link link-icon"
              to="/Men"
              data-text="Men" // Specify the text to display on hover
            >
              <FontAwesomeIcon icon={faMale} className="link-icon" />
            </Link>
          </li>
          <li
            className={`nav-item ${currentPage === "/Women" ? "active" : ""}`}
          >
            <Link
              className="nav-link link-icon"
              to="/Women"
              data-text="Women" // Specify the text to display on hover
            >
              <FontAwesomeIcon icon={faFemale} className="link-icon" />
            </Link>
          </li>
          <li
            className={`nav-item ${currentPage === "/About" ? "active" : ""}`}
          >
            <Link
              className="nav-link link-icon"
              to="/About"
              data-text="About" // Specify the text to display on hover
            >
              <FontAwesomeIcon icon={faInfoCircle} className="link-icon" />
            </Link>
          </li>
        </ul>
        <a href="/Cart" className="cart-link">
          <FontAwesomeIcon icon={faShoppingCart} className="link-icon" />
          <span className="cart-counter">Cart</span>
        </a>
      </div>
    </nav>
  );
}

export default NavTabs;
