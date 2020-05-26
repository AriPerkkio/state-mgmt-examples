import Api from 'api';

export const ON_USERS_LOAD_START = 'ON_USERS_LOAD_START';
export const ON_USERS_LOAD_SUCCESS = 'ON_USERS_LOAD_SUCCESS';
export const ON_USERS_LOAD_ERROR = 'ON_USERS_LOAD_ERROR';

export const ON_USER_ADD_START = 'ON_USER_ADD_START';
export const ON_USER_ADD_SUCCESS = 'ON_USER_ADD_SUCCESS';
export const ON_USER_ADD_ERROR = 'ON_USER_ADD_ERROR';

export const ON_USER_REMOVE_START = 'ON_USER_REMOVE_START';
export const ON_USER_REMOVE_SUCCESS = 'ON_USER_REMOVE_SUCCESS';
export const ON_USER_REMOVE_ERROR = 'ON_USER_REMOVE_ERROR';

export function loadUsers() {
    return dispatch => {
        dispatch({ type: ON_USERS_LOAD_START });

        Api.getUsers()
            .then(users => dispatch({ type: ON_USERS_LOAD_SUCCESS, users }))
            .catch(() => dispatch({ type: ON_USERS_LOAD_ERROR }));
    };
}

export function addUser(name) {
    return dispatch => {
        dispatch({ type: ON_USER_ADD_START });

        Api.addUser(name)
            .then(user => dispatch({ type: ON_USER_ADD_SUCCESS, user }))
            .catch(() => dispatch({ type: ON_USER_ADD_ERROR }));
    };
}

export function removeUser(user) {
    return dispatch => {
        dispatch({ type: ON_USER_REMOVE_START });

        Api.removeUser(user)
            .then(() => dispatch({ type: ON_USER_REMOVE_SUCCESS, user }))
            .catch(() => dispatch({ type: ON_USER_REMOVE_ERROR }));
    };
}
