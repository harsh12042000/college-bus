import React from "react";

const AddDriver = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center mt-5">
          <div className="shadow p-5 mb-5 bg-white rounded rounded col-sm-12 col-md-6">
            <h1 className="text-danger" style={{ marginLeft: "30%" }}>
              Add New Driver
            </h1>
            <hr style={{ color: "red" }} />

            <div>
              <h5 className="mt-4">Name</h5>
              <input
                type="text"
                name="driverName"
                placeholder="Enter Driver Name"
                className="form-control form-control-lg"
              />
            </div>
            <div>
              <h5 className="mt-4">Contact Number</h5>
              <input
                type="number"
                name="driverNumber"
                placeholder="Enter Mobile Number"
                className="form-control form-control-lg"
              />
            </div>
            <div>
              <h5 className="mt-4">License</h5>
              <input
                type="text"
                name="license"
                placeholder="Enter Driving License Number"
                className="form-control form-control-lg"
              />
            </div>
            <div>
              <h5 className="mt-4">Age</h5>
              <input
                type="number"
                name="driverAge"
                placeholder="Enter Driver Age"
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

export default AddDriver;
