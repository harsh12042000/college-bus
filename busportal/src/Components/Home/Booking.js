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
      <div className='container'>
      <div className='row d-flex justify-content-center align-items-center mt-5'>
        <div className='shadow p-3 mb-5 bg-body-tertiary rounded col-sm-12 col-md-5 '>
          <h3 className="text-center text-danger ">... Booking Details ...</h3>

          <div className='p-3 m-3 mt-5'>
            <div className='row mb-3 ms-5' style={{ width: "25vw", alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col fs-5 fw-bold ms-5'>Name :</div>
              <div className='col me-1'>{source}</div>
            </div>
            <div className='row mb-3 ms-5' style={{ width: "25vw", alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col fs-5 fw-bold ms-5'>Bus Id :</div>
              <div className='col me-1'>{busId}</div>
            </div>
            <div className='row mb-3 ms-5' style={{ width: "25vw", alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col fs-5 fw-bold ms-5'>Seat capacity :</div>
              <div className='col me-1'>{seatCapacity}</div>
            </div>
            <div className='row mb-3 ms-5' style={{ width: "25vw", alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col fs-5 fw-bold ms-5'>From :</div>
              <div className='col me-1'>MGM Hodpital</div>
            </div>
            <div className='row mb-3 ms-5' style={{ width: "25vw", alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col fs-5 fw-bold ms-5'>Fees :</div>
              <div className='col me-1'>Rs. 5000</div>
            </div>
            <div className='row mb-3 ms-5' style={{ width: "25vw", alignItems: "center", boxShadow: "5px 5px 20px rgb(138, 37, 64)" }}>
              <div className='col fs-5 fw-bold ms-5'>Fees Status :</div>
              <div className='col me-1'>Paid</div>
            </div>

            <div className='row'>
              {/* <div className='col-sm-12 col-md-5'>
                <div className="mt-5 ">
                  <button className="mt-2 ms-5 btn btn-danger" type="submit">
                    Book Now
                  </button>
                </div>
              </div> */}
              <div className='col'>
                <Link to={`/payfees?bus_id=${busId}&fees=${fees}`}>
                  <div className="mt-5" style={{textAlign: 'center'}}>
                    <button className="mt-2 ms-5 btn btn-danger" style={{ margin: '20px' }} type="submit">
                      Pay Fees
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
