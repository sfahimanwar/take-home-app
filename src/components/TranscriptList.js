import { useTranscripts } from '../services/api';
import { useState } from 'react';
import Link from 'next/link';

const TranscriptList = () => {
  const { data, error, isLoading } = useTranscripts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching transcripts</div>;

  return (
    <div>
      <ul>
        {data.map((transcript) => (
          <li key={transcript.id}>
            <Link href={`/transcript/${transcript.id}`}>
              {transcript.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TranscriptList;
