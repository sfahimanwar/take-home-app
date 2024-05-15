import Head from "next/head";
import styles from "@/styles/Home.module.css";
import TranscriptList from "../components/TranscriptList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Karaoke App</title>
        <meta name="description" content="Karaoke app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to the Karaoke App</h1>
        <TranscriptList />
        {/* Add your karaoke app components here */}
      </main>
    </>
  );
}

