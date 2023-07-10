import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { toast } from "react-toastify";


const Login = () => {

  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);


  const [prn, setPrn] = useState("");
  const [prnErr, setPrnErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handlePrnChange = (event) => {
    const inputValue = event.target.value;
    setPrn(inputValue);
    setPrnErr("");
  };
  const handlePasswordChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    setPasswordErr("");
  };

  const handleLogin = async(event) => {
    event.preventDefault();
    if (prn === "" || prn.length !== 10 || isNaN(prn)) {
      setPrnErr("**Enter a valid PRN");
      return;
    }
    if (password === "") {
      setPasswordErr("**Enter valid Password");
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:9091/login", {
        prn,
        password
      });

      setPrnErr("");
      setPasswordErr("");
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      // localStorage.setItem('booking', JSON.stringify(response.data.bus));

      if(response.data.checkAdmin === 1) {
        // navigate("/admindashboard");
        // toast("Admin Login Suceessfull !")
        window.location.href = "/admindashboard";
      } else if(response.data.checkAdmin === 0){
        // navigate(redirect || '/');
        window.location.href = "/details";
        // navigate("/details")
      } else {
        toast("Sorry...Please Check Details!")
      }

    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="container">
      <main className="account-pages" style={{ margin: "5% 0 2% 0" }}>
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
                    fontSize: 40,
                    fontWeight: "bolder",
                    color: "rgb(220, 58, 58)",
                  }}
                >
                  CDAC BUS SERVICE
                </p>
              </div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="p-5 shadow shadow-lg">
                <div style={{ marginBottom: 10 }}>
                  <input
                    type="text"
                    name="prn"
                    placeholder="Enter Your PRN/Service Number"
                    className="form-control form-control-lg"
                    onChange={handlePrnChange}
                  />
                  {prnErr && (
                    <div
                      className="mt"
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      {prnErr}
                    </div>
                  )}
                </div>
                <div style={{ marginBottom: 10 }}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="form-control form-control-lg"
                    onChange={handlePasswordChange}
                  />
                  {passwordErr && (
                    <div
                      className="mt"
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      {passwordErr}
                    </div>
                  )}
                  <p
                    id="passwordError"
                    style={{ color: "red", display: "none" }}
                  >
                    Invalid password
                  </p>
                </div>
                <div>
                  {/* <div style={{ marginBottom: 10 }}>
                    <input
                      type="checkbox"
                      name="Remember Me"
                      id="Remember Me"
                    />
                    <label htmlFor="Remember Me">Remember Me</label>
                  </div> */}
                  <div style={{ marginTop: 10 }}>
                    <button className="mt-2 btn btn-danger w-100" type="submit">
                      Log-in
                    </button>
                    <div className="d-flex justify-content-between">
                      <a
                        href="#"
                        style={{ marginBottom: 10, textDecoration: "none" }}
                      ></a>
                      <Link
                        to="/register"
                        style={{ marginBottom: 10, textDecoration: "none" }}
                      >
                        Register as a new user
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
