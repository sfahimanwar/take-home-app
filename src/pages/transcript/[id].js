import { useRouter } from 'next/router';
import { useTranscriptById } from '../../services/api';
import Transcript from '../../components/Transcript';
import AudioPlayer from '../../components/AudioPlayer';
import Link from 'next/link';
import { useState } from 'react';
import { Loader } from '@mantine/core';

export default function TranscriptPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: transcript, isLoading, error } = useTranscriptById(id);
  const [currentTime, setCurrentTime] = useState(0);

  if (isLoading) return (
    <div>
      <p>Loading...</p>
      <Loader />
    </div>
  );
  if (error) return <p>Error loading transcript</p>;

  return (
    <div>
      <Link href="/">
        Home
      </Link>
      <h1>{transcript.name}</h1>
      <Transcript transcript={transcript} currentTime={currentTime} />
      <AudioPlayer src={transcript.audio_url} onTimeUpdate={setCurrentTime} />
    </div>
  );
}
