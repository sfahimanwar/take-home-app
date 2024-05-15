import { useTranscripts, useTranscriptById } from '../services/api';
import { useState, useEffect } from 'react';
import Transcript from './Transcript';
import AudioPlayer from './AudioPlayer';

const TranscriptList = () => {
  const { data, error, isLoading } = useTranscripts();
  const [selectedTranscriptId, setSelectedTranscriptId] = useState(null);
  const { data: transcriptData } = useTranscriptById(selectedTranscriptId);

  useEffect(() => {
    if (transcriptData) {
      console.log('Transcript Data:', transcriptData);
      console.log('Audio URL:', transcriptData.audio_url);
    }
  }, [transcriptData]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching transcripts</div>;

  return (
    <div>
      <ul>
        {data.map((transcript) => (
          <li key={transcript.id} onClick={() => setSelectedTranscriptId(transcript.id)}>
            {transcript.name}
          </li>
        ))}
      </ul>
      {transcriptData && (
        <>
          <Transcript transcript={transcriptData} />
          <AudioPlayer src={transcriptData.audio_url} />
        </>
      )}
    </div>
  );
};

export default TranscriptList;
