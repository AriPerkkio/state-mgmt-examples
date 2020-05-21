import { useContext } from 'react';

import Api from 'api';
import { UserDispatchContext } from './UserContext';
import {
    ON_ADD_START,
    ON_ADD_SUCCESS,
    ON_ADD_ERROR,
    ON_REMOVE_START,
    ON_REMOVE_SUCCESS,
    ON_REMOVE_ERROR,
} from './reducer';

export function useUserMethods() {
    const dispatch = useContext(UserDispatchContext);

    const add = name => {
        dispatch(ON_ADD_START);

        Api.addUser(name)
            .then(user => dispatch({ ...ON_ADD_SUCCESS, user }))
            .catch(() => dispatch(ON_ADD_ERROR));
    };

    const remove = user => {
        dispatch(ON_REMOVE_START);

        Api.removeUser(user)
            .then(() => dispatch({ ...ON_REMOVE_SUCCESS, user }))
            .catch(() => dispatch(ON_REMOVE_ERROR));
    };

    return { add, remove };
}
