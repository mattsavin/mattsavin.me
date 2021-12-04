import {NextPage} from "next";
import Head from "next/head";
import styles from "./about.module.css";

const About: NextPage = () => {
    return(
        <>
            <Head>
                <title>About Me: Matthew Savin</title>
                <meta name="description" content="About Matthew Savin: an aspiring and talented young computer scientist." />
            </Head>
            <main>
                <section className={styles.mainHeader}>
                    <div className={styles.headingLeft}>
                        <h1 className={styles.headingLeft}>Hi! I&#39;m Matthew <br />An aspiring young<br />computer scientist</h1>
                    </div>
                    <div className={styles.headingRight}>

                    </div>
                </section>

            </main>
        </>
    );
};

export default About;