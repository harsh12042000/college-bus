import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
  const [studentData, setStudentData] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const deleteHandler = async (studentId) => {
    try {
      await axios.delete(`http://localhost:9091/delete-student?student_id=${studentId}`);
      fetchStudentDetails();
    } catch (error) {
      alert("Console Error");
      console.log(error);
    }
  };

  // alert(userInfo.student_id);
  
  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get("http://localhost:9091/student-details");
      setStudentData(response.data);
    } catch (error) {
      console.log(error);
      alert("Error occurred while fetching student details");
    }
  };

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  return (
    <div className="container">
      <div className="text-center mt-5 mb-5">
        <h2>Student Details</h2>
      </div>
      <div className="mt-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">PRN</th>
              <th scope="col">Name</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Standard</th>
              {/* <th scope="col">Bus ID</th> */}
              <th scope="col">Fee Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => {
              if (student) {
                if (userInfo.checkAdmin === 1 && userInfo.standard !== null) {
                  return (
                    <tr key={student.student_id}>
                      <td>{student.student_id}</td>
                      <td>{student.prn}</td>
                      <td>{student.userName}</td>
                      <td>{student.contactNumber}</td>
                      <td>{student.standard}</td>
                      {/* <td>{student.bus.bus_id}</td> */}
                      <td>
                        {student.feeStatus === 0 ? (
                          <span className="badge bg-danger">Not Paid</span>
                        ) : (
                          <span className="badge bg-success">Paid</span>
                        )}
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={() => deleteHandler(student.student_id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                }
                if (student.student_id === userInfo.student_id && userInfo.standard !== null) {
                  return (
                    <tr key={student.student_id}>
                      <td>{student.student_id}</td>
                      <td>{student.prn}</td>
                      <td>{student.userName}</td>
                      <td>{student.contactNumber}</td>
                      <td>{student.standard}</td>
                      {/* <td>{student.bus.bus_id}</td> */}
                      <td>
                        {student.feeStatus === 0 ? (
                          <span className="badge bg-danger">Not Paid</span>
                        ) : (
                          <span className="badge bg-success">Paid</span>
                        )}
                      </td>
                      <td>
                        {
                          (student.bus && student.bus.bus_id) ? 
                          <p>Bus Registered</p> :
                          <p>Not Yet Registered</p>
                        }
                      </td>
                    </tr>
                  );
                }
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;
