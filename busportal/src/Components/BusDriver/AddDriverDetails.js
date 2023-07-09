import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDriver = () => {
  const [driverName, setDriverName] = useState("");
  const [driverNameErr, setDriverNameErr] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberErr, setContactNumberErr] = useState("");
  const [license, setLicense] = useState("");
  const [licenseErr, setLicenseErr] = useState("");
  const [driverAge, setDriverAge] = useState("");
  const [driverAgeErr, setDriverAgeErr] = useState("");
  const [busId, setBusId] = useState("");
  const [busIdErr, setBusIdErr] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo == null || userInfo != null && userInfo.checkAdmin == 0) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleDriverName = (event) => {
    const inputValue = event.target.value;
    setDriverName(inputValue);
    setDriverNameErr("");
  };

  const handleContactNumber = (event) => {
    const inputValue = event.target.value;
    setContactNumber(inputValue);
    setContactNumberErr("");
  };

  const handleLicense = (event) => {
    const inputValue = event.target.value;
    setLicense(inputValue);
    setLicenseErr("");
  };

  const handleDriverAge = (event) => {
    const inputValue = event.target.value;
    setDriverAge(inputValue);
    setDriverAgeErr("");
  };

  const handleBusId = (event) => {
    const inputValue = event.target.value;
    setBusId(inputValue);
    setBusIdErr("");
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (driverName === "" || !isNaN(driverName)) {
      setDriverNameErr("**Enter a valid Driver Name");
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

    if (license === "" || license.length < 10) {
      setLicenseErr("**Enter a valid License no");
      return;
    }

    if (driverAge === "") {
      setDriverAgeErr("**Age field should not be empty");
      return;
    }
    if (driverAge < 25 || driverAge > 45) {
      setDriverAgeErr("**Driver age should be between 25 to 44 years");
      return;
    }
    if (busId === "" || isNaN(busId)) {
      setBusIdErr("**Enter valid bus Id");
      return;
    }


    try {
      const response = await axios.post("http://localhost:9091/add-driver", {
        driverName,
        driverNumber: contactNumber,
        license,
        driverAge,
        bus: {
          bus_id: busId
        }
      });
    
      if (response !== null) {
        navigate("/admindashboard");
      }
    
    } catch (error) {
      alert("Console Error!");
      console.error(error);
    }
    
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center mt-5">
          <div className="shadow p-5 mb-5 bg-white rounded rounded col-sm-12 col-md-6">
            <h1 className="text-danger" style={{ marginLeft: "30%" }}>
              Add New Driver
            </h1>
            <hr style={{ color: "red" }} />
            <form onSubmit={handleSubmit} action="#">
              <div>
                <h5 className="mt-4">Name</h5>
                <input
                  type="text"
                  name="driverName"
                  placeholder="Enter Driver Name"
                  className="form-control form-control-lg"
                  onChange={handleDriverName}
                />
                {driverNameErr && (
                  <div
                    className="mt"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {driverNameErr}
                  </div>
                )}
              </div>
              <div>
                <h5 className="mt-4">Contact Number</h5>
                <input
                  type="number"
                  name="contactNumber"
                  placeholder="Enter Mobile Number"
                  className="form-control form-control-lg"
                  onChange={handleContactNumber}
                />
                {contactNumberErr && (
                  <div
                    className="mt"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {contactNumberErr}
                  </div>
                )}
              </div>
              <div>
                <h5 className="mt-4">License</h5>
                <input
                  type="text"
                  name="license"
                  placeholder="Enter Driving License Number"
                  className="form-control form-control-lg"
                  onChange={handleLicense}
                />
                {licenseErr && (
                  <div
                    className="mt"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {licenseErr}
                  </div>
                )}
              </div>
              <div>
                <h5 className="mt-4">Age</h5>
                <input
                  type="number"
                  name="driverAge"
                  placeholder="Enter Driver Age"
                  className="form-control form-control-lg"
                  onChange={handleDriverAge}
                />
                {driverAgeErr && (
                  <div
                    className="mt"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {driverAgeErr}
                  </div>
                )}
              </div>
              <div>
                <h5 className="mt-4">To Assign Bus, Enter Bus ID : </h5>
                <input
                  type="number"
                  name="busId"
                  placeholder="Enter Bus ID"
                  className="form-control form-control-lg"
                  onChange={handleBusId}
                />
                {busIdErr && (
                  <div
                    className="mt"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {busIdErr}
                  </div>
                )}
              </div>
              <div className="mt-2">
                <button className="mt-2 btn btn-danger w-100" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDriver;
