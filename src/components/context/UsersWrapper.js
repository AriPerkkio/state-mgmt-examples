import React from 'react';

import UserList from './UserList';
import UserInput from './UserInput';
import UserIndicators from './UserIndicators';
import { UserProvider } from './UserContext';

export default function UserListWrapper() {
    return (
        <UserProvider>
            <UserList />
            <UserInput />
            <UserIndicators />
        </UserProvider>
    );
}
