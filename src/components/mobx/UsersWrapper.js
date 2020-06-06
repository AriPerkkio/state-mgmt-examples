import React from 'react';

import { UserStoreProvider } from './UserStoreContext';
import UserList from './UserList';
import UserIndicators from './UserIndicators';
import UserInput from './UserInput';

export default function UsersWrapper() {
    return (
        <UserStoreProvider>
            <UserList />
            <UserIndicators />
            <UserInput />
        </UserStoreProvider>
    );
}
