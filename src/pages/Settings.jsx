import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Settings.css';
import 'font-awesome/css/font-awesome.min.css';


function ProfileSettings() {
    const [activeSubComponent, setActiveSubComponent] = useState('personal');

    return (
        <div className="settings-container">
            <div className="radio-container">
                <input 
                    type="radio" 
                    id="personal" 
                    name="setting" 
                    onChange={() => setActiveSubComponent('personal')} 
                    checked={activeSubComponent === 'personal'}
                />
                <label htmlFor="personal">Personal Information</label>
                
                <input 
                    type="radio" 
                    id="privacy" 
                    name="setting" 
                    onChange={() => setActiveSubComponent('privacy')} 
                    checked={activeSubComponent === 'privacy'}
                />
                <label htmlFor="privacy">Privacy Settings</label>
                
                <input 
                    type="radio" 
                    id="notifications" 
                    name="setting" 
                    onChange={() => setActiveSubComponent('notifications')} 
                    checked={activeSubComponent === 'notifications'}
                />
                <label htmlFor="notifications">Notifications Settings</label>
                
                <input 
                    type="radio" 
                    id="linked" 
                    name="setting" 
                    onChange={() => setActiveSubComponent('linked')} 
                    checked={activeSubComponent === 'linked'}
                />
                <label htmlFor="linked">Linked Accounts</label>

                <div className="glider-container">
                    <div className="glider"></div>
                </div>
            </div>

            <div className="content">
                {activeSubComponent === 'personal' && <PersonalInformation />}
                {activeSubComponent === 'privacy' && <PrivacySettings />}
                {activeSubComponent === 'notifications' && <NotificationsSettings />}
                {activeSubComponent === 'linked' && <LinkedAccounts />}
            </div>
        </div>
    );
}


function PersonalInformation() {
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
}
function PrivacySettings() {
    return (
        <div>
            <h2>PrivacySettings</h2>
        </div>
    );
}
function NotificationsSettings() {
    return (
        <div>
            <h2>NotificationsSettings</h2>
        </div>
    );
}
function LinkedAccounts() {
    return (
        <div>
            <h2>LinkedAccounts</h2>
        </div>
    );
}
function AppSettings() {
    return (
        <div className="app-settings">
            <h2>App Settings</h2>
            
        </div>
    );
}

const Radio = ({ activeComponent, setActiveComponent, goBackToHomepage }) => {
    return (
        <div className="radio-container">
            <input
                checked={activeComponent === 'profile'}
                id="radio-profile"
                name="radio"
                type="radio"
                onChange={() => setActiveComponent('profile')}
            />
            <label htmlFor="radio-profile">Profile Settings</label>
            <input
                checked={activeComponent === 'app'}
                id="radio-app"
                name="radio"
                type="radio"
                onChange={() => setActiveComponent('app')}
            />
            <label htmlFor="radio-app">App Settings</label>
            <input
                id="radio-home"
                name="radio"
                type="radio"
                onChange={goBackToHomepage}
            />
            <label htmlFor="radio-home">Go Back to Homepage</label>

            <div className="glider-container">
                <div
                    className="glider"
                    style={{
                        transform: `translateY(${
                            activeComponent === 'profile' ? 0 : activeComponent === 'app' ? 100 : 200
                        }%)`,
                    }}
                />
            </div>
        </div>
    );
};
function Settings() {
    const [activeComponent, setActiveComponent] = useState('profile');
    const navigate = useNavigate();

    const goBackToHomepage = () => {
        navigate('/home');
    };

    return (
        <div className="settings-container">
            <Radio
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
                goBackToHomepage={goBackToHomepage}
            />
            <div className="content">
                {activeComponent === 'profile' && <ProfileSettings />}
                {activeComponent === 'app' && <AppSettings />}
            </div>
        </div>
    );
}

export default Settings;
