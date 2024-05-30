import { useRouter } from 'next/router';
import { useTranscriptById } from '../../services/api';
import Transcript from '../../components/Transcript';
import AudioPlayer from '../../components/AudioPlayer';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Loader, Center, Title, ScrollArea, ActionIcon } from '@mantine/core';
import { IconHome2 } from '@tabler/icons-react';


export default function TranscriptPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: transcript, isLoading, error } = useTranscriptById(id);
  const [currentTime, setCurrentTime] = useState(0);
  const scrollViewportRef = useRef();

  if (isLoading) return (
    <Center>
      <p>Loading...</p>
      <Loader />
    </Center>
  );
  if (error) return <p>Error loading transcript</p>;

  return (
    <>
      <Link href="/" style={{ position: 'fixed', left: '20px', top: '50px' }}>
        <ActionIcon
          variant="gradient"
          size="xl"
          aria-label="Home"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        >
          <IconHome2 />
        </ActionIcon>
      </Link>
      <Center>
        <Title order={1} style={{ marginTop: '50px', color: '#228be6' }}>{transcript.name}</Title>
      </Center>
      <AudioPlayer src={transcript.audio_url} onTimeUpdate={setCurrentTime} />
      <ScrollArea style={{ height: '60vh', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '800px', margin: 'auto', padding: '20px' }} viewportRef={scrollViewportRef}>
        <Transcript transcript={transcript} currentTime={currentTime} scrollViewportRef={scrollViewportRef} />
      </ScrollArea>
    </>
  );
}
