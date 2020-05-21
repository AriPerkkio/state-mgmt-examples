import React, { useContext, useEffect } from 'react';

import Api from 'api';
import UserItem from './UserItem';
import {
    UserStateContext,
    UserDispatchContext,
    LOADING_MASK,
} from './UserContext';
import { ON_LOAD, ON_SUCCESS, ON_ERROR } from './reducer';
import { Loader, Error } from 'components/common/Indicators';
import { List } from 'components/common/List';
import { useRenderTracking } from 'hooks';

export default function UserList() {
    useRenderTracking('UserList');
    const dispatch = useContext(UserDispatchContext);
    const { isLoading, hasLoaded, error, users } = useContext(
        UserStateContext,
        LOADING_MASK
    );

    const shouldFetch = !isLoading && !hasLoaded;

    useEffect(() => {
        if (shouldFetch) {
            dispatch(ON_LOAD);

            Api.getUsers()
                .then(users => dispatch({ ...ON_SUCCESS, users }))
                .catch(() => dispatch(ON_ERROR));
        }
    }, [shouldFetch, dispatch]);

    if (isLoading || !hasLoaded) return <Loader />;
    if (error) return <Error />;

    return (
        <List>
            {users.map(user => (
                <UserItem key={user.id} id={user.id} name={user.name} />
            ))}
        </List>
    );
}
