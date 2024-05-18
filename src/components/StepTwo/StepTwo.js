import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./StepTwo.css";
import Logo from "../../assets/img/logo.png";
import FinalTech from "../FinalTech/FinalTech";
import NonTechie from "../NonTechie/NonTechie";

const StepTwo = () => {
  const location = useLocation();
  const { fullName, age, isTechie, country } = location.state || {};

  const [notification, setNotification] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const nicheOptions = [
    "Artificial Intelligence (AI)",
    "Cybersecurity",
    "Cloud Computing",
    "Blockchain Technology",
    "Internet of Things (IoT)",
    "Augmented Reality (AR)",
    "Machine Learning (ML)",
    "Virtual Reality (VR)",
    "Big Data and Analytics",
    "Software Development",
    "Software Engineering",
    "Mobile App Development",
    "Robotics",
    "Data Science",
    "Quantum Computing",
    "Graphics design",
    "Web Development",
    "DevOps",
    "UI/UX Design",
    "Data Analysis",
    "Biotechnology",
    "Game Development",
  ];

  const levelOptions = ["Beginner", "Intermediate", "Expert"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedNiche || (isTechie === "yes" && !selectedLevel)) {
      setNotification("Please make sure all fields are filled out.");
      return;
    }

    setIsSending(true);
    setNotification("Sending...");

    const data = {
      fullName,
      age,
      country,
      isTechie,
      selectedNiche,
      selectedLevel,
    };

    const success = await sendEmail(data);

    if (success) {
      setNotification("Your information has been submitted successfully.");
      setTimeout(() => {
        setNotification("");
        setEmailSent(true);
      }, 3000);
    } else {
      setIsSending(false);
    }
  };

  const sendEmail = async (data) => {
    try {
      const response = await fetch(
        "https://tini-recuit-backend.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (response.ok) {
        console.log("Email sent:", result.message);
        return true;
      } else {
        console.error("Error sending email:", result.error);
        if (result.error.includes("5xx")) {
          setNotification(
            "There is an error, but don't worry, it doesn't affect you."
          );
        } else {
          setNotification("Ooof! The developer got this badly!");
        }
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification("You may want to check your internet connection");
      return false;
    }
  };

  if (emailSent) {
    const data = {
      fullName,
      age,
      country,
      isTechie,
      selectedNiche,
      selectedLevel,
    };
    return isTechie === "yes" ? (
      <FinalTech data={data} />
    ) : (
      <NonTechie data={data} />
    );
  }

  return (
    <div className="container mt-5 step-two-container">
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
      <h2>
        Step 2:{" "}
        {isTechie === "yes" ? "Techie Information" : "Non-Techie Information"}
      </h2>
      <form onSubmit={handleSubmit} className="text-left">
        {isTechie === "yes" && (
          <>
            <div className="form-group">
              <label htmlFor="selectedNiche">Choose Niche:</label>
              <select
                id="selectedNiche"
                value={selectedNiche}
                onChange={(e) => setSelectedNiche(e.target.value)}
                className="form-control"
                required
              >
                <option value="">Select a niche...</option>
                {nicheOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="selectedLevel">Choose Level:</label>
              <select
                id="selectedLevel"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="form-control"
                required
              >
                <option value="">Select a level...</option>
                {levelOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
        {isTechie === "no" && (
          <div className="form-group">
            <label htmlFor="selectedNiche">Choose Niche:</label>
            <select
              id="selectedNiche"
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="form-control"
              required
            >
              <option value="">Select a niche...</option>
              {nicheOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        <button
          type="submit"
          className="btn btn-primary btn-lg mt-3"
          disabled={isSending}
        >
          Next
        </button>
      </form>
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
};

export default StepTwo;
