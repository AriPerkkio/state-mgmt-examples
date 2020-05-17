import React from 'react';

import { useUserMethods } from './useUserMethods';
import { ListItem } from 'components/common/List';

export default function UserItem({ name, id }) {
    const { remove } = useUserMethods();

    return <ListItem onRemove={() => remove({ id })}>{name}</ListItem>;
}
