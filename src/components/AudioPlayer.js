import { useRef, useState, useEffect } from 'react';

const AudioPlayer = ({ src, onTimeUpdate }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
      onTimeUpdate(audioRef.current.currentTime);
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
