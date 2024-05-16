import React, { useMemo, useEffect, useRef } from 'react';

const Transcript = React.memo(({ transcript, currentTime, scrollViewportRef }) => {
  const getSpeakerName = (speakerId) => {
    const speaker = transcript.speakers.find(s => s.id === speakerId);
    return speaker ? speaker.name : 'Unknown Speaker';
  };

  const wordRefs = useRef({});
  
  useEffect(() => {
    // Find the closest word not ahead of the current time
    const times = Object.keys(wordRefs.current).map(time => parseFloat(time));
    const relevantTime = times.reduce((prev, curr) => curr <= currentTime && curr > prev ? curr : prev, 0);
    const currentWordRef = wordRefs.current[relevantTime];

    if (currentWordRef && scrollViewportRef.current) {
      const scrollPosition = currentWordRef.offsetTop - scrollViewportRef.current.offsetTop + currentWordRef.clientHeight / 2 - scrollViewportRef.current.clientHeight / 2;
      scrollViewportRef.current.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentTime, scrollViewportRef]);

  const renderedParagraphs = useMemo(() => {
    return transcript.paragraphs.map((paragraph) => (
      <div key={paragraph.id}>
        <h3>{getSpeakerName(paragraph.speaker_id)}</h3>
        <p>
          {transcript.words
            .filter((word) => word.paragraph_id === paragraph.id)
            .map((word, index, array) => (
              <span ref={el => wordRefs.current[word.time] = el} key={word.time} style={{ backgroundColor: currentTime >= word.time && currentTime < word.time + word.duration ? '#AEC3EC' : 'transparent' }}>
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


