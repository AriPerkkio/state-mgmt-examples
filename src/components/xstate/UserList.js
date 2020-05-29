import React from 'react';

import { states } from './machine';
import { useUsers } from './useUsers';
import { Loader, Error } from 'components/common/Indicators';
import { List, ListItem } from 'components/common/List';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { useRenderTracking } from 'hooks';

// prettier-ignore
const {
    LOADING, NOT_LOADED, LOAD_ERROR,
    REMOVING, REMOVE_ERROR,
    ADDING, ADD_ERROR
} = states;

export default function UserList() {
    useRenderTracking('UserList');
    const { state, users, add, remove } = useUsers();

    if (state === LOADING || state === NOT_LOADED) return <Loader />;
    if (state === LOAD_ERROR) return <Error />;

    return (
        <>
            <List>
                {users.map(user => (
                    <ListItem key={user.id} onRemove={() => remove(user)}>
                        {user.name}
                    </ListItem>
                ))}
            </List>

            <Input disabled={state === ADDING}>
                {name => (
                    <Button
                        disabled={state === ADDING}
                        onClick={() => add(name)}>
                        Add user
                    </Button>
                )}
            </Input>

            {state === REMOVING && <Loader>Removing user...</Loader>}
            {state === REMOVE_ERROR && <Error>Failed to remove user</Error>}

            {state === ADDING && <Loader>Adding user...</Loader>}
            {state === ADD_ERROR && <Error>Failed to add user</Error>}
        </>
    );
}
