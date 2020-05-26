import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import UserList from './UserList';
import UserInput from './UserInput';
import UserIndicators from './UserIndicators';
import UserSagas from './sagas';
import { useRenderTracking } from 'hooks';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(UserSagas);

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
