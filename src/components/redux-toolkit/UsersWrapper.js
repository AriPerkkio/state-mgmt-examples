import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './UsersSlice';
import UserList from './UserList';
import UserInput from './UserInput';
import UserIndicators from './UserIndicators';
import { useRenderTracking } from 'hooks';

const store = configureStore({ reducer });

export default function UsersWrapper() {
    useRenderTracking('UserListWrapper');
    return (
        <Provider store={store}>
            <UserList />
            <UserInput />
            <UserIndicators />
        </Provider>
    );
}
