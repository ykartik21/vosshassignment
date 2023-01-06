import React, { useEffect, useRef, useState } from "react";
import "./Form.css";

const Form = (props) => {
  //initialising State to check whether user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // initialising state to save user form data
  const [input, setInput] = useState({
    name: "",
    email: "",
    companyname: "",
    title: "",
    password: "",
  });

  const name = JSON.parse(window.localStorage.getItem("user"))?.name;

  //handleInput Function
  console.log(name);
  function handleInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  //Handle Submit Function
  function handleSubmit(e) {
    e.preventDefault();
    //Saving Data to Local Storage
    localStorage.setItem("user", JSON.stringify(input));
    alert("Demo Has Been Booked");
    window.location.reload(true);
  }
  //using useEffect to check whether user is logged in or not

  useEffect(() => {
    if (name) {
      setIsLoggedIn(!isLoggedIn);
    }
  }, []);
  return (
    <div className="form" id="form" ref={props.refVal}>
      <h1 className="form-heading">Book a demo now</h1>
      {isLoggedIn ? (
        <div className="login-container">
          <div className="up">
            <img
              src="https://png2.cleanpng.com/sh/ccdd72871052e251fd6d69831293c955/L0KzQYm3U8A5N5N1fZH0aYP2gLBuTfdzbZZzRdN7ZXGwgLL7lPVzdl5sitdubj33ebTyTgBvb15rgd5uLUXkcYLtgBE1PGk2TdcCLkC4RYaCV8kzOWY3SKcBNUS0QoOCVcMveJ9s/kisspng-green-area-pattern-green-tick-png-file-5aa1fca44815e7.0555979215205654122953.png"
              alt="image"
              className="log-img"
            />
          </div>
          <div className="down">
            Congartulations {name}, Your Demo has been booked
          </div>
        </div>
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input_space">
            <div>
              Name <span className="redStar">*</span>
            </div>
            <input
              placeholder="Ex. John Doe"
              type="text"
              name="name"
              value={input.name}
              onChange={handleInput}
            />
          </div>
          <div className="input_space">
            <div>
              Email <span className="redStar">*</span>
            </div>
            <input
              placeholder="Ex. mail@website.com"
              type="email"
              name="email"
              value={input.email}
              onChange={handleInput}
            />
          </div>
          <div className="input_space">
            <div>
              Your Title <span className="redStar">*</span>
            </div>
            <input
              placeholder="Ex. Operational Head"
              type="text"
              name="title"
              value={input.title}
              onChange={handleInput}
            />
          </div>
          <div className="input_space">
            <div>
              Company Name<span className="redStar">*</span>
            </div>
            <input
              placeholder="Ex. XYZ PVT LTD"
              type="text"
              name="companyname"
              value={input.companyname}
              onChange={handleInput}
            />
          </div>
          <div className="input_space">
            <div>
              Password <span className="redStar">*</span>
            </div>
            <input
              placeholder="Enter your password"
              type="password"
              name="password"
              value={input.password}
              onChange={handleInput}
            />
          </div>
          <button className="btn">Book Demo</button>
        </form>
      )}
    </div>
  );
};

export default Form;
