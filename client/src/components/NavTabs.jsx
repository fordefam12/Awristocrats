import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.scss";
import LogoS from "../assets/images/fullAClogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import auth from "../utils/auth";

function NavTabs() {
  const currentPage = useLocation().pathname;

  


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/Home">
        <img src={LogoS} width={100} height={100} alt="Logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li
            className={`nav-item ${currentPage === "/" ? "active" : ""}`}
          >
            <Link className="nav-link" to="/">
              Brands
            </Link>
          </li>
          <li className={`nav-item ${currentPage === "/Men" ? "active" : ""}`}>
            <Link className="nav-link" to="/Men">
              Men
            </Link>
          </li>
          <li
            className={`nav-item ${currentPage === "/Women" ? "active" : ""}`}
          >
            <Link className="nav-link" to="/Women">
              Women
            </Link>
          </li>
          <li className={`nav-item ${currentPage === "/About" ? "active" : ""}`}>
            <Link className="nav-link" to="/About">
              About
            </Link>
          </li>
          {auth.loggedIn() ? (
            // Render Logout link when the user is logged in
            <li className={`nav-item ${currentPage === "/logout" ? "active" : ""}`}>
              <Link className="nav-link" onClick= {()=>
              auth.logout()}>
                Logout
              </Link>
            </li>
          ) : (
            // Render Login and Signup links when the user is not logged in
            <>
              <li className={`nav-item ${currentPage === "/signup" ? "active" : ""}`}>
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className={`nav-item ${currentPage === "/login" ? "active" : ""}`}>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
          <a href="/Cart" className="cart-link">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-counter">Cart</span>
          </a>
        </ul>
      </div>

    </nav>
  );
}

export default NavTabs;
