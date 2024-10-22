import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpForm.css';

const SignUpForm = ({ onSignUp, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSignUp(formData);
      navigate('/home');
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h1 className="title">Sign up</h1>
      <p className="subtitle">Create a free account with your email.</p>
      <div className="form-container">
        <div className="form__group field">
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form__field"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <label htmlFor="fullName" className="form__label">Full Name</label>
        </div>
        <div className="form__group field">
          <input
            type="email"
            id="email"
            name="email"
            className="form__field"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="form__label">Email</label>
        </div>
        <div className="form__group field">
          <input
            type="password"
            id="password"
            name="password"
            className="form__field"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className="form__label">Password</label>
        </div>
      </div>
      <button type="submit" className="submit-btn">Sign up</button>
      <div className="form-section">
        <p>Have an account? <button type="button" onClick={onSwitchToLogin}>Log in</button></p>
      </div>
    </form>
  );
};

export default SignUpForm;
