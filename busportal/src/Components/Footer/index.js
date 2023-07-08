import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      {/* <footer className="text-center text-lg-start bg-white text-muted mb-0">
        <div className="footer-bus-animation">
          <img
            src={process.env.PUBLIC_URL + '/assets/images/footer-bus2.png'}
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
                  <Link to="/instructions" className="text-reset">
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
          style={{ backgroundColor: "#ffb404" }}
        >
          © 2021 Bus Portal
        </div>
      </footer> */}

      <footer footer className="text-center text-lg-start text-muted" >
        <div className="footer-bus-animation">
          <img
            src={process.env.PUBLIC_URL + '/assets/images/footer-bus2.png'}
            alt="Bus"
            className="footer-bus-image"
          />
        </div>
        { /* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          { /* Left */}
          <div className="me-5 d-none d-lg-block">
            <b><span>Get connected with us on social networks:</span></b>
          </div>
          { /* Left */}

          { /* Right */}
          <div>
            <a href="https://www.facebook.com" target="_blank" className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://twitter.com/i/flow/login" target="_blank" className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.google.com/" target="_blank" className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://in.linkedin.com" target="_blank" className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://github.com/" target="_blank" className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          { /* Right */}
        </section>
        { /* Section: Social media */}

        { /* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            { /* Grid row */}
            <div className="row mt-3">
              { /* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                { /* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />CDAC BUS SERVICE
                </h6>
                <p>
                  We are here to provide a bus service to our Students
                </p>
              </div>
              { /* Grid column */}

              { /* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                { /* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/aboutus" style={{ textDecoration: "none" }} className="text-reset">About Us</Link>
                </p>
                <p>
                  <Link to="/contactus" style={{ textDecoration: "none" }} className="text-reset">Contact Us</Link>
                </p>
                <p>
                  <Link to="/Login" style={{ textDecoration: "none" }} className="text-reset">Login</Link>
                </p>
                <p>
                  <Link to="/register" style={{ textDecoration: "none" }} className="text-reset">Register / Sign Up</Link>
                </p>
              </div>
              { /* Grid column */}

              { /* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                { /* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <a href="http://127.0.0.1:5501/contactus.html" target="_blank" style={{ textDecoration: "none" }} className="text-body-secondary">Contact</a>
                </h6>
                <p>
                  <i className="fas fa-home me-3" /> CDAC Mumbai, Maharashtra-400614
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  cdacbusservices@gmail.com
                </p>
                <p><i className="fas fa-phone me-3" /> +91 8830711743</p>
                <p><i className="fas fa-phone me-3" /> +91 7507315824</p>
                <p><i className="fas fa-phone me-3" /> +91 9359526757</p>
              </div>
              { /* Grid column */}
            </div>
            { /* Grid row */}
          </div>
        </section>
        { /* Section: Links  */}

        { /* Copyright */}
        <div className="text-center p-4" >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="#">cdacbusservices.com</a>
        </div>
        { /* Copyright */}
      </footer >
    </>
  );
};
