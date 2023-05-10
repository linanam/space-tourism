import {Header} from "../../components/Header/Header";
import styles from './technology.module.scss';
import {useDisplayTab} from "../../hooks/useDisplayTab";
import {useGetContent} from "../../hooks/useGetContent";
import useOrientationChange from "../../hooks/useOrientationChange";

export const Technology = () => {
    const contentData = useGetContent();
    const {tabIndex, tabClickHandler} = useDisplayTab();
    const portraitOrientation = useOrientationChange();
    const imageOrientation = (portraitOrientation) ? 'landscape' : 'portrait';

    if (contentData) {
        return (
            <>
                <Header/>
                <div className="full-content">
                    <div className={styles.heading}>
                        <div className="pageHeading"><span>03</span>SPACE LAUNCH 101</div>
                    </div>
                    <div className={styles.container}>
                        <div className={`${styles.image} ${imageOrientation}`}>
                            <img src={require(`${contentData[tabIndex].images[imageOrientation]}`)} />
                        </div>
                        <div className={styles.tabContainer}>
                            <ul className={styles.tabNameList}>
                                {
                                    contentData.map((item, i) => {
                                        {
                                            return <li key={i} data-tab-index={i} className={(tabIndex == i) ? 'active' : ''} onClick={tabClickHandler}>{i+1}</li>
                                        }
                                    })
                                }
                            </ul>
                            <div>
                                <div className={styles.subHeader}>THE TERMINOLOGY...</div>
                                <h3>{contentData[tabIndex].name}</h3>
                                <div className={styles.tabDescription}>{contentData[tabIndex].description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}