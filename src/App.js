import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import StepOne from "./components/StepOne/StepOne";
import StepTwo from "./components/StepTwo/StepTwo";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const navigate = useNavigate();

  const handleNext = (data) => {
    console.log(data); // Log or handle the data as needed
    navigate("/step-two", { state: data });
  };

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/step-one" element={<StepOne onNext={handleNext} />} />
      <Route path="/step-two" element={<StepTwo />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
    </Routes>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
