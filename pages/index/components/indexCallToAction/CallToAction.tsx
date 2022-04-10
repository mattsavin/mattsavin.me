import styles from "../../../index.module.css"; // Import CSS styles from corresponding CSS module
import Link from "next/link";

const CallToAction = (): JSX.Element => {
    return (
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
    );
};

export default CallToAction;