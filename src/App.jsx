import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import Rsvp from "./assets/pages/Rsvp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rsvp" element={<Rsvp />} />
      </Routes>
    </Router>
  );
};

export default App;
