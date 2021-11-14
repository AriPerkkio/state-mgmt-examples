import React from 'react';

import { useUsers } from './useUsers';
import { Loader, Error } from 'components/common/Indicators';
import { List, ListItem } from 'components/common/List';
import { useRenderTracking } from 'hooks';

export default function UserList() {
    useRenderTracking('UserList');
    const { state, users } = useUsers();

    if (state === 'loading' || state === 'notLoaded') return <Loader />;
    if (state === 'loadError') return <Error />;

    return (
        <List>
            {users.map(user => (
                <ListItem key={user.id}>{user.name}</ListItem>
            ))}
        </List>
    );
}
