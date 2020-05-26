import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { addUser } from './actions';
import { useRenderTracking } from 'hooks';

export default function UserInput() {
    useRenderTracking('UserInput');
    const isAdding = useSelector(state => state.isAdding);
    const dispatch = useDispatch();

    const add = name => {
        dispatch(addUser(name));
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
