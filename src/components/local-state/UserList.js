import React from 'react';

import { Loader, Error } from 'components/common/Indicators';
import { List, ListItem } from 'components/common/List';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { useUsers } from './useUsers';

export default function UserList() {
    const { add, remove, ...state } = useUsers();

    if (state.isLoading || !state.hasLoaded) return <Loader />;
    if (state.error) return <Error />;

    return (
        <>
            <List>
                {state.users.map(user => (
                    <ListItem key={user.id} onRemove={() => remove(user)}>
                        {user.name}
                    </ListItem>
                ))}
            </List>

            <Input disabled={state.isAdding}>
                {name => (
                    <Button disabled={state.isAdding} onClick={() => add(name)}>
                        Add user
                    </Button>
                )}
            </Input>

            {state.isRemoving && <Loader>Removing user...</Loader>}
            {state.errorRemoving && <Error>Failed to remove user</Error>}

            {state.isAdding && <Loader>Adding user...</Loader>}
            {state.errorAdding && <Error>Failed to add user</Error>}
        </>
    );
}
