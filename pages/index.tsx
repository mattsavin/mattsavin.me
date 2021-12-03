import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Under Construction</title>
                <meta name="description" content="mattsavin.me: Currently under construction!" />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
          Under Construction!
                </h1>

                <p className={styles.description}>
          This site is currently under construction!
                    <br /><br />
          It is being built using client and server side rendering using <a href="https://nextjs.org/" className={styles.link}>Next.js</a>
                    <br />
          Come back later to see how it&quot;s progressed or check out the code on <a href="https://github.com/lamitron/mattsavin.me" target="_blank" rel="noreferrer">Github: lamitron/mattsavin.me</a>
                    <br />
            Pull requests are welcome and appreciated!
                </p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;
