// TODO: Comment this file

import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from "../components/layout";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return(
        <>
            <Head>
                <title>Matthew Savin</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="Content-Language" content="en" />
                <link rel="icon" href={"/favicon.ico"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Layout>
                <Script
                    strategy='lazyOnload'
                    src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                />
                <Script id='ga-analytics'>
                    {
                        `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
            
                        gtag('config', '${gtag.GA_TRACKING_ID}');
                        `
                    }
                </Script>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
