import styles from "../../../index.module.css";

const Stat = (props: any) => {
    return (
        <span className={styles.stat}>
            <h2>{props.amount}</h2>
            <div className={styles.statDivider} />
            <p>{props.achievement}</p>
        </span>
    );
};

export default Stat;