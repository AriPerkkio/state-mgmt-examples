import React, { useContext } from 'react';

import { UserStateContext, ADDING_MASK } from './UserContext';
import { useUserMethods } from './useUserMethods';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { useRenderTracking } from 'hooks';

export default function UserInput() {
    useRenderTracking('UserInput');
    const { isAdding } = useContext(UserStateContext, ADDING_MASK);
    const { add } = useUserMethods();

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
