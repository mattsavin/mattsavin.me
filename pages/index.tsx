// TODO: Comment this file

// Importing required libraries and components
import type {NextPage} from "next"; // NextPage type for TypeScript type-checking
import Head from "next/head"; // Used to modify HTML <head> element - providing page metadata
import styles from "./index.module.css"; // Import CSS styles from corresponding CSS module
import Image from "next/image"; // Used for displaying images
import Link from "next/link"; // used for internal links between pages

// Imports for various images used on the page
import climbing from "../public/climbing.webp";
import white_zigzag_img from "../public/white_zigzag.webp";
import black_zigzag_img from "../public/black_zigzag.webp";

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
                <title>About Matthew Savin, a talented young computer scientist | Matthew Savin</title>
                <meta
                    name="description"
                    content="About Matthew Savin: an aspiring and talented young computer scientist who has always had a passion for computers, currently studying in the United Kingdom at a Sixth Form in Berkshire"
                />
            </Head>
            <script type={"application/ld+json"} dangerouslySetInnerHTML={{
                __html:
                    `
                        {
                            "@context": "https://schema.org/",
                            "@type": "NewsArticle",
                            "headline": "About Me: Matthew Savin",
                            "datePublished": "2021-12-06",
                            "author": {
                                "@type": "Person",
                                "name": "Matthew Savin"
                            }
                        }
                    `
            }} />
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
                                            I&#39;ve lived in Berkshire all my life, and from the very beginning I&#39;ve loved technology
                                            <br />
                                            I began simple programming with Python at age 7, and since then, my interest has only grown.
                                            Some of my first programs involved rudimentary experimentation with core
                                            programming and computer science concepts such as selection and iteration.
                                            One of the more complex programs I was working on at the time involved
                                            simple user interface components with <code>JavaFX.Swing</code> to create a
                                            basic (and not very secure!) login window that replied with
                                            &quot;<code>Hello, &#123;username&#125;</code>&quot;.
                                            <br />
                                            <br />
                                            Since then, my interests have developed into a deep love of Linux and all
                                            things open-source since I first used a Raspberry Pi at age 8, just one short
                                            year after the Model B&#39;s initial release. I still use Raspberry Pis and
                                            Linux regularly to this day - my daily driver operating system is currently
                                            openSUSE Tumbleweed, and I use a Raspberry Pi to host films and video for me
                                            and my family to watch using Plex, as well as a Samba storage server.
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.yosemiteBuffer} />
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
                <section className={styles.stillInterested}>
                    <h1 className={styles.interestHeader}>Still interested?</h1>
                    <h2 className={styles.interestLink}>
                        <Link href={"/about"}>
                            <a>Read more about my website</a>
                        </Link>
                    </h2>
                    <p>or</p>
                    <h2 className={styles.interestLink}>
                        <Link href={"/blog"}>
                            <a>Read my blog</a>
                        </Link>
                    </h2>
                </section>
            </main>
        </>
    );
};

export default Home;