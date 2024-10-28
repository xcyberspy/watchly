import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpForm.css';
import axios from 'axios';

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
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log('User registered successfully:', res.data);
      // Here, you might want to store the token in local storage and redirect the user
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h1 className="title">Sign Up</h1>
      <div className="form__group field">
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className='form__field' />
      <label for="fullName" className="form__label">Full Name</label>
      </div>
      <div className="form__group field">
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className='form__field'  />
      <label for="email" className="form__label">Email</label>
      </div>
      <div className="form__group field">
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className='form__field'  />
      <label for="password" className="form__label">Password</label>
      </div>
      <div className='btn-grp'>
      <button className="signup-button"><span className="text">Sign Up</span><span>Join Now</span></button>
      <button className="signup-button"  onClick={onSwitchToLogin}><span className="text">Already have an account?</span><span>Login</span></button>
      </div>
    </form>
  );
};

export default SignUpForm;
