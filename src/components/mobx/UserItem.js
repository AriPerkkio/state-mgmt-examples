import React from 'react';

import { useUserStore } from './useUserStore';
import { ListItem } from 'components/common/List';
import { useRenderTracking } from 'hooks';
import Api from 'api';

export default React.memo(function UserItem({ name, id }) {
    useRenderTracking(`UserItem: ${name}`);
    const userStore = useUserStore();

    const remove = () => {
        userStore.setRemoving();

        Api.removeUser({ name, id })
            .then(() => userStore.remove({ name, id }))
            .catch(() => userStore.setAddingError());
    };

    return <ListItem onRemove={remove}>{name}</ListItem>;
});
