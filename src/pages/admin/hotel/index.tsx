import Head from 'next/head';
import styles from 'styles/global.module.css';
import ContentHotel from 'components/ContentHotel/ContentHotel';
import Header from 'components/Header/Header';
import LeftNavbar from 'components/LeftNavbar/LeftNavbar';

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
        <ContentHotel />
      </div>
    </div>
  );
}
