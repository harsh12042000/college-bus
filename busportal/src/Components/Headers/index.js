import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top navbar-light p-3 shadow-sm"
        style={{ background: "#ffffff" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* <i className="fa-solid fa-shop me-2" />{" "} */}
            <strong>
              <Link to="/">
                <img
                  className="logo-img"
                  src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                  alt="Banner"
                />
              </Link>
            </strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link mx-2 text-uppercase active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/instructions">
                  Instructions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <ul></ul>
            {/* <ul className="navbar-nav ms-auto ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-2 text-uppercase"
                  href="#"
                  id="submenu3"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="submenu3">
                   <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign Up
                    </Link>
                  </li> 
                </ul>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headers;
