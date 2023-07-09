import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DriverDetails = () => {
  const [driverData, setDriverData] = useState([]);
  const [editDriver, setEditDriver] = useState(null); // Driver object being edited
  const [formValues, setFormValues] = useState({
    driverName: "",
    driverNumber: "",
    license: "",
    driverAge: "",
    busId: "",
    assignedArea: ""
  });

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const response = await axios.get("http://localhost:9091/driver-details");
        setDriverData(response.data);
      } catch (error) {
        alert("Console Error");
        console.log(error);
      }
    };

    fetchBusDetails();
  }, []);

  // Function to handle edit button click
  const handleEdit = (driver) => {
    setEditDriver(driver);
    setFormValues({
      driverName: driver.driverName,
      driverNumber: driver.driverNumber,
      license: driver.license,
      driverAge: driver.driverAge,
      busId: driver.bus.bus_id,
      assignedArea: driver.bus.source
    });
  };

  // Function to handle form field changes
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call API to update the driver record
      const response = await axios.put(
        `http://localhost:9091/update-driver/${editDriver.driver_id}`,
        formValues
      );
      // Update the driverData state with the updated driver record
      setDriverData((prevData) =>
        prevData.map((driver) =>
          driver.driver_id === editDriver.driver_id ? response.data : driver
        )
      );
      // Reset the editDriver and formValues states
      setEditDriver(null);
      setFormValues({
        driverName: "",
        driverNumber: "",
        license: "",
        driverAge: "",
        busId: "",
        assignedArea: ""
      });
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
      {editDriver && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Driver</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="driverName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="driverName"
                  name="driverName"
                  value={formValues.driverName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="driverNumber">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="driverNumber"
                  name="driverNumber"
                  value={formValues.driverNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="license">License</label>
                <input
                  type="text"
                  className="form-control"
                  id="license"
                  name="license"
                  value={formValues.license}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="driverAge">Age</label>
                <input
                  type="text"
                  className="form-control"
                  id="driverAge"
                  name="driverAge"
                  value={formValues.driverAge}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="busId">Bus ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="busId"
                  name="busId"
                  value={formValues.busId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="assignedArea">Assigned Area</label>
                <input
                  type="text"
                  className="form-control"
                  id="assignedArea"
                  name="assignedArea"
                  value={formValues.assignedArea}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DriverDetails;
