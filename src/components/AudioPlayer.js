import { useRef, useState, useEffect } from 'react';

const AudioPlayer = ({ src, onTimeUpdate }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const newTime = audioRef.current.currentTime;
      onTimeUpdate(newTime);
    };

    const audioEl = audioRef.current;
    audioEl.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioEl.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <audio ref={audioRef} controls style={{ width: '100%', maxWidth: '400px' }}>
        <source src={src} type="audio/mp4" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
