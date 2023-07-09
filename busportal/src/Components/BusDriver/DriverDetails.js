import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DriverDetails = () => {
  const [driverData, setDriverData] = useState([]);
  const [editDriver, setEditDriver] = useState(null);
  const [formValues, setFormValues] = useState({
    driverName: "",
    driverNumber: "",
    license: "",
    driverAge: "",
    busId: "",
    assignedArea: "",
  });
  const [showModal, setShowModal] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9091/driver-details"
        );
        setDriverData(response.data);
      } catch (error) {
        alert("Console Error");
        console.log(error);
      }
    };

    fetchBusDetails();
  }, []);

  const handleEdit = (driver) => {
    setEditDriver(driver);
    setFormValues({
      driver_id: driver.driver_id,
      driverName: driver.driverName,
      driverNumber: driver.driverNumber,
      license: driver.license,
      driverAge: driver.driverAge,
      busId: driver.bus.bus_id,
      assignedArea: driver.bus.source,
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        driver_id: formValues.driver_id,
        driverName: formValues.driverName,
        driverNumber: formValues.driverNumber,
        license: formValues.license,
        driverAge: formValues.driverAge,
        bus: {
          bus_id: formValues.busId,
        },
      };

      const response = await axios.post(
        "http://localhost:9091/update-driver",
        updatedData
      );
      window.location.href = "/driverdetails"
      // setDriverData((prevData) =>
      //   prevData.map((driver) =>
      //     driver.driver_id === editDriver.driver_id ? response.data : driver
      //   )
      // );

      // setEditDriver(null);
      // setFormValues({
      //   driver_id: "",
      //   driverName: "",
      //   driverNumber: "",
      //   license: "",
      //   driverAge: "",
      //   busId: "",
      //   assignedArea: "",
      // });
      // setShowModal(false);
    } catch (error) {
      alert("Console Error");
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <h2>Driver Details</h2>
        </div>
        <div className="mt-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Driver ID</th>
                <th scope="col">Name</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Licence</th>
                <th scope="col">Age</th>
                <th scope="col">Bus ID</th>
                <th scope="col">Assigned Area</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {driverData.map((driver) => (
                <tr key={driver.driver_id}>
                  <th scope="row">{driver.driver_id}</th>
                  <td>{driver.driverName}</td>
                  <td>{driver.driverNumber}</td>
                  <td>{driver.license}</td>
                  <td>{driver.driverAge}</td>
                  <td>{driver.bus.bus_id}</td>
                  <td>{driver.bus.source}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(driver)}
                      className="btn btn-link"
                    >
                      <i
                        className="fas fa-edit fa-lg text-center"
                        style={{ color: "red" }}
                      ></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Modal */}
      {showModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Driver</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="driver_id"
                      name="driver_id"
                      value={formValues.driver_id}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="driverName"
                      name="driverName"
                      value={formValues.driverName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="driverNumber"
                      name="driverNumber"
                      value={formValues.driverNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">License</label>
                    <input
                      type="text"
                      className="form-control"
                      id="license"
                      name="license"
                      value={formValues.license}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                      type="text"
                      className="form-control"
                      id="age"
                      name="age"
                      value={formValues.driverAge}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="driverName" className="form-label">
                      Assigned Bus ID :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="busId"
                      name="busId"
                      value={formValues.busId}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DriverDetails;
