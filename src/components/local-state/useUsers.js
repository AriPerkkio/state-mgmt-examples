import { useReducer, useEffect } from 'react';

import Api from 'api';
import reducer, {
    initialState,
    ON_LOAD,
    ON_SUCCESS,
    ON_ERROR,
    ON_ADD_START,
    ON_ADD_SUCCESS,
    ON_ADD_ERROR,
    ON_REMOVE_START,
    ON_REMOVE_SUCCESS,
    ON_REMOVE_ERROR,
} from './reducer';

export function useUsers() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const add = userToAdd => {
        dispatch(ON_ADD_START);

        Api.addUser(userToAdd)
            .then(user => dispatch({ ...ON_ADD_SUCCESS, user }))
            .catch(() => dispatch(ON_ADD_ERROR));
    };

    const remove = user => {
        dispatch(ON_REMOVE_START);

        Api.removeUser(user)
            .then(() => dispatch({ ...ON_REMOVE_SUCCESS, user }))
            .catch(() => dispatch(ON_REMOVE_ERROR));
    };

    useEffect(() => {
        dispatch(ON_LOAD);

        Api.getUsers()
            .then(users => dispatch({ ...ON_SUCCESS, users }))
            .catch(() => dispatch(ON_ERROR));
    }, []);

    return {
        ...state,
        add,
        remove,
    };
}
