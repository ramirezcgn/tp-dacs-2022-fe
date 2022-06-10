import { AppProps } from 'next/app';
import Head from 'next/head';
import 'reflect-metadata'; // fix decorators issue
import { Provider } from 'react-redux';
import { store } from 'store';
import '../styles/app.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>React - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
