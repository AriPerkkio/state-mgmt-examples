import React from 'react';
import { useActions } from 'kea';

import logic from './logic';
import { ListItem } from 'components/common/List';
import { useRenderTracking } from 'hooks';

export default React.memo(function UserItem({ name, id }) {
    useRenderTracking(`UserItem: ${name}`);
    const { remove } = useActions(logic);

    return <ListItem onRemove={() => remove({ name, id })}>{name}</ListItem>;
});
