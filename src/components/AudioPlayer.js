import { useRef } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src={src} type="audio/mp4" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
