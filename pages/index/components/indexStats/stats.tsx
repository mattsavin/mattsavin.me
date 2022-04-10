import Image from "next/image";
import styles from "../../../index.module.css"; // Import CSS styles from corresponding CSS module

import Stat from "./statHolder";

import white_zigzag_img from "../../../../public/white_zigzag.webp";
import black_zigzag_img from "../../../../public/black_zigzag.webp";

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
                <Stat amount="15+" achievement="GitHub Repositories" />
                <Stat amount="3" achievement="A* Predicted Grades" />
                <Stat amount="1300+" achievement="Open Source Contributions" />
            </div>
        </section>
    );
};

export default StatsComponent;