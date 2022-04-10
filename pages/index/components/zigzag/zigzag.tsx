import white_zigzag_img from "../../../../public/white_zigzag.png";
import black_zigzag_img from "../../../../public/black_zigzag.webp";
import styles from "./zigzag.module.css";
import Image from "next/image";

export const zigzagBlack = () => {
    if (process.browser && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return (
            <Image
                className={styles.zigzag}
                src={white_zigzag_img}
                alt={""}
            />
        );
        
    } else {
        return (
            <Image
                className={styles.zigzag}
                src={black_zigzag_img}
                alt={""}
            />
        );
    }
};
    
export const zigzagWhite = () => {
    if (process.browser && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return (
            <Image
                className={styles.zigzag}
                src={black_zigzag_img}
                alt={""}
            />
        );
    } else {
        return (
            <Image
                className={styles.zigzag}
                src={white_zigzag_img}
                alt={""}
            />
        );
    }
};

export default zigzagWhite;