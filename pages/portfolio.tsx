import {NextPage} from "next";
import Head from "next/head";
import styles from "./portfolio.module.css";

const Portfolio: NextPage = () => {
    return(
        <>
            <Head>
                <title>My Portfolio - Matthew Savin</title>
                <meta name="description" content="Matthew Savin's Portfolio of Exemplar Work" />
            </Head>
            <main className={styles.main}>
                <h1>My Activities</h1>
            </main>
        </>
    );
};

export default Portfolio;