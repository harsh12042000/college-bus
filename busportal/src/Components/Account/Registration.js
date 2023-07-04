import React from "react";

export const Registration = () => {
  return (
    <>
      <div className="container">
        <div
          className="account-pages row d-flex flex-column justify-content-center align-items-center mt-5"
          style={{ height: "100vh" }}
        >
          <div className="shadow p-5 mb-5 bg-white rounded rounded col-sm-12 col-md-6">
            <h1 className="text-danger" style={{ marginLeft: "30%" }}>
              REGISTRATION
            </h1>
            <hr style={{ color: "red" }} />
            <div className="d-flex">
              <div style={{ flex: 1 }}>
                <div>
                  <h5 className="mt-4">NAME</h5>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Enter your fullname"
                    className="form-control form-control-lg"
                  />
                </div>
                <div>
                  <h5 className="mt-4">STANDARD</h5>
                  <input
                    type="text"
                    name="Standard"
                    id="text-input"
                    placeholder="Enter your Standard"
                    className="form-control form-control-lg"
                  />
                </div>
                <div>
                  <h5 className="mt-4">PASSWORD</h5>
                  <input
                    type="password"
                    id="passwordInput"
                    name="password"
                    placeholder="Enter your password"
                    className="form-control form-control-lg"
                  />
                  <p
                    id="passwordError"
                    style={{ color: "red", display: "none" }}
                  >
                    Invalid password
                  </p>
                </div>
              </div>
              <div className="ms-2" style={{ flex: 1 }}>
                <div>
                  <h5 className="mt-4">PRN</h5>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your PRN"
                    className="form-control form-control-lg"
                  />
                </div>
                <div>
                  <h5 className="mt-4">CONTACT NUMBER</h5>
                  <input
                    type="tel"
                    id="phone-input"
                    name="number"
                    placeholder="Enter your number"
                    className="form-control form-control-lg"
                  />
                </div>
                <div>
                  <h5 className="mt-4">CONFIRM PASSWORD</h5>
                  <input
                    type="password"
                    id="confirmPasswordInput"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    className="form-control form-control-lg"
                  />
                  <p
                    id="confirmPasswordError"
                    style={{ color: "red", display: "none" }}
                  >
                    Passwords do not match
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 d-flex align-items-center">
              <div className="fs-5 fw-medium" style={{ flex: 1 }}>
                Gender
              </div>
              <div
                className="fw-semibold d-flex"
                style={{ justifyContent: "space-evenly", flex: 3 }}
              >
                <div>
                  <input
                    type="radio"
                    name="gender"
                    defaultValue="male"
                    id={1}
                  />
                  Male
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    defaultValue="female"
                    id={2}
                  />
                  Female
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    defaultValue="nottosay"
                    id={3}
                  />
                  Prefer not to say
                </div>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="button"
                defaultValue="Register"
                className="mt-2 btn btn-danger w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
