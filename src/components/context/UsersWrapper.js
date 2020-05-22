import React from 'react';

import UserList from './UserList';
import UserInput from './UserInput';
import UserIndicators from './UserIndicators';
import { UserProvider } from './UserContext';
import { useRenderTracking } from 'hooks';

export default function UserListWrapper() {
    useRenderTracking('UserListWrapper');
    return (
        <UserProvider>
            <UserList />
            <UserInput />
            <UserIndicators />
        </UserProvider>
    );
}
