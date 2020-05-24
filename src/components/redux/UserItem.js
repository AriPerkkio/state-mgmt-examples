import React from 'react';
import { useDispatch } from 'react-redux';

import { ListItem } from 'components/common/List';
import { useRenderTracking } from 'hooks';
import { setUserRemoving, setUserRemoved, setUserRemoveError } from './actions';
import Api from 'api';

export default React.memo(function UserItem({ name, id }) {
    useRenderTracking(`UserItem: ${name}`);
    const dispatch = useDispatch();

    const onRemove = () => {
        dispatch(setUserRemoving());

        Api.removeUser({ name, id })
            .then(() => dispatch(setUserRemoved({ name, id })))
            .catch(() => dispatch(setUserRemoveError()));
    };

    return <ListItem onRemove={onRemove}>{name}</ListItem>;
});
