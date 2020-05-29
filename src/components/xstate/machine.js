import { Machine, assign } from 'xstate';

export const states = {
    IDLE: 'IDLE',
    NOT_LOADED: 'NOT_LOADED',
    LOADING: 'LOADING',
    LOAD_ERROR: 'LOAD_ERROR',
    ADDING: 'ADDING',
    ADD_ERROR: 'ADD_ERROR',
    REMOVING: 'REMOVING',
    REMOVE_ERROR: 'REMOVE_ERROR',
};

export const transitions = {
    LOAD: 'LOAD',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    LOAD_FAILURE: 'LOAD_FAILURE',
    ADD: 'ADD',
    ADD_SUCCESS: 'ADD_SUCCESS',
    ADD_FAILURE: 'ADD_FAILURE',
    REMOVE: 'REMOVE',
    REMOVE_SUCCESS: 'REMOVE_SUCCESS',
    REMOVE_FAILURE: 'REMOVE_FAILURE',
};

export default Machine({
    id: 'users',
    initial: states.NOT_LOADED,
    context: {
        users: [],
    },
    states: {
        [states.NOT_LOADED]: {
            on: {
                [transitions.LOAD]: states.LOADING,
            },
        },
        [states.IDLE]: {
            on: {
                [transitions.ADD]: states.ADDING,
                [transitions.REMOVE]: states.REMOVING,
            },
        },
        [states.LOADING]: {
            on: {
                [transitions.LOAD_SUCCESS]: {
                    target: states.IDLE,
                    actions: assign({
                        users: (context, event) => {
                            return context.users.concat(event.users);
                        },
                    }),
                },
                [transitions.LOAD_FAILURE]: states.LOAD_ERROR,
            },
        },
        [states.LOAD_ERROR]: {
            [transitions.ADD]: states.ADDING,
            [transitions.REMOVE]: states.REMOVING,
        },

        [states.ADDING]: {
            on: {
                [transitions.ADD_SUCCESS]: {
                    target: states.IDLE,
                    actions: assign({
                        users: (context, event) => {
                            return context.users.concat(event.user);
                        },
                    }),
                },
                [transitions.ADD_FAILURE]: states.ADD_ERROR,
            },
        },
        [states.ADD_ERROR]: {
            [transitions.ADD]: states.ADDING,
            [transitions.REMOVE]: states.REMOVING,
        },

        [states.REMOVING]: {
            on: {
                [transitions.REMOVE_SUCCESS]: {
                    target: states.IDLE,
                    actions: assign({
                        users: (context, event) => {
                            return context.users.filter(
                                user => user.id !== event.user.id
                            );
                        },
                    }),
                },
                [transitions.REMOVE_FAILURE]: states.REMOVE_ERROR,
            },
        },
        [states.REMOVE_ERROR]: {
            [transitions.ADD]: states.ADDING,
            [transitions.REMOVE]: states.REMOVING,
        },
    },
});
