import { useEffect } from 'react';
import { useMachine } from '@xstate/react';

import Api from 'api';
import UsersMachine, { states, transitions } from './machine';

// prettier-ignore
const {
    ADD, ADD_SUCCESS, ADD_FAILURE,
    REMOVE, REMOVE_SUCCESS, REMOVE_FAILURE,
    LOAD, LOAD_SUCCESS, LOAD_FAILURE
} = transitions;

export function useUsers() {
    const [{ value, context }, send] = useMachine(UsersMachine);

    const add = name => {
        send(ADD);

        Api.addUser(name)
            .then(user => send(ADD_SUCCESS, { user }))
            .catch(() => send(ADD_FAILURE));
    };

    const remove = user => {
        send(REMOVE);

        Api.removeUser(user)
            .then(() => send(REMOVE_SUCCESS, { user }))
            .catch(() => send(REMOVE_FAILURE));
    };

    const shouldFetch = value === states.NOT_LOADED;
    useEffect(() => {
        if (shouldFetch) {
            send(LOAD);

            Api.getUsers()
                .then(users => send(LOAD_SUCCESS, { users }))
                .catch(() => send(LOAD_FAILURE));
        }
    }, [shouldFetch, send]);

    return {
        state: value,
        users: context.users,
        add,
        remove,
    };
}
