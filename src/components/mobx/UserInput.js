import React from 'react';
import { observer } from 'mobx-react';

import { useUserStore } from './useUserStore';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { useRenderTracking } from 'hooks';
import Api from 'api';

export default observer(() => {
    useRenderTracking('UserInput');
    const userStore = useUserStore();

    const add = name => {
        userStore.setAdding();

        Api.addUser(name)
            .then(user => userStore.add(user))
            .catch(() => userStore.setAddingError());
    };

    return (
        <Input disabled={userStore.isAdding}>
            {name => (
                <Button disabled={userStore.isAdding} onClick={() => add(name)}>
                    Add user
                </Button>
            )}
        </Input>
    );
});
