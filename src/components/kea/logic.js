import { kea } from 'kea';

import Api from 'api';

const logic = kea({
    actions: () => ({
        load: true,
        loadSuccess: users => ({ users }),
        loadFailure: true,

        add: name => ({ name }),
        addSuccess: user => ({ user }),
        addFailure: true,

        remove: user => ({ user }),
        removeSuccess: user => ({ user }),
        removeFailure: true,
    }),

    reducers: () => ({
        users: [
            [],
            {
                loadSuccess: (_, { users }) => users,
                addSuccess: (users, { user }) => users.concat(user),
                removeSuccess: (users, { user }) =>
                    users.filter(_user => _user.id !== user.id),
            },
        ],
        hasLoaded: [
            false,
            {
                loadSuccess: () => true,
            },
        ],
        isLoading: [
            false,
            {
                load: () => true,
                loadSuccess: () => false,
                loadFailure: () => false,
            },
        ],
        error: [
            false,
            {
                load: () => false,
                loadFailure: () => true,
            },
        ],
        isAdding: [
            false,
            {
                add: () => true,
                addSuccess: () => false,
                addFailure: () => false,
            },
        ],
        addingError: [
            false,
            {
                add: () => false,
                addFailure: () => true,
            },
        ],
        isRemoving: [
            false,
            {
                remove: () => true,
                removeSuccess: () => false,
                removeFailure: () => false,
            },
        ],
        removingError: [
            false,
            {
                remove: () => false,
                removeFailure: () => true,
            },
        ],
    }),

    listeners: ({ actions }) => ({
        load: () =>
            Api.getUsers()
                .then(users => actions.loadSuccess(users))
                .catch(() => actions.loadFailure()),

        add: ({ name }) =>
            Api.addUser(name)
                .then(user => actions.addSuccess(user))
                .catch(() => actions.addFailure()),

        remove: ({ user }) =>
            Api.removeUser(user)
                .then(() => actions.removeSuccess(user))
                .catch(() => actions.removeFailure()),
    }),
});

export default logic;
