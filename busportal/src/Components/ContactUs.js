import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [message, setMessage] = useState("");
  const [messageErr, setMessageErr] = useState("");

  const handelUserNameChange = (event) => {
    const inputValue = event.target.value;
    setUsername(inputValue);
    setUsernameErr("");
  };
  const handelEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setEmailErr("");
  };
  const handelPhoneChange = (event) => {
    const inputValue = event.target.value;
    setPhone(inputValue);
    setPhoneErr("");
  };
  const handelMessageChange = (event) => {
    const inputValue = event.target.value;
    setMessage(inputValue);
    setMessageErr("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username == "") {
      setUsernameErr("**Name field should not be empty");
      return;
    }
    if (!isNaN(username)) {
      setUsernameErr("**Name should not be numeric");
      return;
    }
    if (email == "") {
      setEmailErr("**Email field should not be Empty");
      return;
    }
    if (email.indexOf("@") <= 0) {
      setEmailErr("**Enter valid email");
      return;
    }
    if (email.charAt(email.length - 4) != ".") {
      setEmailErr("**Enter valid email");
      return;
    }
    if (phone == "") {
      setPhoneErr("**Phone No field should not be Empty");
      return;
    }
    if (isNaN(phone)) {
      setPhoneErr("**Enter valid phone no");
      return;
    }
    if (phone.length < 10) {
      setPhoneErr("**Enter valid phone no");
      return;
    }
    if (message.length < 5) {
      setMessageErr("**Message should be atleast contain 5 words");
      return;
    }

    toast.success("Email Sent ! Thank You for Contacting");

    setUsername("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <div className="row justify-content-center align-items-center mt-5">
        <div
          style={{ marginLeft: "20px" }}
          className="col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded"
        >
          <h3 className="mb-3 mt-3 text-center">
            Get in touch with us
            <FaHeadset style={{ marginLeft: "20px" }} />
          </h3>
          <form onSubmit={handleSubmit} action="#">
            <h5>Name:</h5>
            <input
              value={username}
              className="form-control w-100"
              type="text"
              placeholder="Enter your name here.."
              onChange={handelUserNameChange}
            />
            {usernameErr && (
              <p className="" style={{ color: "red", fontWeight: "bold" }}>
                {usernameErr}
              </p>
            )}
            <h5 className="mt-3">Email:</h5>
            <input
              value={email}
              className="form-control w-100"
              type="text"
              placeholder="Enter your Email here.."
              onChange={handelEmailChange}
            />
            {emailErr && (
              <p className="" style={{ color: "red", fontWeight: "bold" }}>
                {emailErr}
              </p>
            )}
            <h5 className="mt-3">Phone:</h5>
            <input
              value={phone}
              className="form-control w-100"
              type="text"
              placeholder="Enter your phone here.."
              onChange={handelPhoneChange}
            />
            {phoneErr && (
              <p className="" style={{ color: "red", fontWeight: "bold" }}>
                {phoneErr}
              </p>
            )}
            <h5 className="mt-3">Message:</h5>
            <textarea
              value={message}
              className="form-control w-100"
              placeholder="Enter your message.."
              name="message"
              id=""
              cols="30"
              rows="6"
              onChange={handelMessageChange}
            ></textarea>
            {messageErr && (
              <p className="" style={{ color: "red", fontWeight: "bold" }}>
                {messageErr}
              </p>
            )}
            <button
              style={{ backgroundColor: "orange", color: "white" }}
              type="submit"
              className="rounded-2 p-2 mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div
        className="row justify-content-center align-items-center mt-4 p-3"
        style={{ marginLeft: "20px" }}
      >
        <div className="col-md-6 col-sm-12">
          <h5>Address:</h5>
          <p>
            Gulmohar Cross Road No. 9 Juhu, Mumbai - 400 049 Maharashtra (India)
          </p>
          <h5>Admission Incharge:</h5>
          <p>Kanthak Shende</p>
        </div>
        <div className="col-md-6 col-sm-12 justify-item-end">
          <h5>Admission contact numbers :</h5>
          <FaPhoneAlt />
          <span style={{ marginLeft: "10px", marginRight: "20px" }}>
            +91-9359526757
          </span>
          <FaPhoneAlt />
          <span style={{ marginLeft: "10px" }}>+91-7507315824</span>
          <br />
          <h5 className="mt-3">College Email:</h5>
          <FaEnvelope />
          <span style={{ marginLeft: "10px", marginRight: "20px" }}>
            faculty-kharghar@cdac.in
          </span>
          <FaEnvelope />
          <span style={{ marginLeft: "10px", marginRight: "20px" }}>
            tech-support@cdac.in
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
