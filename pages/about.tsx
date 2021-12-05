import {NextPage} from "next";
import Head from "next/head";
import styles from "./about.module.css";
import Image from "next/image";
import climbing from "../public/climbing.png";

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
                        <Image
                            className={styles.headingRight}
                            alt={"Climbing"}
                            src={climbing}
                            width={526.5}
                            height={653.25}
                        />
                    </div>
                </section>

            </main>
        </>
    );
};

export default About;