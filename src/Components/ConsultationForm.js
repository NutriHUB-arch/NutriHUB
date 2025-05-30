import React, { useState } from 'react';
import './ConsultationForm.css';

const healthIssuesList = [
  'Diabetes',
  'PCOS/PCOD',
  'Thyroid',
  'High BP',
  'Heart Disease',
  'Digestive Issues',
];

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    goal: '',
    healthIssues: [],
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      healthIssues: checked
        ? [...prev.healthIssues, value]
        : prev.healthIssues.filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Here you can POST the data to a backend
  };

  return (
    <div  id="consultation" className="consultation-container">
      <form className="consultation-form" onSubmit={handleSubmit}>
        <h2>Book Your Consultation</h2>
        <p>Take the first step towards better health</p>
        <div className="form-grid">
          <input name="name" placeholder="Name *" value={formData.name} onChange={handleChange} required />
          <input name="age" placeholder="Age *" value={formData.age} onChange={handleChange} required />
          <input name="gender" placeholder="Gender *" value={formData.gender} onChange={handleChange} required />
          <input name="height" placeholder="Height (cm) *" value={formData.height} onChange={handleChange} required />
          <input name="weight" placeholder="Weight (kg) *" value={formData.weight} onChange={handleChange} required />
          <input name="goal" placeholder="Primary Goal *" value={formData.goal} onChange={handleChange} required />
        </div>
        <div className="checkbox-section">
          <p>Health Issues (Select all that apply)</p>
          <div className="checkbox-grid">
            {healthIssuesList.map((issue) => (
              <label key={issue}>
                <input
                  type="checkbox"
                  value={issue}
                  checked={formData.healthIssues.includes(issue)}
                  onChange={handleCheckbox}
                />
                {issue}
              </label>
            ))}
          </div>
        </div>
        <textarea
          name="additionalInfo"
          placeholder="Additional Information"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
        <button type="submit">Book Consultation</button>
      </form>
    </div>
  );
};

export default ConsultationForm;
