import React from 'react';
import '../styles/CreateRoom.css';

const CreateRoom = () => {
  return (
    <div className='create-room'>
      <h1>Create Room</h1>
      <form>
        <input type="text" placeholder="Room Name" />
        <input type="text" placeholder="Room Password" />
        <button type="submit">Create Room</button>
      </form>
    </div>
  );
};

export default CreateRoom;

