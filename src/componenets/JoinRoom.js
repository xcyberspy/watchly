import React, { useState } from 'react';
import './JoinRoom.css';

const JoinRoom = () => {
  const [roomName, setRoomName] = useState('');
  const [videoLink, setVideoLink] = useState('');

  const handleCreateRoom = () => {
    if (roomName && videoLink) {
      console.log('Room Created:', { roomName, videoLink });
      // Add logic for room creation
    }
  };

  return (
    <div className="container">
      <h1 className="title">Start Your Own Theatre Right Now</h1>
      <input
        type="text"
        placeholder="ROOM NAME"
        className="input"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <input
        type="text"
        placeholder="video link"
        className="input"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
      />
      <button className="create-button" onClick={handleCreateRoom}>CREATE</button>
    </div>
  );
};

export default JoinRoom;
