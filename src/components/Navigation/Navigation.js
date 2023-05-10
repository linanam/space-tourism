import styles from "./navigation.module.scss";
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className={styles.navigationContainer}>
            <input className={styles.checkbox} type="checkbox"/>
            <div className={styles.navIcon}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/destinations">Destination</NavLink>
                <NavLink to="/crew">Crew</NavLink>
                <NavLink to="/technology">Technology</NavLink>
            </nav>
        </div>
    )
}