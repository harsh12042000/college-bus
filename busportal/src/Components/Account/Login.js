import React from "react";

const Login = () => {
  return (
    <div className="container">
      <main className="account-pages" style={{ margin: "5% 0 2% 0" }}>
        <form>
          <div
            className="row justify-content-center align-items-center mb-1"
            style={{ height: "100vh" }}
          >
            <div className="col-sm-12 col-md-6 shadow shadow-lg bg-white rounded p-5 mb-5">
              <div className="row justify-content-center">
                <div
                  className="d-flex justify-content-center col-md-10 col-sm-12"
                  style={{ height: "20vh" }}
                >
                  <p
                    style={{
                      fontSize: 50,
                      fontWeight: "bolder",
                      color: "rgb(220, 58, 58)",
                    }}
                  >
                    CDAC BUS SERVICE
                  </p>
                </div>
              </div>
              <div className="p-5 shadow shadow-lg">
                <div style={{ marginBottom: 10 }}>
                  <input
                    type="text"
                    placeholder="Enter PRN"
                    className="form-control mb-1"
                  />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <input
                    type="password"
                    id="passwordInput"
                    placeholder="Enter Password"
                    className="form-control mb-1"
                  />
                  <p id="passwordError" style={{ color: "red", display: "none" }}>
                    Invalid password
                  </p>
                </div>
                <div>
                  <div style={{ marginBottom: 10 }}>
                    <input type="checkbox" name="Remember Me" id="Remember Me" />
                    <label htmlFor="Remember Me">Remember Me</label>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <input
                      type="button"
                      defaultValue="Log In"
                      className="btn btn-danger w-100"
                    />
                    <div className="d-flex justify-content-between">
                      <a
                        href="#"
                        style={{ marginBottom: 10, textDecoration: "none" }}
                      >
                      </a>
                      <a
                        href="Registration.html"
                        style={{ marginBottom: 10, textDecoration: "none" }}
                      >
                        Register as a new user
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
