import React, { useState } from 'react';
import '../styles/CreateRoom.css';

function CreateRoom() {
  const [roomName, setRoomName] = useState('');
  const [videoLink, setVideoLink] = useState('');

  const handleCreate = () => {
    // قم بتنفيذ منطق إنشاء الغرفة هنا
    console.log('Room Name:', roomName);
    console.log('Video Link:', videoLink);
  };

  return (
    <div className="create-room-page">
      <h1>Start Your Own Theatre Right Now</h1>
      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Video Link"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateRoom;
