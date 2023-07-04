import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-white text-muted mb-0">
        <div className="footer-bus-animation">
          <img
            src="https://www.shutterstock.com/image-vector/school-bus-vector-illustration-isolated-600w-571415128.jpg"
            alt="Bus"
            className="footer-bus-image"
          />
        </div>
        <section className="d-flex justify-content-center justify-content-lg-between border-bottom"></section>
        <section className="">
          <div className="container text-center text-md-start">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary" />
                  Bus Portal
                </h6>
                <p>Text</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">T&C</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Instructions
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/contactus" className="text-reset">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link to="/aboutus" className="text-reset">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Account
                  </Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary" /> Mumbai,
                  Maharashtra
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary" /> +91
                  8830711743
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary" /> +91
                  8830711744
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="footer-overlay"></div>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "#d84c54" }}
        >
          © 2021 Bus Portal
        </div>
      </footer>
    </>
  );
};
