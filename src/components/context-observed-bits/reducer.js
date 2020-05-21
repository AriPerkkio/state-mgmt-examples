export const ON_LOAD = { type: 'ON_LOAD' };
export const ON_SUCCESS = { type: 'ON_SUCCESS' };
export const ON_ERROR = { type: 'ON_ERROR' };

export const ON_ADD_START = { type: 'ON_ADD_START' };
export const ON_ADD_SUCCESS = { type: 'ON_ADD_SUCCESS' };
export const ON_ADD_ERROR = { type: 'ON_ADD_ERROR' };

export const ON_REMOVE_START = { type: 'ON_REMOVE_START' };
export const ON_REMOVE_SUCCESS = { type: 'ON_REMOVE_SUCCESS' };
export const ON_REMOVE_ERROR = { type: 'ON_REMOVE_ERROR' };

export const initialState = {
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

export default function reducer(state, action) {
    switch (action.type) {
        case ON_LOAD.type:
            return {
                ...state,
                isLoading: true,
                hasLoaded: true,
            };

        case ON_SUCCESS.type:
            return {
                ...state,
                isLoading: false,
                users: action.users,
            };

        case ON_ERROR.type:
            return {
                ...state,
                isLoading: false,
                error: true,
            };

        case ON_ADD_START.type:
            return {
                ...state,
                isAdding: true,
                errorAdding: false,
            };

        case ON_ADD_SUCCESS.type:
            return {
                ...state,
                isAdding: false,
                users: [...state.users, action.user],
            };

        case ON_ADD_ERROR.type:
            return {
                ...state,
                isAdding: false,
                errorAdding: true,
            };

        case ON_REMOVE_START.type:
            return {
                ...state,
                isRemoving: true,
                errorRemoving: false,
            };

        case ON_REMOVE_SUCCESS.type:
            return {
                ...state,
                users: state.users.filter(_user => _user.id !== action.user.id),
                isRemoving: false,
            };

        case ON_REMOVE_SUCCESS:
            return {
                ...state,
                isRemoving: false,
                errorRemoving: true,
            };

        default:
            return state;
    }
}
