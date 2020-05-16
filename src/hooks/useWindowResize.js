import { useEffect, useRef, useReducer } from 'react';

const widthUpdater = () => window.innerWidth;

const useWindowResize = callback => {
    const [width, updateWidth] = useReducer(widthUpdater, window.innerWidth);
    const latestCallback = useRef(callback);

    // Add listener on window resize, clear listener on unmount
    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Keep latestCallback updated with given callback
    useEffect(() => {
        latestCallback.current = callback;
    }, [callback]);

    // Call callback when width changes
    useEffect(() => {
        latestCallback && latestCallback.current(width);
    }, [width]);
};

export default useWindowResize;
