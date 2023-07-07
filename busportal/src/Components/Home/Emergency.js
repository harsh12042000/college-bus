import React from "react";

const Emergency = () => {
  return (
    <div className="container">
      <div className="row">
        <div class="emergency-section" style={{margin: "3% 0 4% 0"}}>
          <div className="emergency-content">
            <h3 className="emergency-title">In Case of Emergency, Call Us</h3>
            <p className="emergency-phone">Emergency Phone: 123-456-7890</p>
            <p className="emergency-info">
              For immediate assistance during emergencies, please contact the
              number provided above. Our support team is available to assist
              you.
            </p>
            <img
              src={process.env.PUBLIC_URL + '/assets/images/alert.png'}
              alt="Emergency Image"
              class="emergency-image"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
