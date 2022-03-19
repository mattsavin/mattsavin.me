// TODO: Comment this file

import {NextPage} from "next";
import styles from "./footer.module.css";
import Link from "next/link";
import {SiNextdotjs, SiReact} from "react-icons/si";
import { BsHeartFill } from "react-icons/bs";
import React from "react";

const Footer: NextPage = () => {
    const date = new Date();

    return (
        <React.Fragment>
            <footer className={styles.footerAbsolute}>
                <div className={styles.footer}>
                    <div className={styles.columnGroup}>
                        <span className={styles.footerSection}>
                            <h2>Found an issue with this page? <a
                                href={"https://github.com/lamitron/mattsavin.me/"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                    Fix it on GitHub
                            </a></h2>
                        </span>
                        <span className={styles.footerSection}>
                            <h2>Made with&nbsp;
                                <a
                                    href={"https://nextjs.org/"}
                                    className={styles.inlineIcon}
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                >
                                    <SiNextdotjs className={styles.inlineIcon}/>
                                </a>&nbsp;
                                <a
                                    href={"https://reactjs.org/"}
                                    className={styles.inlineIcon}
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                >
                                    <SiReact className={styles.inlineIcon}/>
                                </a>
                                    &nbsp;&&nbsp;
                                <BsHeartFill className={`${styles.inlineIcon} ${styles.redIcon}`} />
                                    &nbsp;by Matthew Savin</h2>
                        </span>
                        <div className={styles.rowGroup}>
                            <span className={`${styles.rowSection} ${styles.footerSection}`}>
                                <h1>
                                    <a href={"mailto:matt.asavin@gmail.com"}>
                                        Get in Contact
                                    </a>
                                </h1>
                            </span>
                            <span className={`${styles.rowSection} ${styles.footerSection}`}>
                                <h1>
                                    <Link href={"/terms"}>
                                        <a>
                                            Terms
                                        </a>
                                    </Link>
                                </h1>
                            </span>
                        </div>
                        <span className={styles.footerBase}>
                            <h1>mattsavin.me, All content
                                <br />
                                {/* If you're reading this and you know who you are, 
                                I appreciate immensely you changing this date lmfao
                                I got this idea thanks to you anyway :) */}
                                    &copy; {date.getFullYear()} Matthew Savin</h1>
                        </span>
                    </div>
                </div>
                <div className={styles.footerRelative}/>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
