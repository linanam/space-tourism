import dataJson from './../data/data.json';
import {useLocation} from "react-router-dom";

export const useGetContent = () => {
    const data = dataJson;
    const path = useLocation().pathname.replace('/', '');
    let contentData = null;

    if (data.hasOwnProperty(path)) {
        contentData = data[path];
    }

    return contentData;
}