import Link from "next/link";
import styles from "./navbar.module.css";

const navbar = () => {
    return (
        <nav>
            <div className={styles.nav}>
                <h1 className={styles.heading}>Matthew Savin</h1>
            </div>

        </nav>
    );
};

export default navbar;