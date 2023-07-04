import React from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
  return (
    <>
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <h2>Student Details</h2>
        </div>
        <div className="mt-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">PRN</th>
                <th scope="col">Name</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Standard</th>
                <th scope="col">Bus ID</th>
                <th scope="col">Fee Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>
                  <span class="badge bg-danger">Not Paid</span>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>
                  <span class="badge bg-success">Paid</span>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>
                  <span class="badge bg-success">Paid</span>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>
                  <span class="badge bg-danger">Not Paid</span>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyztext</td>
                <td>
                  <span class="badge bg-success">Paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
