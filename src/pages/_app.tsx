import Head from "next/head";
import "fenextjs-component/styles/index.css";
import "../../styles/index.css";
import { AppProps } from "next/app";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>Fenextjs</title>
        <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        <meta property="og:title" content="Fenextjs" />
        <meta
          property="og:description"
          content="Bienvenidos a Fenextjs, una librería innovadora diseñada para revolucionar tu experiencia de desarrollo en nextjs Nuestra misión es simplificar tu trabajo, ahorrándote tiempo valioso y energía en cada proyecto."
        />
        <meta property="og:image" content="/favicon.png" />
      </Head>
    </>
  );
}

export default CustomApp;
