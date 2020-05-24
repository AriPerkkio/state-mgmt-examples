import React from 'react';
import { useRecoilState, selector } from 'recoil';

import UserState from './UserState';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { useRenderTracking } from 'hooks';
import reducer, { ON_ADD_START, ON_ADD_SUCCESS, ON_ADD_ERROR } from './reducer';
import Api from 'api';

const UsersAdd = selector({
    key: 'UsersAdd',
    get: ({ get }) => get(UserState).isAdding,
    set: ({ set }, action) => {
        set(UserState, state => reducer(state, action));
    },
});

export default function UserInput() {
    useRenderTracking('UserInput');
    const [isAdding, dispatch] = useRecoilState(UsersAdd);

    const addUser = name => {
        dispatch(ON_ADD_START);

        Api.addUser(name)
            .then(user => dispatch({ ...ON_ADD_SUCCESS, user }))
            .catch(() => dispatch(ON_ADD_ERROR));
    };

    return (
        <Input disabled={isAdding}>
            {name => (
                <Button disabled={isAdding} onClick={() => addUser(name)}>
                    Add user
                </Button>
            )}
        </Input>
    );
}
