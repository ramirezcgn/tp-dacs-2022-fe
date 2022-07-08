import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Styles from './index.module.scss';
import { Carousel } from 'components';
import { Card } from 'components';

const HomePage = () => {
  return (
    <div className={Styles.principal}>
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <h1>
          <br />
        </h1>
        <Card />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
