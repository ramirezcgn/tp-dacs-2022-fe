import React from 'react';
import { useRouter } from '../../node_modules/next/router';
import Navbar from '../../components/Navbar/Navbar';
import Details from '../../components/Details/Details';

const GGG = () => {
  const router = useRouter();
  return(
    <div>
        <head> <Navbar/> </head>
        <section>
          < Details paq={router} />
        </section>
    </div>
  )
};

export default GGG