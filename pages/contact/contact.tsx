import {NextPage} from "next";
import React from "react";
import Head from "next/head";
import styles from "./contact.module.css";
import Link from "next/link";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

const Contact: NextPage  = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Contact Me</title>
            </Head>
            <main id={styles.main}>
                <section id={styles.header}>
                    <div id={styles.headingRight}>
                        <h1 id={styles.title}>Contact Me</h1>
                    </div>
                </section>
                <div id={styles.contactLinks}>
                    <div className={styles.contactHolder}>
                        <IoMdMail />
                        <Link href={"mailto:matt@mattsavin.me"} passHref={true}>
                            <a className={styles.contactLink}>
                                <h2>Send me an email</h2>
                            </a>
                        </Link>    
                    </div>
                    
                    <div className={styles.contactHolder}>
                        <BsLinkedin />
                        <Link href={"https://linkedin.com/in/mattsavin/"} passHref={true}>
                            <a className={styles.contactLink} target={"_blank"} rel={"noreferrer"}>
                                <h2>Connect with me on LinkedIn</h2>
                            </a>
                        </Link>    
                    </div>
                    
                    <div className={styles.contactHolder}>
                        <BsGithub />
                        <Link href={"https://github.com/mattsavin/"} passHref={true}>
                            <a className={styles.contactLink} target={"_blank"} rel={"noreferrer"}>
                                <h2>Come look at my GitHub</h2>
                            </a>
                        </Link>    
                    </div>
                    
                    <div className={styles.contactHolder}>
                        <FaDiscord />
                        <Link href={"https://discord.com/users/394815013744934912"} passHref={true}>
                            <a className={styles.contactLink} target={"_blank"} rel={"noreferrer"}>
                                <h2>Chat with me on Discord</h2>
                            </a>
                        </Link>
                    </div>
                    
                    <div className={styles.contactHolder}>
                        <FaTwitter />
                        <Link href={"https://twitter.com/lamitron_/"} passHref={true}>
                            <a className={styles.contactLink} target={"_blank"} rel={"noreferrer"}>
                                <h2>Follow me on Twitter</h2>
                            </a>
                        </Link>
                    </div>
                    
                    
                </div>
            </main>
        </React.Fragment>
    );
};

export default Contact;