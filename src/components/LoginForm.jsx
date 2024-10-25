import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpForm.css';

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
      <div className="form__group field">
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className='form__field' />
      <label for="email" className="form__label">Email</label>
      </div>
      <div className="form__group field">
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className='form__field'  />
      <label for="password" className="form__label">Password</label>
      </div>
      <div className='btn-grp'>
      <button className='signup-button'><span className="text">log in</span><span>welcom back</span></button>
      <button className="signup-button"  onClick={onSwitchToSignUp}><span className="text">Want to join us?</span><span>Sign Up</span></button>
      </div>
    </form>
  );
};

export default LoginForm;
