import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

// console.log(userInfo.bus.bus_id);

const BusDetails = () => {
  const [busData, setBusData] = useState([]);
  const [editBus, setEditBus] = useState(null);
  const [formValues, setFormValues] = useState({
    busId: "",
    vehicleNumber: "",
    seatCapacity: "",
    source: "",
    fees: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchBusDetails();
  }, []);

  const fetchBusDetails = async () => {
    try {
      const response = await axios.get("http://localhost:9091/bus-details");
      setBusData(response.data);
    } catch (error) {
      alert("Console Error");
      console.log(error);
    }
  };

  const handleEdit = (bus) => {
    setEditBus(bus);
    setFormValues({
      busId: bus.bus_id,
      vehicleNumber: bus.vehicleNumber,
      seatCapacity: bus.seatCapacity,
      source: bus.source,
      fees: bus.fees,
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
        bus_id: formValues.busId,
        vehicleNumber: formValues.vehicleNumber,
        seatCapacity: formValues.seatCapacity,
        source: formValues.source,
        fees: formValues.fees,
      };

      const response = await axios.post(
        "http://localhost:9091/update-bus",
        updatedData
      );

      toast("Details Updated !");

      window.location.href="/busdetails";

      if (response.status === 200) {
        fetchBusDetails();
        setEditBus(null);
        setFormValues({
          vehicleNumber: "",
          seatCapacity: "",
          source: "",
          fees: "",
        });
        setShowModal(false);
      }
    } catch (error) {
      toast.error("Please Check all details");
      // alert("Console Error");
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h5>{userInfo.busId}</h5>
        <div className="text-center mt-5 mb-5">
          <h2>Bus Details</h2>
        </div>
        <div
          className="m-5"
          style={{
            width: "80vw",
            alignItems: "center",
            boxShadow: "5px 5px 20px rgb(138, 37, 64)",
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Bus ID</th>
                <th scope="col">Vehicle Number</th>
                <th scope="col">Seat Capacity</th>
                <th scope="col">Area</th>
                <th scope="col">Fees</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {busData.map((bus) => (
                <tr key={bus.bus_id}>
                  <th scope="row">{bus.bus_id}</th>
                  <td>{bus.vehicleNumber}</td>
                  <td>{bus.seatCapacity}</td>
                  <td>{bus.source}</td>
                  <td>{bus.fees}</td>
                  <td>
                    {userInfo.checkAdmin !== null &&
                    userInfo.checkAdmin === 1 ? (
                      <button
                        onClick={() => handleEdit(bus)}
                        className="btn btn-link"
                      >
                        <i
                          className="fas fa-edit fa-lg text-center me-3"
                          style={{ color: "red" }}
                        ></i>
                      </button>
                    ) : (
                      <>
                        {userInfo.PayFees === 1  ? (
                          <button disabled={true}>Already Booked</button>
                        ) : (
                          <button>
                            <Link
                              to={`/booking?bus_id=${
                                bus.bus_id
                              }&vehicleNumber=${encodeURIComponent(
                                bus.vehicleNumber
                              )}&seatCapacity=${encodeURIComponent(
                                bus.seatCapacity
                              )}&source=${encodeURIComponent(
                                bus.source
                              )}&fees=${encodeURIComponent(bus.fees)}`}
                            >
                              Book Now
                            </Link>
                          </button>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Bus</h5>
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
                      id="busId"
                      name="busId"
                      value={formValues.busId}
                      onChange={handleInputChange}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="vehicleNumber" className="form-label">
                      Vehicle Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="vehicleNumber"
                      name="vehicleNumber"
                      value={formValues.vehicleNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="seatCapacity" className="form-label">
                      Seat Capacity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="seatCapacity"
                      name="seatCapacity"
                      value={formValues.seatCapacity}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="source" className="form-label">
                      Area
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="source"
                      name="source"
                      value={formValues.source}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fees" className="form-label">
                      Fees
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fees"
                      name="fees"
                      value={formValues.fees}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Update
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

export default BusDetails;
