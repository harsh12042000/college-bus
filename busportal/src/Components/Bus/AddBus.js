import React, { useState } from "react";

const AddBus = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleNumberErr, setVehicleNumberErr] = useState("");
  const [seatCapacity, setSeatCapacity] = useState("");
  const [seatCapacityErr, setSeatCapacityErr] = useState("");
  const [source, setSource] = useState("");
  const [sourceErr, setSourceErr] = useState("");
  const [fees, setFees] = useState("");
  const [feesErr, setFeesErr] = useState("");

  const handleVehicleNumber = (event) => {
    const inputValue = event.target.value;
    setVehicleNumber(inputValue);
    setVehicleNumberErr("");
  };

  const handleSeatCapacity = (event) => {
    const inputValue = event.target.value;
    setSeatCapacity(inputValue);
    setSeatCapacityErr("");
  };

  const handleSource = (event) => {
    const inputValue = event.target.value;
    setSource(inputValue);
    setSourceErr("");
  };

  const handleFees = (event) => {
    const inputValue = event.target.value;
    setFees(inputValue);
    setFeesErr("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (vehicleNumber === "") {
      setVehicleNumberErr("**Vehicle Number field should not be empty");
      return;
    }
    if (seatCapacity === "" || isNaN(seatCapacity)) {
      setSeatCapacityErr("**Enter a valid seat capacity number");
      return;
    }
    if (source === "") {
      setSourceErr("**Please select a source");
      return;
    }
    if (fees === "" || isNaN(fees)) {
      setFeesErr("**Please enter valid fees");
      return;
    }
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center mt-5">
          <div className="shadow p-5 mb-5 bg-white rounded rounded col-sm-12 col-md-6">
            <h1 className="text-danger" style={{ marginLeft: "30%" }}>
              Add New Bus
            </h1>
            <hr style={{ color: "red" }} />
            <form onSubmit={handleSubmit} action="#">
              <div>
                <h5 className="mt-4">Vehicle Number</h5>
                <input
                  type="text"
                  name="vehicleNumber"
                  placeholder="Enter Vehicle Number"
                  className="form-control form-control-lg"
                  onChange={handleVehicleNumber}
                />
                {vehicleNumberErr && (
                  <div
                    className="mt"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {vehicleNumberErr}
                  </div>
                )}
              </div>
              <div>
                <h5 className="mt-4">Seat Capacity</h5>
                <input
                  type="number"
                  name="seatCapacity"
                  placeholder="Enter Seat Capacity"
                  className="form-control form-control-lg"
                  onChange={handleSeatCapacity}
                />
                {seatCapacityErr && (
                  <div
                    className="mt"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {seatCapacityErr}
                  </div>
                )}
              </div>
              <div>
                <h5 className="mt-4">Source</h5>
                <select
                  name="source"
                  className="form-control form-control-lg"
                  onChange={handleSource}
                >
                  <option value="">Select Source</option>
                  <option value="Source 1">MGM Hospital</option>
                  <option value="Source 2">Kamothe</option>
                  <option value="Source 3">Padeghar</option>
                </select>
                {sourceErr && (
                  <div
                    className="mt"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {sourceErr}
                  </div>
                )}
              </div>
              <div>
                <h5 className="mt-4">Fees</h5>
                <input
                  type="number"
                  name="fees"
                  placeholder="Enter Fees"
                  className="form-control form-control-lg"
                  onChange={handleFees}
                />
                {feesErr && (
                  <div
                    className="mt"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {feesErr}
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

export default AddBus;
