import {NextPage} from "next";
import Head from "next/head";
import styles from "./about.module.css";
import Image from "next/image";
import climbing from "../public/climbing.png";
import yosemite from "../public/IMG_20190413_125347_crop_fade_b.png";

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
                            <h1>Hi! I&#39;m Matthew<br />An aspiring young<br />computer scientist</h1>
                        </span>
                    </div>
                    <div className={styles.headingRight}>
                        <Image
                            className={styles.climbing}
                            alt={"Climbing"}
                            src={climbing}
                            width={810}
                            height={456}
                        />
                    </div>
                </section>
                <section className={styles.description}>
                    <div className={styles.parent}>
                        <div className={styles.yosemite}>
                            <Image
                                src={yosemite}
                                alt={"Yoesmite"}
                            />
                        </div>
                        <div className={styles.about}>
                            <div className={styles.aboutFlex}>
                                <h2 className={styles.about}>About Me</h2>
                                <span className={styles.aboutParagraph}>
                                    <p>
                                    Born and raised in Berkshire, I&#39;ve always had a passion for computers.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                        <br />
                                        <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </span>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default About;