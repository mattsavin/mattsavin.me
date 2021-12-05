import {NextPage} from "next";
import Head from "next/head";
import styles from "./about.module.css";
import Image from "next/image";
import climbing from "../public/climbing.png";
import yosemite from "../public/IMG_20190413_125347_crop_fade.png";

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
                        <span>
                            <h1>Hi! I&#39;m Matthew <br />An aspiring young<br />computer scientist</h1>
                        </span>
                    </div>
                    <div className={styles.headingRight}>
                        <Image
                            alt={"Climbing"}
                            src={climbing}
                            width={526.5}
                            height={653.25}
                        />
                    </div>
                </section>
                <section className={styles.description}>
                    <div className={styles.black}>
                        <Image
                            className={styles.yosemite}
                            src={yosemite}
                            alt={"Yoesmite"}
                        />
                    </div>
                    <div className={styles.black}>

                    </div>
                </section>
            </main>
        </>
    );
};

export default About;