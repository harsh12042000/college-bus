import React from "react";

const AddBus = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center mt-5">
          <div className="shadow p-5 mb-5 bg-white rounded rounded col-sm-12 col-md-6">
            <h1 className="text-danger" style={{ marginLeft: "30%" }}>
              Add New Bus
            </h1>
            <hr style={{ color: "red" }} />

            <div>
              <h5 className="mt-4">Vehicle Number</h5>
              <input
                type="text"
                name="vehicleNumber"
                placeholder="Enter Vehicle Number"
                className="form-control form-control-lg"
              />
            </div>
            <div>
              <h5 className="mt-4">Seat Capacity</h5>
              <input
                type="number"
                name="seatCapacity"
                placeholder="Enter Seat Capacity"
                className="form-control form-control-lg"
              />
            </div>
            <div>
              <h5 className="mt-4">Area</h5>
              <input
                type="text"
                name="area"
                placeholder="Enter Area"
                className="form-control form-control-lg"
              />
            </div>
            <div>
              <h5 className="mt-4">Fees</h5>
              <input
                type="number"
                name="fees"
                placeholder="Enter Fees"
                className="form-control form-control-lg"
              />
            </div>

            <div className="mt-2">
              <input type="submit" className="mt-2 btn btn-danger w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBus;
