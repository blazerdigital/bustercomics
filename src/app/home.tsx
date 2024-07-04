// src/app/page.tsx
import Head from 'next/head';
import styles from '../components/Header.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buster Comics</title>
        <meta name="description" content="Welcome to Buster Comics!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Buster Comics!
        </h1>
        <p className={styles.description}>
          Sign up to be notified when we launch.
        </p>
      </main>
    </div>
  );
}
