import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Settings.css';
function ProfileSettings() {
    return (
        <div className="profile-settings">
            <h2>Profile Settings</h2>
            {/* Add profile settings form or details here */}
        </div>
    );
}

// AppSettings component
function AppSettings() {
    return (
        <div className="app-settings">
            <h2>App Settings</h2>
            <div className="ui-customization">
                <h3>User Interface Customization</h3>
                <label>
                    Theme:
                    <select>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </label>
                <label>
                    Font Size:
                    <select>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <label>
                    Language:
                    <select>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        {/* Add more languages as needed */}
                    </select>
                </label>
            </div>
            <div className="network-settings">
                <h3>Network Settings</h3>
                <label>
                    Video Quality:
                    <select>
                        <option value="auto">Auto</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <label>
                    Bandwidth Usage:
                    <input type="checkbox" /> Enable Data Saving
                </label>
                <div>
                    Connection Status: <span>Connected</span> {/* This could be dynamic */}
                </div>
            </div>
            <div className="chat-settings">
                <h3>Chat and Communication</h3>
                <label>
                    Enable Chat:
                    <input type="checkbox" />
                </label>
                <label>
                    Chat Notifications:
                    <input type="checkbox" />
                </label>
                {/* Add more chat settings as needed */}
            </div>
        </div>
    );
}
function Settings() {
    const [activeComponent, setActiveComponent] = useState('profile');
    const navigate = useNavigate();

    const goBackToHomepage = () => {
        navigate('/home');
    };

    return (
        <div className="settings-container">
            <div className="sidebar">
                <button onClick={() => setActiveComponent('profile')}>Profile Settings</button>
                <button onClick={() => setActiveComponent('app')}>App Settings</button>
                <button onClick={goBackToHomepage}>Go Back to Homepage</button>
            </div>
            <div className="content">
                <h1>Settings</h1>
                {activeComponent === 'profile' && <ProfileSettings />}
                {activeComponent === 'app' && <AppSettings />}
            </div>
        </div>
    );
}

export default Settings;
