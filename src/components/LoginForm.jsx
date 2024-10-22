import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';

const LoginForm = ({ onLogin, onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({
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
      await onLogin(formData);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h1 className="title">Log In</h1>
      <p className="subtitle">Welcome back! Please log in to your account.</p>
      <div className="form-container">
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
      <button type="submit" className="submit-btn">Log In</button>
      <div className="form-section">
        <p>Don't have an account? <button type="button" onClick={onSwitchToSignUp}>Sign up</button></p>
      </div>
    </form>
  );
};

export default LoginForm;
