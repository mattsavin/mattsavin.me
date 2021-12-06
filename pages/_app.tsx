import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from "../components/layout";
import Head from "next/head";
import { getAnalytics, logEvent } from "firebase/analytics";
import React, {  useEffect } from 'react';
import { app } from "../firebase/firebase";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const analytics = getAnalytics(app);
        logEvent(analytics, 'notification_received');
    });

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
