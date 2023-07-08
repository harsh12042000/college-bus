import React from "react";

const Maps = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" style={{ boxShadow: "10px 10px 10px rgb(161, 129, 133)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d1885.9209274514978!2d73.0571517!3d19.0266891!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x3be7c6caa94cef59%3A0xd2977d80d17491e8!2sMGM%20Hospital%2C%20Plot%20No.35%2C%20Atmashanti%20Society%2C%20Sector%203%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703!3m2!1d19.072311!2d72.9935544!4m3!3m2!1d19.0257078!2d73.0587789!5e0!3m2!1sen!2sin!4v1688754595009!5m2!1sen!2sin"
              width={400}
              height={200}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="card-body">
              <span>
                <b>Bus No : 01</b>
              </span>

              <p className="card-text">
                <b>Route</b> : MGM Hospital - Vashi Plaza - Shivneri Vashi Bus
                Stop - Sanpada Bridge - Juinagar - DY Patil Sports Stadium - MG
                Motor - Mango Garden - Ali Fruit Shop - CDAC Kharghar
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card"  style={{ boxShadow: "10px 10px 10px rgb(161, 129, 133)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d30174.77003427298!2d73.05960364819997!3d19.026495308718577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3be7e9d390c16fad%3A0x45a26096b6c171fd!2sKamothe%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra!3m2!1d19.016622299999998!2d73.0966019!4m5!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)%2C%20Raintree%20Marg%2C%20near%20Bharati%20Vidyapeeth%2C%20Sector%207%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!3m2!1d19.0258821!2d73.0543486!5e0!3m2!1sen!2sin!4v1688754253679!5m2!1sen!2sin"
              width={400}
              height={200}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="card-body">
              <span>
                <b>Bus No : 02</b>
              </span>

              <p className="card-text">
                <b>Route</b> : Kamothe - Mahanagar Gas Station - Kalamboli
                Bridge - Gharkul foot bridge - Highway Break - YMT College -
                Bharati Vidyapeeth -CDAC Kharghar
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card"  style={{ boxShadow: "10px 10px 10px rgb(161, 129, 133)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d60362.3599273311!2d73.04094479088926!3d18.991169144764555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3be7e80b5aaa2cef%3A0x66b60361e3462123!2sKaranjade%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra!3m2!1d18.9732877!2d73.1098806!4m5!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)%2C%20Raintree%20Marg%2C%20near%20Bharati%20Vidyapeeth%2C%20Sector%207%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!3m2!1d19.0258821!2d73.0543486!5e0!3m2!1sen!2sin!4v1688753911865!5m2!1sen!2sin"
              width={400}
              height={250}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="card-body">
              <span>
                <b>Bus No : 03</b>
              </span>

              <p className="card-text">
                <b>Route</b> : Padeghar - Wahal - Sonkhar - Sector 15 - Sector
                11 -Belapur - CDAC Kharghar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
