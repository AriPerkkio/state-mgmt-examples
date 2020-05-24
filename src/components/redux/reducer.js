import {
    ON_USERS_LOAD_START,
    ON_USERS_LOAD_SUCCESS,
    ON_USERS_LOAD_ERROR,
    ON_USER_ADD_START,
    ON_USER_ADD_SUCCESS,
    ON_USER_ADD_ERROR,
    ON_USER_REMOVE_START,
    ON_USER_REMOVE_SUCCESS,
    ON_USER_REMOVE_ERROR,
} from './actions';

const initialState = {
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
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ON_USERS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                hasLoaded: true,
            };

        case ON_USERS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.users,
            };

        case ON_USERS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
            };

        case ON_USER_ADD_START:
            return {
                ...state,
                isAdding: true,
                errorAdding: false,
            };

        case ON_USER_ADD_SUCCESS:
            return {
                ...state,
                isAdding: false,
                users: [...state.users, action.user],
            };

        case ON_USER_ADD_ERROR:
            return {
                ...state,
                isAdding: false,
                errorAdding: true,
            };

        case ON_USER_REMOVE_START:
            return {
                ...state,
                isRemoving: true,
                errorRemoving: false,
            };

        case ON_USER_REMOVE_SUCCESS:
            return {
                ...state,
                users: state.users.filter(_user => _user.id !== action.user.id),
                isRemoving: false,
            };

        case ON_USER_REMOVE_ERROR:
            return {
                ...state,
                isRemoving: false,
                errorRemoving: true,
            };

        default:
            return state;
    }
}
