import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import UserList from './UserList';
import UserInput from './UserInput';
import UserIndicators from './UserIndicators';
import { useRenderTracking } from 'hooks';

const store = createStore(reducer, applyMiddleware(thunk));

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
