import React from 'react';
import { useDispatch } from 'react-redux';

import { ListItem } from 'components/common/List';
import { useRenderTracking } from 'hooks';
import { ON_USER_REMOVE_START } from './actions';

export default React.memo(function UserItem({ name, id }) {
    useRenderTracking(`UserItem: ${name}`);
    const dispatch = useDispatch();

    const onRemove = () => {
        dispatch({ type: ON_USER_REMOVE_START, user: { name, id } });
    };

    return <ListItem onRemove={onRemove}>{name}</ListItem>;
});
