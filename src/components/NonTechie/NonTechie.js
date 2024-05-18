import React from "react";
import { useNavigate } from "react-router-dom";
import "./NonTechie.css"; // Import the CSS file for styling

const NonTechie = ({ data }) => {
  const { selectedNiche } = data;
  const whatsappLink = "https://wa.me/2348133730145";
  const navigate = useNavigate();

  // Function to handle going back to home
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container non-techies-container animate__animated animate__fadeIn">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <h2>Step 3: Non-Techie Information</h2>
          <p>
            You have selected the niche: <strong>{selectedNiche}</strong>.
          </p>
          <p>
            Click on the button below to join our WhatsApp group for support:
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary my-3"
          >
            Join WhatsApp Group
          </a>
          <p>(You will be approved by the admin after review.)</p>
          <button onClick={handleGoHome} className="btn btn-secondary mt-3">
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NonTechie;
