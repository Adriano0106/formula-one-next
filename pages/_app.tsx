import "styles/globals.css";
import MainContainer from "components/MainContainer";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Informações dos pilotos/equipes atuais e campeões da Fórmula 1"
        />
        <title>Formula One Next</title>
      </Head>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </div>
  );
}

export default MyApp;
