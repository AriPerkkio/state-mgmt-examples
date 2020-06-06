import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react';

import UserStore from './UserStore';

const UserStoreContext = createContext(null);

export const UserStoreProvider = ({ children }) => {
    const store = useLocalStore(() => new UserStore());

    return (
        <UserStoreContext.Provider value={store}>
            {children}
        </UserStoreContext.Provider>
    );
};

export default UserStoreContext;
