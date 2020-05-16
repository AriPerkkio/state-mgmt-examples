import { useEffect, useReducer } from 'react';

const useForceRender = (timeout = 1000) => {
    const [, forceRender] = useReducer(s => s + 1, 0);

    useEffect(() => {
        const timer = setInterval(forceRender, timeout);
        return () => clearTimeout(timer);
    }, [timeout]);
};

export default useForceRender;
