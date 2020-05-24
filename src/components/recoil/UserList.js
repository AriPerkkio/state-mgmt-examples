import React, { useEffect } from 'react';
import { useRecoilState, selector } from 'recoil';

import UserState from './UserState';
import UserItem from './UserItem';
import reducer, { ON_LOAD, ON_SUCCESS, ON_ERROR } from './reducer';
import { Loader, Error } from 'components/common/Indicators';
import { List } from 'components/common/List';
import { useRenderTracking } from 'hooks';
import Api from 'api';

const usersQuery = selector({
    key: 'usersQuery',
    get: ({ get }) => {
        const { users, isLoading, hasLoaded, error } = get(UserState);
        const shouldFetch = !isLoading && !hasLoaded;

        return { users, isLoading, shouldFetch, error };
    },
    set: ({ set }, action) => {
        set(UserState, state => reducer(state, action));
    },
});

export default function UserList() {
    useRenderTracking('UserList');
    const [state, dispatch] = useRecoilState(usersQuery);
    const { users, isLoading, shouldFetch, error } = state;

    useEffect(() => {
        if (shouldFetch) {
            dispatch(ON_LOAD);

            Api.getUsers()
                .then(users => dispatch({ ...ON_SUCCESS, users }))
                .catch(() => dispatch(ON_ERROR));
        }
    }, [shouldFetch, dispatch]);

    if (isLoading) return <Loader />;
    if (error) return <Error />;

    return (
        <List>
            {users.map(user => (
                <UserItem key={user.id} id={user.id} name={user.name} />
            ))}
        </List>
    );
}
