import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BusDetails = () => {
  const [busData, setBusData] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const response = await axios.get("http://localhost:9091/bus-details");
        setBusData(response.data);
      } catch (error) {
        alert("Console Error");
        console.log(error);
      }
    };

    fetchBusDetails();
  }, []); 

  return (
    <>
      <div className="container" >
        <div className="text-center mt-5 mb-5" >
          <h2>Bus Details</h2>
        </div>
        <div className="m-5" style={{ width: "80vw", alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
          <table className="table" >
            <thead>
              <tr>
                <th scope="col" >Bus ID</th>
                <th scope="col">Vehicle Number</th>
                <th scope="col">Seat Capacity</th>
                <th scope="col">Area</th>
                <th scope="col">Fees</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th  scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>
                  <Link to="">
                    <i
                      className="fas fa-edit fa-lg text-center me-3"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                  <Link to="/Booking">
                  Book Now
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>
                  <Link to="">
                    <i
                      className="fas fa-edit fa-lg text-center me-3"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                  <Link to="/Booking">
                  Book Now
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>
                  <Link to="">
                    <i
                      className="fas fa-edit fa-lg text-center me-3"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                  <Link to="/Booking">
                  Book Now
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>
                  <Link to="">
                    <i
                      className="fas fa-edit fa-lg text-center me-3"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                  <Link to="/Booking">
                  Book Now
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>
                  <Link to="">
                    <i
                      className="fas fa-edit fa-lg text-center me-3"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                  <Link to="/Booking">
                  Book Now
                  </Link> 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
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
                  <Link to={`/edit-bus/${bus.bus_id}`}>
                    <i
                      className="fas fa-edit fa-lg text-center"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BusDetails;
