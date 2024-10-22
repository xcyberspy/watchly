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
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}  />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}  />
      <button type="submit">Log In</button>
      <button type="button" onClick={onSwitchToSignUp}>Don't have an account? Sign up</button>
    </form>
  );
};

export default LoginForm;
