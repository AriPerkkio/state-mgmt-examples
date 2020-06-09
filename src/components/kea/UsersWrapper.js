import React from 'react';
import { resetContext, getContext } from 'kea';
import { Provider } from 'react-redux';

import UserList from './UserList';
import UserInput from './UserInput';
import UserIndicators from './UserIndicators';

resetContext();

export default function UsersWrapper() {
    return (
        <Provider store={getContext().store}>
            <UserList />
            <UserInput />
            <UserIndicators />
        </Provider>
    );
}
