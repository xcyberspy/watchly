import React, { useState } from 'react';
import '../styles/HomePage.css'; // Adjust path if needed
import CreateRoom from '../components/CreateRoom'; // Ensure this file exists
import JoinRoom from '../components/JoinRoom'; // Ensure this file exists

const HomePage = () => {
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [showJoinRoom, setShowJoinRoom] = useState(false);

  const handleCreateRoom = () => {
    setShowCreateRoom(true);
    setShowJoinRoom(false);
  };

  const handleJoinRoom = () => {
    setShowCreateRoom(false);
    setShowJoinRoom(true);
  };

  return (
    <div className="room-page">
      <div className="hero">
        <h1>Create Your Watch Party Room</h1>
        <p>Start your own cinema right now</p>
        <div className="buttons">
          <button className="create-room-btn" onClick={handleCreateRoom}>Create a Room</button>
          <button className="join-room-btn" onClick={handleJoinRoom}>Join a Room</button>
        </div>
      </div>

      <div className="room-forms">
        {showCreateRoom && <CreateRoom />}
        {showJoinRoom && <JoinRoom />}
      </div>
    </div>
  );
};

export default HomePage;
