import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { ON_USER_ADD_START } from './actions';
import { useRenderTracking } from 'hooks';

export default function UserInput() {
    useRenderTracking('UserInput');
    const isAdding = useSelector(state => state.isAdding);
    const dispatch = useDispatch();

    const add = name => {
        dispatch({ type: ON_USER_ADD_START, user: { name } });
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
