import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faMale,
  faFemale,
  faInfoCircle,
  faShoppingCart,
  faUserAltSlash,
  faUserPlus,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons
import "../App.scss";
import LogoS from "../assets/images/Logos/awristocrats logo.png";
import auth from "../utils/auth";
import Cart from "./Cart";
// import { FaUserCheck, FaUserPlus } from "react-icons/fa6";

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/Home">
        <img src={LogoS} className="navbar-logo" alt="Logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMobileMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
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
          {auth.loggedIn() ? (
            // Render Logout link when the user is logged in
            <li
              className={`nav-item ${
                currentPage === "/logout" ? "active" : ""
              }`}
            >
              <Link className="nav-link" onClick={() => auth.logout()}>
                <FontAwesomeIcon icon={faUserAltSlash} className="link-icon" />
              </Link>
            </li>
          ) : (
            // Render Login and Signup links when the user is not logged in
            <>
              <li
                className={`nav-item ${
                  currentPage === "/signup" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link link-icon"
                  to="/signup"
                  data-text="SignUp"
                >
                  <FontAwesomeIcon icon={faUserPlus} className="link-icon" />
                </Link>
              </li>
              <li
                className={`nav-item ${
                  currentPage === "/login" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link link-icon"
                  to="/login"
                  data-text="Login"
                >
                  <FontAwesomeIcon icon={faUserCheck} className="link-icon" />
                </Link>
              </li>
            </>
          )}
        </ul>
        <li className={`nav-item ${currentPage === "/Cart" ? "active" : ""}`}>
            <Link
              className="nav-link link-icon"
              to="/Cart"
              data-text="Cart" // Specify the text to display on hover
            >
              <FontAwesomeIcon icon={faShoppingCart} className="link-icon" />
            </Link>
          </li>
      </div>
    </nav>
  );
}

export default NavTabs;
