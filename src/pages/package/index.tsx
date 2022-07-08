import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';
import Details from '../../components/Details/Details';

const GGG = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        {' '}
        <Navbar />{' '}
      </Head>
      <section>
        <Details paq={router} />
      </section>
    </div>
  );
};

export default GGG;
