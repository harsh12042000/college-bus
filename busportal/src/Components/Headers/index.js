import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Headers = () => {

  const signoutHandler = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/login";
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top navbar-light p-1 shadow-lg bg-danger"
        style={{ background: "#ffffff" }}
      >
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand" href="#">
            {/* <i className="fa-solid fa-shop me-2" />{" "} */}
            <strong>
              <Link to="/">
                <img
                  className="logo-img"
                  src={process.env.PUBLIC_URL + "/assets/images/C-DAC.png"}
                  alt="Banner"
                  style={{height:"7vh", width:"6vw"}}
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
            <ul className="navbar-nav ms-auto justify-content-center align-items-center ">
              <li className="nav-item">
                <Link
                  className="nav-link mx-2 text-uppercase active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase text-white" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase text-white" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase text-white" to="/instructions">
                  Instructions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase text-white" to="/register">
                  Register
                </Link>
              </li>
              {
                userInfo === null ? 
                <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase text-white" to="/login">
                  Login
                </Link>
              </li> :
              <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase text-white" to="#logout" onClick={signoutHandler}>
                Logout
              </Link>
            </li>
              }
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
