import Head from 'next/head';
import Hero from './Hero';
import Footer from './Footer';
import Header from './Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="A simple landing page created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

