import { useEffect, useContext } from 'react';

import Api from 'api';
import { UserStateContext, UserDispatchContext } from './UserContext';
import { ON_LOAD, ON_SUCCESS, ON_ERROR } from './reducer';

export function useUsers(_shouldFetch) {
    const state = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);

    const shouldFetch = _shouldFetch && !state.isLoading && !state.hasLoaded;

    useEffect(() => {
        if (shouldFetch) {
            dispatch(ON_LOAD);

            Api.getUsers()
                .then(users => dispatch({ ...ON_SUCCESS, users }))
                .catch(() => dispatch(ON_ERROR));
        }
    }, [shouldFetch, dispatch]);

    return state;
}
