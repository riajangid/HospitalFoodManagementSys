import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ManagerDashboard from "./components/ManagerDashboard";
import PantryDashboard from "./components/PantryDashboard";
import DeliveryDashboard from "./components/DeliveryDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/pantry-dashboard" element={<PantryDashboard />} />
        <Route path="/delivery-dashboard" element={<DeliveryDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;