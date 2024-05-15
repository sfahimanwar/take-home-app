const Transcript = ({ transcript }) => {
    return (
      <div>
        {transcript.paragraphs.map((paragraph) => (
          <p key={paragraph.id}>
            {transcript.words
              .filter((word) => word.paragraph_id === paragraph.id)
              .map((word) => (
                <span key={word.time}>{word.text} </span>
              ))}
          </p>
        ))}
      </div>
    );
  };
  
  export default Transcript;
  