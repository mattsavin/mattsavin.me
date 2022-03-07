import Image from "next/image";
import styles from "../../pages/index.module.css"; // Import CSS styles from corresponding CSS module
import white_zigzag_img from "../../public/white_zigzag.webp";
import black_zigzag_img from "../../public/black_zigzag.webp";
import climbing from "../../public/climbing.webp";


const LandingPage = (): JSX.Element => {
    let zigzagBlack: JSX.Element;
    if (process.browser && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        zigzagBlack = (
            <Image
                className={styles.zigzag}
                src={white_zigzag_img}
                alt={""}
            />
        );
    } else {
        zigzagBlack = (
            <Image
                className={styles.zigzag}
                src={black_zigzag_img}
                alt={""}
            />
        );
    }
    return (
        <section className={styles.mainHeader}>
            <div className={styles.headingLeft}>
                <div className={styles.zigzag} >
                    {zigzagBlack}
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
    );
};

export default LandingPage;