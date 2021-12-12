// TODO: Comment this file

import {NextPage} from "next";
import styles from "../styles/footer.module.css";
import { SiNextdotjs } from "react-icons/si";

const Footer: NextPage = () => {
    if (process.env.NODE_ENV == "production") {
        return (
            <>
                <footer className={styles.tempFooter}>
                    <h1>mattsavin.me, All content &copy; 2021 Matthew Savin</h1>
                </footer>
            </>
        );
    } else {
        return (
            <>
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
                                    <a href={"https://nextjs.org/"} className={styles.inlineIcon}>
                                        <SiNextdotjs />
                                    </a>
                                    &nbsp;by Matthew Savin</h2>
                            </span>
                            <div className={styles.rowGroup}>
                                <span className={`${styles.rowSection} ${styles.footerSection}`}>
                                    <h1>Get in Contact</h1>
                                </span>
                                <span className={`${styles.rowSection} ${styles.footerSection}`}>
                                    <h1>Links</h1>
                                </span>
                            </div>
                            <span className={styles.footerBase}>
                                <h1>mattsavin.me, All content &copy; 2021 Matthew Savin</h1>
                            </span>
                        </div>
                    </div>
                    <div className={styles.footerRelative}/>
                </footer>
            </>
        );
    }
};

export default Footer;