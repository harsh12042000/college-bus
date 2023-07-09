import axios from 'axios';
import React, { useState } from 'react';
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";

export default function PayFees() {
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handlePayNow = async () => {
    const busId = searchParams.get("bus_id");
    try {
      const updatedData = {
        bus: {
          bus_id: busId,
        },
        student_id: userInfo.student_id,
        feeStatus: 1,
      };
  
      const response = await axios.post(
        "http://localhost:9091/update-student",
        updatedData
      );
  
      userInfo.busId = busId;
      userInfo.PayFees = 1;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
  
      window.location.href = "/busdetails";
    //   setShowPopup(true);
    } catch (error) {
      alert("Console Error");
      console.log(error);
    }
  };
  

  return (
    <>
      <div className='row d-flex justify-content-center align-items-center mt-5'>
        <div className='shadow p-3 mb-5 bg-body-tertiary rounded col-sm-12 col-md-5 '>
          <h3 className="text-center text-danger ">... Payment Details ...</h3>

          <div className='p-3 m-3 mt-5'>
            <div className='row mb-3 ms-5' style={{ width: "30vw", alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col fs-5 fw-bold ms-5'>Fees :</div>
              <div className='col me-1'>Rs. 5000</div>
            </div>

            <div className='row'>
              <div className='col-sm-12 col-md-5'>
                <div className="mt-5">
                  <button className="mt-2 ms-5 btn btn-danger" style={{ width: '465px' }} onClick={handlePayNow} type="submit">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Payment Successful!</h3>
            <p>Thank you for your payment.</p>
            <button className="btn btn-danger" onClick={() => setShowPopup(false)}>Close</button>
            {/* <button className="btn btn-danger" onClick={navigate("/details")}>Close</button> */}
          </div>
        </div>
      )}
    </>
  );
}
