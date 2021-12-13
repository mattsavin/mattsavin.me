import styles from "../styles/404.module.css";
import Link from "next/link";

const Custom404 = () => {
    return (
        <main className={styles.fullheight}>
            <div className={styles.center}>
                <h1 className={styles.mainHeader}>404</h1>
                <h2 className={styles.subheading}>This page could not found</h2>
                <p><Link href={"/"}><a>Return to the homepage</a></Link></p>
            </div>
        </main>
    );
};

export default Custom404;