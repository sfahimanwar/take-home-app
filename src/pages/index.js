import Head from "next/head";
import { Title, Container, Center, Paper } from '@mantine/core';
import TranscriptList from "../components/TranscriptList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Audio Player</title>
        <meta name="description" content="Audio player app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container size="xl" px="md" >
        <Center style={{ height: '100vh' }}>
          <div>
            <Title order={1} style={{ marginBottom: 20, fontSize: '3rem', textAlign: 'center', color: '#228be6' }}>Audio Player</Title>
            <Paper shadow="sm" radius="md" p="md">
              <TranscriptList />
            </Paper>
          </div>
        </Center>
      </Container>
    </>
  );
}



