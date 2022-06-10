import styles from './Main.module.scss';

export const Main = ({
  title = 'NextJs Boilerplate',
  description = 'Saraza!',
}) => (
  <main className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.description}>{description}</h2>
  </main>
);
