import React from 'react';

const JoinRoom = () => {
  return <div className='join-room'>
          <h1>Join Room</h1>
          <form>
            <input type="text" placeholder="Room ID" className='form--input' />
            <input type="text" placeholder="Room Password" className='form--input' />
            <button type="submit" className='form--submit'>Join Room</button>
          </form>
        </div>;
};

export default JoinRoom;

