import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { setUserAdding, setUserAdded, setUserAddError } from './actions';
import { useRenderTracking } from 'hooks';
import Api from 'api';

export default function UserInput() {
    useRenderTracking('UserInput');
    const isAdding = useSelector(state => state.isAdding);
    const dispatch = useDispatch();

    const add = name => {
        dispatch(setUserAdding());

        Api.addUser(name)
            .then(user => dispatch(setUserAdded(user)))
            .catch(() => dispatch(setUserAddError()));
    };

    return (
        <Input disabled={isAdding}>
            {name => (
                <Button disabled={isAdding} onClick={() => add(name)}>
                    Add user
                </Button>
            )}
        </Input>
    );
}
