import styles from "./header.module.scss";
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.line}></div>
            <Navigation />
        </header>
    )
}