import { ServerError } from './ServerError';
import { useTranscripts } from '../services/api';
import { List, Text, Loader, Card, Group, Button, Center } from '@mantine/core';
import Link from 'next/link';

const TranscriptList = () => {
  const { data, error, isLoading } = useTranscripts();

  if (isLoading) return <Center><Loader /></Center>;
  if (error) return <ServerError />;

  return (
    <List spacing="sm" center>
      {data.map((transcript) => (
        <Card shadow="sm" radius="md" p="md" key={transcript.id} style={{ cursor: 'pointer', marginBottom: '10px' }}>
          <Link href={`/transcript/${transcript.id}`} passHref style={{ textDecoration: 'none' }}>
            <Group position="apart" style={{ alignItems: 'center' }}>
              <Text weight={500}>{transcript.name}</Text>
              <Button variant="light" color="blue" aria-label="Play audio">Play</Button>
            </Group>
          </Link>
        </Card>
      ))}
    </List>
  );
};

export default TranscriptList;
