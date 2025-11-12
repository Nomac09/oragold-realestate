import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Oragold Realestate | Luxury Real Estate</title>
        <meta name="description" content="Oragold Realestate stands as a beacon of sophistication and trust in Dubai's dynamic property landscape, offering bespoke real estate solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <Hero />
        <About />
        <Services />
        <Philosophy />
        <Contact />
      </Layout>
    </>
  );
}