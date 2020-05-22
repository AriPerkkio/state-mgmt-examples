import React from 'react';

import UserItem from './UserItem';
import { useUsers } from './useUsers';
import { Loader, Error } from 'components/common/Indicators';
import { List } from 'components/common/List';
import { useRenderTracking } from 'hooks';

export default function UserList() {
    useRenderTracking('UserList');
    const { users, isLoading, hasLoaded, error } = useUsers(true);

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
