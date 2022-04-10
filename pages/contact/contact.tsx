import {NextPage} from "next";
import React from "react";
import Head from "next/head";
import styles from "./contact.module.css";
import Link from "next/link";

const Contact: NextPage  = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Contact Me</title>
            </Head>
            <main id={styles.main}>
                <section id={styles.header}>
                    <div id={styles.headingRight}>
                        <h1 id={styles.title}>Get in touch</h1>
                    </div>
                </section>
                <div id={styles.contactLinks}>
                    <Link href={"mailto:matt@mattsavin.me"} passHref={true}>
                        <a className={styles.contactLink}>
                            <h2>Send me an email</h2>
                        </a>
                    </Link>
                    <Link href={"https://discord.com/users/394815013744934912"} passHref={true}>
                        <a className={styles.contactLink} target={"_blank"} rel={"noreferrer"}>
                            <h2>Chat with me on Discord</h2>
                        </a>
                    </Link>
                    <Link href={"https://twitter.com/lamitron_/"} passHref={true}>
                        <a className={styles.contactLink} target={"_blank"} rel={"noreferrer"}>
                            <h2>Follow me on Twitter</h2>
                        </a>
                    </Link>
                    <Link href={"https://github.com/mattsavin/"} passHref={true}>
                        <a className={styles.contactLink} target={"_blank"} rel={"noreferrer"}>
                            <h2>Come look at my GitHub</h2>
                        </a>
                    </Link>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Contact;