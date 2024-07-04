// pages/index.js

'use client';

import Head from 'next/head';
import Image from 'next/image';
import '../src/app/globals.css';

export default function Landing() {
  return (
    <div>
      <Head>
        <title>Buster Comics</title>
        <meta name="description" content="Buster Comics" />
      </Head>
      <main>
        <div className="logo-container">
          <Image 
            src="/Logo.svg" 
            alt="Buster Comics Logo" 
            width={200} 
            height={200} 
            style={{ objectFit: 'contain' }} 
          />
          <p className="description">Stay tuned for exciting content and updates!</p>
        </div>
      </main>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        .logo-container {
          margin: 20px 0;
        }
        p {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
