import Head from 'next/head';
import Hero from './Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>welcome to the future</title>
        <meta name="description" content="A simple landing page created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  );
}

