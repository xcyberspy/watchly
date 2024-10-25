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
