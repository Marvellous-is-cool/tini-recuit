import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css"; // Import the CSS file for any additional styling
import Logo from "../../assets/img/logo.png";

const Welcome = () => {
  return (
    <div className="container text-center mt-5 animate__animated animate__fadeIn">
      <div className="row welcome-header align-items-center mb-4">
        <div className="col-3 col-md-1">
          <img src={Logo} alt="Tini Technologies Logo" className="img-fluid" />
        </div>
        <div className="col-9 col-md-11 text-left">
          <h3 className="m-0">
            <b>Tini</b> <br /> <span>Technologies</span>
          </h3>
        </div>
      </div>
      <div className="welcome-container">
        <h1 className="display-4">Welcome</h1>
        <p className="lead">
          We are excited to have you here! Please proceed to the next step to
          get started.
        </p>
        <Link to="/step-one">
          <button className="btn btn-primary btn-lg mt-5">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
