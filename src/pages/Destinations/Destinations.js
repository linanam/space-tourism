import styles from "./destinations.module.scss";
import {Header} from "../../components/Header/Header";
import {useGetContent} from "../../hooks/useGetContent";
import {useDisplayTab} from "../../hooks/useDisplayTab";

export const Destinations = () => {
    const contentData = useGetContent();
    const {tabIndex, tabClickHandler} = useDisplayTab();

    if (contentData) {
        return (
            <>
                <Header/>
                <div className="content">
                    <div className={styles.heading}><div className="pageHeading"><span>01</span>Pick your destination</div></div>
                    <div className={styles.container}>
                        <div className={styles.image}>
                            <img src={require(`${contentData[tabIndex].images.png}`)} />
                        </div>
                        <div className={styles.tabContainer}>
                            <ul className={styles.tabNameList}>
                                {
                                    contentData.map((item, i) => {
                                        {
                                            return <li key={i} data-tab-index={i}
                                                       className={(tabIndex == i) ? 'active' : ''}
                                                       onClick={tabClickHandler}>{item.name}</li>;
                                        }
                                    })
                                }
                            </ul>
                            <div className={styles.tabContent}>
                                <h2>{contentData[tabIndex].name}</h2>
                                <div className={styles.tabDescription}>{contentData[tabIndex].description}</div>

                                <div className={styles.tabAdditionalInfo}>
                                    <div className={styles.distance}>
                                        <div className={styles.label}>AVG. DISTANCE</div>
                                        {contentData[tabIndex].distance}
                                    </div>
                                    <div className={styles.travel}>
                                        <div className={styles.label}>Est. travel time</div>
                                        {contentData[tabIndex].travel}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}