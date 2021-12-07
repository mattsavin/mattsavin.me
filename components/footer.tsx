// TODO: Comment this file

import {NextPage} from "next";
import styles from "./footer.module.css";

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
                        <div className={styles.footerGroup}>
                            <span className={styles.footerSection}>
                                <h1>Get in Contact</h1>
                            </span>
                            <span className={styles.footerSection}>
                                <h1>Links</h1>
                            </span>
                        </div>
                        <span className={styles.footerBase}>
                            <h1>mattsavin.me</h1>
                        </span>
                    </div>
                    <div className={styles.footerRelative}/>
                </footer>
            </>
        );
    }
};

export default Footer;