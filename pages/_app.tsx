import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <>
            <Head>
                <title>Matthew Savin</title>
                <link rel="icon" href={"/favicon.ico"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
