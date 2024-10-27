import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Room.css';
import { useParams, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Comments from '../components/comments';
const Room = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoUrl = queryParams.get('videoLink');

  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleStop = () => {
    playerRef.current?.seekTo(0);
    setIsPlaying(false);
  };

  return (
    <div className='room'>
      <Navbar />
      <div className='room--container'>
        <main className='room--container-content'>
          <section className='player-container'>
            <ReactPlayer
              ref={playerRef}
              className='react-player'
              url={videoUrl}
              playing={isPlaying}
              controls={true}
              width="100%"
              height="100%"
            />
            <div className='player-controls'>
              <button onClick={handlePlay}>Play</button>
              <button onClick={handlePause}>Pause</button>
              <button onClick={handleStop}>Stop</button>
            </div>
          </section>
          <section className='comments-container'>
            <Comments  />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Room;
