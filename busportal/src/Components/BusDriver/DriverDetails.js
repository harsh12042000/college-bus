import React from "react";
import { Link } from "react-router-dom";

const DriverDetails = () => {
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
                <th scope="col">Assigned Bus ID</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>xyztext</td>
                <td>
                  <Link to="">
                    <i
                      className="fas fa-edit fa-lg text-center"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>xyztext</td>
                <td>
                  <Link to="">
                    <i
                      className="fas fa-edit fa-lg text-center"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>xyztext</td>
                <td>
                  <Link to="">
                    <i
                      className="fas fa-edit fa-lg text-center"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>xyztext</td>
                <td>
                  <Link to="">
                    <i
                      className="fas fa-edit fa-lg text-center"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>xyztext</td>
                <td>
                  <Link to="">
                    <i
                      className="fas fa-edit fa-lg text-center"
                      style={{ color: "red" }}
                    ></i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DriverDetails;
