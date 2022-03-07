import Image from "next/image";
import styles from "../../pages/index.module.css"; // Import CSS styles from corresponding CSS module

import white_zigzag_img from "../../public/white_zigzag.webp";
import black_zigzag_img from "../../public/black_zigzag.webp";

const StatsComponent = (): JSX.Element => {
    let zigzagWhite: JSX.Element; // Naming assumes light theme

    if (process.browser && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        zigzagWhite = (
            <Image
                className={styles.zigzag}
                src={black_zigzag_img}
                alt={""}
            />
        );
    } else {
        zigzagWhite = (
            <Image
                className={styles.zigzag}
                src={white_zigzag_img}
                alt={""}
            />
        );
    }
    return (
        <section className={styles.statsContainer}>
            <div className={styles.zigzag}>
                {zigzagWhite}
            </div>
            <div className={styles.stats}>
                <span className={styles.stat}>
                    <h2>10+</h2>
                    <div className={styles.statDivider} />
                    <p>GitHub Repositories</p>
                </span>

                <span className={styles.stat}>
                    <h2>700+</h2>
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
    );
};

export default StatsComponent;