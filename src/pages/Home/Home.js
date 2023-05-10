import {Header} from "../../components/Header/Header";
import styles from "./home.module.scss";

export const Home = () => {
    return (
        <>
            <Header />
            <div className="content">
                <div className={styles.homePageContent}>
                    <div className={styles.main}>
                        <div className={styles.info}>
                            <h5>So, you want to travel to</h5>
                            <h1>Space</h1>
                            <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                                outer space and not hover kind of on the edge of it. Well sit back, and relax
                                because we’ll give you a truly out of this world experience!</p>
                        </div>
                        <div className={styles.column}>
                            <button className={styles.button}>Explore</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}