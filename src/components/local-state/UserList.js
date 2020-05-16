import React from 'react';

import { Loader, Error } from 'components/common/Indicators';
import { List, ListItem } from 'components/common/List';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { useUsers } from './useUsers';

export default function LocalState() {
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

            <Input disabled={state.isAddingUser}>
                {name => (
                    <Button
                        disabled={state.isAddingUser}
                        onClick={() => add(name)}>
                        Add user
                    </Button>
                )}
            </Input>

            {state.isRemovingUser && <Loader>Removing user...</Loader>}
            {state.userRemovingError && <Error>Failed to remove user</Error>}

            {state.isAddingUser && <Loader>Adding user...</Loader>}
            {state.userAddingError && <Error>Failed to add user</Error>}
        </>
    );
}
