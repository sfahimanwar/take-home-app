import { useTranscripts } from '../services/api';

const TranscriptList = ({ onSelect }) => {
  const { data, error, isLoading } = useTranscripts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching transcripts</div>;

  return (
    <ul>
      {data.map((transcript) => (
        <li key={transcript.id} onClick={() => onSelect(transcript.id)}>
          {transcript.name}
        </li>
      ))}
    </ul>
  );
};

export default TranscriptList;
