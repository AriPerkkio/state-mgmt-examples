export const ON_USERS_LOAD_START = 'ON_USERS_LOAD_START';
export const ON_USERS_LOAD_SUCCESS = 'ON_USERS_LOAD_SUCCESS';
export const ON_USERS_LOAD_ERROR = 'ON_USERS_LOAD_ERROR';

export const ON_USER_ADD_START = 'ON_USER_ADD_START';
export const ON_USER_ADD_SUCCESS = 'ON_USER_ADD_SUCCESS';
export const ON_USER_ADD_ERROR = 'ON_USER_ADD_ERROR';

export const ON_USER_REMOVE_START = 'ON_USER_REMOVE_START';
export const ON_USER_REMOVE_SUCCESS = 'ON_USER_REMOVE_SUCCESS';
export const ON_USER_REMOVE_ERROR = 'ON_USER_REMOVE_ERROR';

export const setUsersLoading = () => ({ type: ON_USERS_LOAD_START });
export const setUsersLoaded = users => ({ type: ON_USERS_LOAD_SUCCESS, users });
export const setUsersError = () => ({ type: ON_USERS_LOAD_ERROR });

export const setUserAdding = () => ({ type: ON_USER_ADD_START });
export const setUserAdded = user => ({ type: ON_USER_ADD_SUCCESS, user });
export const setUserAddError = () => ({ type: ON_USER_ADD_ERROR });

export const setUserRemoving = () => ({ type: ON_USER_REMOVE_START });
export const setUserRemoved = user => ({ type: ON_USER_REMOVE_SUCCESS, user });
export const setUserRemoveError = () => ({ type: ON_USER_REMOVE_ERROR });
