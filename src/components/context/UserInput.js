import React from 'react';

import { useUserMethods } from './useUserMethods';
import { useUsers } from './useUsers';
import Button from 'components/common/Button';
import Input from 'components/common/Input';

export default function UserInput() {
    const { isAdding } = useUsers();
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
