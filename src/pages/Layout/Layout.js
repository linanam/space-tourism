import {Outlet} from "react-router-dom";
import {useLocation} from "react-router-dom";
import styles from "./layout.module.scss";

export const Layout = () => {
    const path = useLocation().pathname.replace('/', '');

    return (
        <main className={`${styles.main} ${path}`}>
            <Outlet />
        </main>
    )
}