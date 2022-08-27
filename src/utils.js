import { useEffect } from "react";

export const useEvent = (event, handler, passive = false) => {
    useEffect(() => {
        // initiate the event handler
        window.addEventListener(event, handler, passive);

        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.removeEventListener(event, handler);
        };
    });
};

export const getColors = (num) => {
    switch (num) {
        case 3:
            return "#cce6ff";
        case 6:
            return "#99ceff";
        case 12:
            return "#80c1ff";
        case 24:
            return "#1a90ff";
        case 48:
            return "#004f99";
        case 96:
            return "#668cff";
        case 192:
            return "#0040ff";
        case 384:
            return "#002080";
        case 768:
            return "#8c1aff";
        case 1536:
            return "#5900b3";
        case 3072:
            return "#0d001a";
        default:
            return "#C2B3A3";
    }
};