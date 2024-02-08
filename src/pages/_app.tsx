import Head from "next/head";
import "../../styles/index.css";
import { AppProps } from "next/app";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fenextjs</title>
        <link rel="icon" href="/favicon.png" sizes="32x32"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
