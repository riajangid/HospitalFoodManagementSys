import React, { useState } from "react";

const PatientForm = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    gender: "",
    roomNumber: "",
    diseases: "",
    allergies: "",
    contact: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patientData);
    alert("Patient details submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h4>Add/Update Patient Details</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" name="name" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input type="number" className="form-control" name="age" onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
};

export default PatientForm;