import React, { useState } from 'react';
import '../styles/SignUpForm.css'; // Import the CSS file
import '../styles/Navbar.css';
import Navbar from '../componenets/navbar';


const MainPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      // Submit form data
      console.log('Email:', email);
      console.log('Password:', password);
      alert('Account created successfully!');
    }
  };

  const LoginForm = () => (
    <form onSubmit={handleSubmit} className="form">
      <h2>Log in to your account</h2>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input"
      />
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input"
      />
      <label className="label">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />{' '}
        Show Password
      </label>
      <button type="submit" className="button">Log in</button>
      <p>Don't have an account? <a className='signup-link' onClick={() => setShowLogin(false)}>Sign up</a></p>
    </form>
  );

  return (
    <div className="signup-page">
      <Navbar/>
      <div className="content-wrapper">
        <div className="left-content">
          <h1>Watch Together</h1>
          <p>Experience a new way to watch videos with friends, no matter where they are. Our app lets you sync videos in real-time, so you can laugh, react, and enjoy your favorite content together.</p>
        </div>
        <div className="right-content">
          {showLogin ? <LoginForm /> : (
            <form onSubmit={handleSubmit} className="form">
              <h2>Create an account</h2>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input"
              />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input"
              />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="input"
              />
              <label className="label">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />{' '}
                Show Password
              </label>
              <button type="submit" className="button">Create an account</button>
              <p>Or, continue with <a href="#">Google</a> or <a href="#">Facebook</a></p>
              <p>Already have an account? <a className='login-link' onClick={() => setShowLogin(true)}>Log in</a></p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
