import React, { useMemo } from 'react';

const Transcript = React.memo(({ transcript, currentTime }) => {
  const getSpeakerName = (speakerId) => {
    const speaker = transcript.speakers.find(s => s.id === speakerId);
    return speaker ? speaker.name : 'Unknown Speaker';
  };

  const renderedParagraphs = useMemo(() => {
    return transcript.paragraphs.map((paragraph) => (
      <div key={paragraph.id}>
        <h3>{getSpeakerName(paragraph.speaker_id)}</h3>
        <p>
          {transcript.words
            .filter((word) => word.paragraph_id === paragraph.id)
            .map((word, index, array) => (
              <span key={word.time} style={{ backgroundColor: currentTime >= word.time && currentTime < word.time + word.duration ? 'yellow' : 'transparent' }}>
                {word.text}{index < array.length - 1 ? ' ' : ''}
              </span>
            ))}
        </p>
      </div>
    ));
  }, [transcript.paragraphs, transcript.words, currentTime]);

  return <div>{renderedParagraphs}</div>;
});

export default Transcript;

