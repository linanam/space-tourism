import {useState} from "react";

export const useDisplayTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const tabClickHandler = function (e) {
        e.preventDefault();
        setTabIndex(e.currentTarget.getAttribute('data-tab-index'));
    }

    return {tabIndex, tabClickHandler};
}