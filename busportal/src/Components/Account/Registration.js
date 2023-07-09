import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";

export const Registration = () => {

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState("");
  const [prn, setPrn] = useState("");
  const [prnErr, setPrnErr] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberErr, setContactNumberErr] = useState("");
  const [genderErr, setGenderErr] = useState("");
  const [standardErr, setStandardErr] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleUserNameChange = (event) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
    setUserNameErr("");
  };

  const handlePasswordChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (event) => {
    const inputValue = event.target.value;
    setConfirmPassword(inputValue);
    setConfirmPasswordError("");
  };

  const handleContactNumberChange = (event) => {
    const inputValue = event.target.value;
    setContactNumber(inputValue);
    setContactNumberErr("");
  };

  const handlePrnChange = (event) => {
    const inputValue = event.target.value;
    setPrn(inputValue);
    setPrnErr("");
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    if (userName === "") {
      setUserNameErr("**Name field should not be empty");
      return;
    }

    if (!isNaN(userName)) {
      setUserNameErr("**Name should not be numeric");
      return;
    }

    if (prn === "" || prn.length !== 10 || isNaN(prn)) {
      setPrnErr("**Enter a valid PRN");
      return;
    }

    const standard = document.getElementById("standard");
    const selectedStandard = standard.value;

    if (selectedStandard === "") {
      setStandardErr("**Please select your Standard");
      return;
    }

    if (contactNumber === "") {
      setContactNumberErr("**Phone No field should not be empty");
      return;
    }

    if (isNaN(contactNumber)) {
      setContactNumberErr("**Enter a valid phone number");
      return;
    }

    if (contactNumber.length !== 10) {
      setContactNumberErr("**Enter a valid phone number");
      return;
    }

    const selectedGender = document.querySelector('input[name="gender"]:checked');

    if (!selectedGender) {
      setGenderErr("**Please select a gender");
      return;
    }

    if (password === "") {
      setPasswordError("**Password field should not be empty");
      return;
    }

    if (password.length < 6) {
      setPasswordError("**Password should be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("**Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:9091/add-student", {
        prn,
        userName,
        contactNumber,
        standard: selectedStandard,
        password,
        gender: selectedGender.value,
      });

      toast.success("Registered !");

      if(response != null) {
        navigate("/login");
      }

      setContactNumber("");
      setUserName("");
      setPrn("");
      setGenderErr("");
    } catch (error) {
      toast.error("Please Check Your PRN and all other details");
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="account-pages row d-flex flex-column justify-content-center align-items-center mt-5" style={{ height: "100vh" }}>
          <div className="shadow p-5 mb-5 bg-white rounded col-sm-12 col-md-6">
            <h1 className="text-danger" style={{ marginLeft: "30%" }}>
              REGISTRATION
            </h1>
            <hr style={{ color: "red" }} />
            <form onSubmit={handleSubmit} action="#">
              <div className="d-flex">
                <div style={{ flex: 1 }}>
                  <div>
                    <h5 className="mt-4">NAME</h5>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Enter your fullname"
                      className="form-control form-control-lg"
                      onChange={handleUserNameChange}
                    />
                    {userNameErr && (
                      <div className="mt" style={{ color: "red", fontWeight: "bold" }}>
                        {userNameErr}
                      </div>
                    )}
                  </div>
                  <div>
                    <div>
                      <h5 className="mt-4">STANDARD</h5>
                      <select
                        name="standard"
                        id="standard"
                        className="form-control form-control-lg"
                      >
                        <option value="">Select your Standard</option>
                        <option value="PG-DAC">PG-DAC</option>
                        <option value="PG-DBDA">PG-DBDA</option>
                      </select>
                      {standardErr && (
                        <div className="" style={{ color: "red", fontWeight: "bold" }}>
                          {standardErr}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h5 className="mt-4">PASSWORD</h5>
                    <input
                      type="password"
                      id="passwordInput"
                      name="password"
                      placeholder="Enter your password"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {passwordError && (
                      <div className="mt" style={{ color: "red", fontWeight: "bold" }}>
                        {passwordError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="ms-2" style={{ flex: 1 }}>
                  <div>
                    <h5 className="mt-4">PRN</h5>
                    <input
                      type="text"
                      name="prn"
                      placeholder="Enter your PRN"
                      className="form-control form-control-lg"
                      onChange={handlePrnChange}
                    />
                    {prnErr && (
                      <div className="mt" style={{ color: "red", fontWeight: "bold" }}>
                        {prnErr}
                      </div>
                    )}
                  </div>
                  <div>
                    <h5 className="mt-4">CONTACT NUMBER</h5>
                    <input
                      type="tel"
                      id="phone-input"
                      name="number"
                      placeholder="Enter your number"
                      className="form-control form-control-lg"
                      onChange={handleContactNumberChange}
                    />
                    {contactNumberErr && (
                      <div className="" style={{ color: "red", fontWeight: "bold" }}>
                        {contactNumberErr}
                      </div>
                    )}
                  </div>
                  <div>
                    <h5 className="mt-4">CONFIRM PASSWORD</h5>
                    <input
                      type="password"
                      id="confirmPasswordInput"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      className="form-control form-control-lg"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                    {confirmPasswordError && (
                      <div className="mt" style={{ color: "red", fontWeight: "bold" }}>
                        {confirmPasswordError}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-3 d-flex align-items-center">
                <div className="fs-5 fw-medium" style={{ flex: 1 }}>
                  Gender
                </div>
                <div className="fw-semibold d-flex" style={{ justifyContent: "space-evenly", flex: 3 }}>
                  <div>
                    <input type="radio" name="gender" value="male" id={1} />
                    Male
                  </div>
                  <div>
                    <input type="radio" name="gender" value="female" id={2} />
                    Female
                  </div>
                  <div>
                    <input type="radio" name="gender" value="nottosay" id={3} />
                    Prefer not to say
                  </div>
                </div>
              </div>
              {genderErr && (
                <div className="" style={{ color: "red", fontWeight: "bold" }}>
                  {genderErr}
                </div>
              )}
              <div className="mt-2">
                <button className="mt-2 btn btn-danger w-100" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
