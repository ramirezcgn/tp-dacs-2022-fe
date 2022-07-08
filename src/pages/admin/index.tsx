import { Chart, ArcElement } from 'chart.js';
import Head from 'next/head';
import styles from './index.module.css';
import Content from 'components/Content/Content';
import Header from 'components/Header/Header';
import LeftNavbar from 'components/LeftNavbar/LeftNavbar';

Chart.register(ArcElement);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>admin</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar />
        <Header />
        <Content />
      </div>
    </div>
  );
}
