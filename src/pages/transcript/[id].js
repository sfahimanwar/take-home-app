import { useRouter } from 'next/router';
import { useTranscriptById } from '../../services/api';
import Transcript from '../../components/Transcript';
import AudioPlayer from '../../components/AudioPlayer';

export default function TranscriptPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: transcript, isLoading, error } = useTranscriptById(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading transcript</p>;

  return (
    <div>
      <h1>{transcript.name}</h1>
      <Transcript transcript={transcript} />
      <AudioPlayer src={transcript.audio_url} />
    </div>
  );
}