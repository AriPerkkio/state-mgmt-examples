import { useReducer, useCallback } from 'react';

import useIsMounted from './useIsMounted';

const useReducerOnMounted = (...args) => {
    const isMounted = useIsMounted();
    const [state, dispatch] = useReducer(...args);

    const useDispatchOnMounted = useCallback(
        (...args) => {
            isMounted.current && dispatch(...args);
        },
        [isMounted]
    );

    return [state, useDispatchOnMounted];
};

export default useReducerOnMounted;
