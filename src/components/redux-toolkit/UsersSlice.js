import { createSlice } from '@reduxjs/toolkit';

import Api from 'api';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false,
        hasLoaded: false,
        error: false,

        // ADD states
        isAdding: false,
        errorAdding: false,

        // REMOVE state
        isRemoving: false,
        errorRemoving: false,
    },
    reducers: {
        setLoading(state) {
            state.isLoading = true;
            state.error = false;
        },
        setUsers(state, action) {
            state.isLoading = false;
            state.hasLoaded = true;
            state.users = action.payload;
        },
        setError(state) {
            state.isLoading = false;
            state.hasLoaded = true;
            state.error = true;
        },

        // ADD reducers
        setAdding(state) {
            state.isAdding = true;
            state.errorAdding = false;
        },
        addUser(state, action) {
            state.isAdding = false;
            state.users.push(action.payload);
        },
        setAddingError(state) {
            state.isAdding = false;
            state.errorAdding = true;
        },

        // REMOVE reducers
        setRemoving(state) {
            state.isRemoving = true;
            state.errorRemoving = false;
        },
        removeUser(state, action) {
            state.isRemoving = false;
            state.users = state.users.filter(
                user => user.id !== action.payload.id
            );
        },
        setRemovingError(state) {
            state.isRemoving = false;
            state.errorRemoving = true;
        },
    },
});

const {
    setLoading,
    setUsers,
    setError,
    setAdding,
    addUser: addUserAction,
    setAddingError,
    setRemoving,
    removeUser: removeUserAction,
    setRemovingError,
} = usersSlice.actions;

export const loadUsers = () => dispatch => {
    dispatch(setLoading());

    Api.getUsers()
        .then(users => dispatch(setUsers(users)))
        .catch(() => dispatch(setError()));
};

export const addUser = name => dispatch => {
    dispatch(setAdding());

    Api.addUser(name)
        .then(user => dispatch(addUserAction(user)))
        .catch(() => dispatch(setAddingError()));
};

export const removeUser = user => dispatch => {
    dispatch(setRemoving());

    Api.removeUser(user)
        .then(() => dispatch(removeUserAction(user)))
        .catch(() => dispatch(setRemovingError()));
};

export default usersSlice.reducer;
