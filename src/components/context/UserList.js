import React from 'react';

import UserItem from './UserItem';
import { useUsers } from './useUsers';
import { Loader, Error } from 'components/common/Indicators';
import { List } from 'components/common/List';

export default function UserList() {
    const { users, isLoading, hasLoaded, error } = useUsers();

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
