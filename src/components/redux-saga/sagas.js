import { all, call, put, takeLeading } from 'redux-saga/effects';
import Api from 'api';

import {
    ON_USERS_LOAD_START,
    ON_USERS_LOAD_SUCCESS,
    ON_USERS_LOAD_ERROR,
    ON_USER_ADD_START,
    ON_USER_ADD_SUCCESS,
    ON_USER_ADD_ERROR,
    ON_USER_REMOVE_START,
    ON_USER_REMOVE_SUCCESS,
    ON_USER_REMOVE_ERROR,
} from './actions';

function* loadUsers() {
    try {
        const users = yield call(Api.getUsers);
        yield put({ type: ON_USERS_LOAD_SUCCESS, users });
    } catch (e) {
        yield put({ type: ON_USERS_LOAD_ERROR });
    }
}

function* addUser(action) {
    try {
        const user = yield call(Api.addUser, action.user.name);
        yield put({ type: ON_USER_ADD_SUCCESS, user });
    } catch (e) {
        yield put({ type: ON_USER_ADD_ERROR });
    }
}

function* removeUser(action) {
    try {
        yield call(Api.removeUser, action.user);
        yield put({ type: ON_USER_REMOVE_SUCCESS, user: action.user });
    } catch (e) {
        yield put({ type: ON_USER_REMOVE_ERROR });
    }
}

function* loadUsersSaga() {
    yield takeLeading(ON_USERS_LOAD_START, loadUsers);
}

function* addUsersSaga() {
    yield takeLeading(ON_USER_ADD_START, addUser);
}

function* removeUsersSaga() {
    yield takeLeading(ON_USER_REMOVE_START, removeUser);
}

export default function* rootSaga() {
    yield all([loadUsersSaga(), addUsersSaga(), removeUsersSaga()]);
}
