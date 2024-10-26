import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateRoom.css';

const CreateRoom = () => {
  const [roomId, setRoomId] = useState('');
  const [password, setPassword] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the Room page with the roomId and videoLink as query parameters
    navigate(`/room/${roomId}?videoLink=${encodeURIComponent(videoLink)}`);
  };

  return (
    <div className='create-room'>
      <h1>Create Room</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Room ID"
          className='form--input'
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Room Password"
          className='form--input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Video Link"
          className='form--input'
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <button type="submit" className='form--submit'>Create Room</button>
      </form>
    </div>
  );
};

export default CreateRoom;
