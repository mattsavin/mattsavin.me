import {NextPage} from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
    return (
        <>
            <footer className={styles.footer}>
                <h1>mattsavin.me</h1>
            </footer>
        </>
    );
};

export default Footer;