import {Header} from "../../components/Header/Header";
import styles from "./crew.module.scss";
import "./carousel.scss";
import {Carousel} from 'react-responsive-carousel';
import {useGetContent} from "../../hooks/useGetContent";

export const Crew = () => {
    const contentData = useGetContent();
    console.log(contentData)

    return (
        <>
            <Header />
            <div className={`${styles.pageContent} content`}>
                <div className={styles.heading}>
                    <div className="pageHeading"><span>02</span>Meet your crew</div>
                </div>
                <Carousel showArrows={false} showStatus={false}>
                    {
                        contentData.map((item, i) => {
                            {
                                return (
                                    <div className={styles.container}>
                                        <div className={styles.info}>
                                            <h4>{item.role}</h4>
                                            <h3>{item.name}</h3>
                                            <div className={styles.bio}>{item.bio}</div>
                                        </div>
                                        <div className={styles.photo}>
                                            <img src={require(`${item.images.png}`)} />
                                        </div>
                                    </div>
                                );
                            }
                        })
                    }
                </Carousel>
            </div>

        </>
    )
}