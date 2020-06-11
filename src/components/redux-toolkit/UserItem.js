import React from 'react';
import { useDispatch } from 'react-redux';

import { removeUser } from './UsersSlice';
import { ListItem } from 'components/common/List';
import { useRenderTracking } from 'hooks';

export default React.memo(function UserItem({ name, id }) {
    useRenderTracking(`UserItem: ${name}`);
    const dispatch = useDispatch();
    const onRemove = () => dispatch(removeUser({ name, id }));

    return <ListItem onRemove={onRemove}>{name}</ListItem>;
});
