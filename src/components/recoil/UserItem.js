import React from 'react';
import { selector, useSetRecoilState } from 'recoil';

import { ListItem } from 'components/common/List';
import UserState from './UserState';
import reducer, {
    ON_REMOVE_START,
    ON_REMOVE_SUCCESS,
    ON_REMOVE_ERROR,
} from './reducer';
import { useRenderTracking } from 'hooks';
import Api from 'api';

const userRemove = selector({
    key: 'userRemove',
    set: ({ set }, action) => {
        set(UserState, state => reducer(state, action));
    },
});

export default React.memo(function UserItem({ name, id }) {
    useRenderTracking(`UserItem: (${name})`);
    const dispatch = useSetRecoilState(userRemove);

    const remove = user => {
        dispatch(ON_REMOVE_START);

        Api.removeUser(user)
            .then(() => dispatch({ ...ON_REMOVE_SUCCESS, user }))
            .catch(() => dispatch(ON_REMOVE_ERROR));
    };

    return <ListItem onRemove={() => remove({ id })}>{name}</ListItem>;
});
