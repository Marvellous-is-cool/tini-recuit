// components/NotFound/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import NotFoundImage from "../../assets/img/not-found.png";
import Logo from "../../assets/img/logo.png";

const NotFound = () => {
  return (
    <div className="container not-found-container">
      <img
        src={NotFoundImage}
        alt="Page Not Found"
        className="img-fluid animate__animated animate__swing animate__infinite animate__slower"
      />
      <h1>You have reached the almighty 404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-dark">
        Go back to Home
      </Link>
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
    </div>
  );
};

export default NotFound;
