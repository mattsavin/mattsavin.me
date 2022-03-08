// TODO: Comment this file

import type {NextPage} from 'next';
import Head from 'next/head';
import styles from "./construction.module.css";

const Construction: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Under Construction</title>
                <meta name="description" content="mattsavin.me: Currently under construction!" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Under Construction!</h1>

                <p className={styles.intro}>
                    This page is currently under construction!
                    <br />
                    <br />
                    It is being built using client and server side rendering using <a href="https://nextjs.org/"
                    >
                        Next.js
                    </a>
                    <br />
                    Come back later to see how it&#39;s progressed or check out the code on GitHub: <a
                        href="https://github.com/lamitron/mattsavin.me"
                        target="_blank" rel="noreferrer"
                    >
                        lamitron/mattsavin.me
                    </a>
                    <br />
            Pull requests are welcome and appreciated!
                </p>
            </main>
        </>
    );
};

export default Construction;
