import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Booking() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const busId = searchParams.get("bus_id");
  const vehicleNumber = searchParams.get("vehicleNumber");
  const seatCapacity = searchParams.get("seatCapacity");
  const source = searchParams.get("source");
  const fees = searchParams.get("fees");

  return (
    <>
      <div className='row d-flex justify-content-center align-items-center mt-5'>
        <div className='shadow p-3 mb-5 bg-body-tertiary rounded col-sm-12 col-md-5'>
          <h3 className="text-center text-danger">... Booking Details ...</h3>

          <div className='p-3 m-3 mt-5'>
            <div className='row mb-3' style={{ alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col-4 fs-5 fw-bold'>Name :</div>
              <div className='col-8'>{source}</div>
            </div>
            <div className='row mb-3' style={{ alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col-4 fs-5 fw-bold'>Bus Id :</div>
              <div className='col-8'>{busId}</div>
            </div>
            <div className='row mb-3' style={{ alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col-4 fs-5 fw-bold'>Seat capacity :</div>
              <div className='col-8'>{seatCapacity}</div>
            </div>
            <div className='row mb-3' style={{ alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col-4 fs-5 fw-bold'>From :</div>
              <div className='col-8'>MGM Hospital</div>
            </div>
            <div className='row mb-3' style={{ alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col-4 fs-5 fw-bold'>Fees :</div>
              <div className='col-8'>Rs. 5000</div>
            </div>
            <div className='row mb-3' style={{ alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col-4 fs-5 fw-bold'>Fees Status :</div>
              <div className='col-8'>Paid</div>
            </div>

            <div className='row'>
              <div className='col'>
                <Link to={`/payfees?bus_id=${busId}&fees=${fees}`}>
                  <div className="mt-5">
                    <button className="mt-2 btn btn-danger" style={{ margin: '20px' }} type="submit">
                      Pay Fees
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
