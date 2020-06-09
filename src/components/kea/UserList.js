import React, { useEffect } from 'react';
import { useActions, useValues } from 'kea';

import logic from './logic';
import UserItem from './UserItem';
import { List } from 'components/common/List';
import { Loader, Error } from 'components/common/Indicators';
import { useRenderTracking } from 'hooks';

export default function UserList() {
    useRenderTracking('UserList');
    const { load } = useActions(logic);
    const { users, isLoading, hasLoaded, error } = useValues(logic);

    useEffect(() => {
        load();
    }, [load]);

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
