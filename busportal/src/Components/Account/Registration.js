import React, { useState } from "react";

export const Registration = () => {
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [prn, setprn] = useState("");
  const [prnErr, setprnErr] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberErr, setContactNumberErr] = useState("");
  const [genderErr, setGenderErr] = useState("");
  const [standardErr, setStandardErr] = useState("");

  const handleUserNameChange = (event) => {
    const inputValue = event.target.value;
    setUsername(inputValue);
    setUsernameErr("");
  };
  const handleContactNumberChange = (event) => {
    const inputValue = event.target.value;
    setContactNumber(inputValue);
    setContactNumberErr("");
  };
  const handleprnChange = (event) => {
    const inputValue = event.target.value;
    setprn(inputValue);
    setprnErr("");
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (username == "") {
      setUsernameErr("**Name field should not be empty");
      return;
    }
    if (!isNaN(username)) {
      setUsernameErr("**Name should not be numeric");
      return;
    }
    if (prn == "" || prn.length < 10 || prn.length > 10 || isNaN(prn)) {
      setprnErr("**Enter valid PRN");
      return;
    }
    const standardSelect = document.getElementById("standardSelect");
    const selectedStandard = standardSelect.value;

    if (selectedStandard === "") {
      setStandardErr("**Please select your Standard");
      return;
    }
    if (contactNumber == "") {
      setContactNumberErr("**Phone No field should not be Empty");
      return;
    }
    if (isNaN(contactNumber)) {
      setContactNumberErr("**Enter valid phone no");
      return;
    }
    if (contactNumber.length < 10) {
      setContactNumberErr("**Enter valid phone no");
      return;
    }

    const genderInputs = document.getElementsByName("gender");
    let selectedGender = "";
    for (let i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {
        selectedGender = genderInputs[i].value;
        break;
      }
    }
    if (selectedGender === "") {
      setGenderErr("**Please select a gender");
      return;
    }

    setContactNumber = "";
    setUsername = "";
    setprn = "";

    // try {
    //   const response = await axios.post("YOUR_API_ENDPOINT", {
    //     username,
    //     prn,
    //     contactNumber,
    //     // Include other data to send to the API
    //   });

    //   console.log(response.data); 
  
    //   // Reset form fields
    //   setContactNumber("");
    //   setUsername("");
    //   setprn("");
    // } catch (error) {
    //   console.error(error);
    // }

  };
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
                    {usernameErr && (
                      <div
                        className="mt"
                        style={{ color: "red", fontWeight: "bold" }}
                      >
                        {usernameErr}
                      </div>
                    )}
                  </div>
                  <div>
                    <div>
                      <h5 className="mt-4">STANDARD</h5>
                      <select
                        name="standard"
                        id="standardSelect"
                        className="form-control form-control-lg"
                      >
                        <option value="">Select your Standard</option>
                        <option value="PG-DAC">PG-DAC</option>
                        <option value="PG-DBDA">PG-DBDA</option>
                      </select>
                      {standardErr && (
                        <div
                          className=""
                          style={{ color: "red", fontWeight: "bold" }}
                        >
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
                      //onChange={handlePasswordChange}
                    />
                    <div
                      id="passwordError"
                      style={{ color: "red", display: "none" }}
                    >
                      Invalid password
                    </div>
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
                      onChange={handleprnChange}
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
                  <div>
                    <h5 className="mt-4">CONTACT NUMBER</h5>
                    <input
                      type="tel"
                      id="phone-input"
                      name="contactNumber"
                      placeholder="Enter your number"
                      className="form-control form-control-lg"
                      onChange={handleContactNumberChange}
                    />
                    {contactNumberErr && (
                      <div
                        className=""
                        style={{ color: "red", fontWeight: "bold" }}
                      >
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
                      //onChange={handleConfirmPasswordChange}
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
