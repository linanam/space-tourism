import { useState, useEffect } from 'react'

export default function useOrientationChange() {
    let isPortrait = window.orientation === 0 ? true : false;
    const [portraitOrientation, setPortraitOrientation] = useState(isPortrait);
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    function getOrientation(mediaQuery) {
        isPortrait = (mediaQuery) ? true : false;
        setPortraitOrientation(isPortrait);
    }

    useEffect(() => {
        getOrientation(mediaQuery.matches);

        mediaQuery.addListener(function(mediaQueryEvent) {
            getOrientation(mediaQueryEvent.matches);
        });
    }, [])

    return portraitOrientation;
}
