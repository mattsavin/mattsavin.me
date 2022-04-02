// TODO: Comment this file

import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from "../components/layout";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <React.Fragment>
            <Head>
                <title>Matthew Savin</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="Content-Language" content="en" />
                <link rel="icon" href={"/favicon.ico"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Fragment>
    );
}

export default MyApp;
