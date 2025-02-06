import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
function Detail() {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    //console.log(id);


    useEffect(() => {
        const getMovie = async () => {
            const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            //console.log(json);
            console.log(json.data.movie);
            //console.log("####### 표시 ######");
            setDetail(json.data.movie);
        };
        getMovie();
    }, [id]);

    return (
        <div>
            <div className={styles.container}>
                <img className={styles.backgroundImg} src={detail.background_image}></img>
                <img className={styles.overlayImg} src={detail.medium_cover_image}></img>
            </div>
            <div className={styles.description}>
                <ul>
                    <li>{detail.title}</li>
                    <li>{detail.year}년</li>
                    <li>{detail.runtime}분</li>
                </ul>
            </div>
        </div>

    );
}
export default Detail;