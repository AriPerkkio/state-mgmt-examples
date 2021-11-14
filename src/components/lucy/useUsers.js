import { useMachine } from '@xstate/react';
import { useEffect } from 'react';

import machine from './user-list.lucy';

const options = { context: { users: [] } };

export function useUsers() {
    const [{ value, context }, send] = useMachine(machine(options));

    const shouldFetch = value === 'notLoaded';
    useEffect(() => {
        if (shouldFetch) {
            send('load');
        }
    }, [shouldFetch, send]);

    return {
        state: value,
        users: context.users,
    };
}
