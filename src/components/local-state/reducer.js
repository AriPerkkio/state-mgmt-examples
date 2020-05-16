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
    isAddingUser: false,
    userAddingError: false,
    isRemovingUser: false,
    userRemovingError: false,
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
                isAddingUser: true,
                userAddingError: false,
            };

        case ON_ADD_SUCCESS.type:
            return {
                ...state,
                isAddingUser: false,
                users: [...state.users, action.user],
            };

        case ON_ADD_ERROR.type:
            return {
                ...state,
                isAddingUser: false,
                userAddingError: true,
            };

        case ON_REMOVE_START.type:
            return {
                ...state,
                isRemovingUser: true,
                userRemovingError: false,
            };

        case ON_REMOVE_SUCCESS.type:
            return {
                ...state,
                users: state.users.filter(_user => _user.id !== action.user.id),
                isRemovingUser: false,
            };

        case ON_REMOVE_SUCCESS:
            return {
                ...state,
                isRemovingUser: false,
                userRemovingError: true,
            };

        default:
            return state;
    }
}
