import React from 'react';

import { useUserMethods } from './useUserMethods';
import { ListItem } from 'components/common/List';
import { useRenderTracking } from 'hooks';

export default function UserItem({ name, id }) {
    useRenderTracking(`UserItem: ${name}`);
    const { remove } = useUserMethods();

    return <ListItem onRemove={() => remove({ id })}>{name}</ListItem>;
}
