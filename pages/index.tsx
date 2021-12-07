// TODO: Comment this file

// Importing required libraries and components
import type {NextPage} from "next"; // NextPage type for TypeScript type-checking
import Head from "next/head"; // Used to modify HTML <head> element - providing page metadata
import styles from "./index.module.css"; // Import CSS styles from corresponding CSS module
import Image from "next/image"; // Used for displaying images

// Imports for various images used on the page
import climbing from "../public/climbing.png";
import yosemite from "../public/yosemite.png";
import white_zigzag_img from "../public/white_zigzag.png";
import black_zigzag_img from "../public/black_zigzag.png";

const Home: NextPage = () => {
    let zigzagTop: JSX.Element, zigzagBottom: JSX.Element; // Declaring

    if (process.browser && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        zigzagTop = (
            <Image
                className={styles.zigzag}
                src={white_zigzag_img}
                alt={""}
            />
        );
    } else {
        zigzagTop = (
            <Image
                className={styles.zigzag}
                src={black_zigzag_img}
                alt={""}
            />
        );
    }

    if (process.browser && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        zigzagBottom = (
            <Image
                className={styles.zigzag}
                src={black_zigzag_img}
                alt={""}
            />
        );
    } else {
        zigzagBottom = (
            <Image
                className={styles.zigzag}
                src={white_zigzag_img}
                alt={""}
            />
        );
    }

    return(
        <>
            <Head>
                <title>Matthew Savin: About Me</title>
                <meta name="description" content="About Matthew Savin: an aspiring and talented young computer scientist." />
            </Head>
            <main>
                <section className={styles.mainHeader}>
                    <div className={styles.headingLeft}>
                        <div className={styles.zigzag} >
                            {zigzagTop}
                        </div>
                        <span>
                            <h1>Hi! I&#39;m&nbsp;
                                <span className={"brand"}>
                                    Matthew
                                </span>
                                <br />
                                 An aspiring young
                                <br />
                                computer scientist
                            </h1>
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
                    <div className={styles.contrastingColor}>
                        <div className={styles.parent}>
                            <div className={styles.yosemite}>
                                <Image
                                    src={yosemite}
                                    alt={"Yoesmite"}
                                />
                            </div>
                            <div className={styles.about}>
                                <div className={styles.aboutFlex}>
                                    <h2 className={styles.aboutHeading}>About Me</h2>
                                    <div className={styles.divider} />
                                    <span className={styles.subtitle}>
                                        <p>Hi, I&#39;m Matthew and I love working with computers.</p>
                                    </span>
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
                    </div>

                </section>
                <section className={styles.statsContainer}>
                    <div className={styles.zigzag}>
                        {zigzagBottom}
                    </div>
                    <div className={styles.stats}>
                        <span className={styles.stat}>
                            <h2>10+</h2>
                            <div className={styles.statDivider} />
                            <p>GitHub Repositories</p>
                        </span>

                        <span className={styles.stat}>
                            <h2>600+</h2>
                            <div className={styles.statDivider} />
                            <p>Open Source Contributions</p>
                        </span>

                        <span className={styles.stat}>
                            <h2>4</h2>
                            <div className={styles.statDivider} />
                            <p>A* Predicted Grades</p>
                        </span>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;