import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import UserItem from './UserItem';
import { useUserStore } from './useUserStore';
import { Loader, Error } from 'components/common/Indicators';
import { List } from 'components/common/List';
import { useRenderTracking } from 'hooks';
import Api from 'api';

export default observer(() => {
    useRenderTracking('UserList');
    const userStore = useUserStore();
    const { users, isLoading, hasLoaded, error } = userStore;

    useEffect(() => {
        userStore.setLoading();

        Api.getUsers()
            .then(users => userStore.setUsers(users))
            .catch(() => userStore.setLoadingError());
    }, [userStore]);

    if (isLoading || !hasLoaded) return <Loader />;
    if (error) return <Error />;

    return (
        <List>
            {users.map(user => (
                <UserItem key={user.id} id={user.id} name={user.name} />
            ))}
        </List>
    );
});
