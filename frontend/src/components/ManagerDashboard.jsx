import React from "react";
import PatientForm from "./PatientForm";
import DietChartForm from "./DietChartForm";

const ManagerDashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Hospital Food Manager Dashboard</h2>
      <PatientForm />
      <DietChartForm />
    </div>
  );
};

export default ManagerDashboard;