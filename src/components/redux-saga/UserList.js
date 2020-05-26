import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import UserItem from './UserItem';
import { Loader, Error } from 'components/common/Indicators';
import { List } from 'components/common/List';
import { useRenderTracking } from 'hooks';
import { ON_USERS_LOAD_START } from './actions';

function UserList({ users, isLoading, shouldFetch, error, dispatch }) {
    useRenderTracking('UserList');
    useEffect(() => {
        if (shouldFetch) {
            dispatch({ type: ON_USERS_LOAD_START });
        }
    }, [shouldFetch, dispatch]);

    if (isLoading || shouldFetch) return <Loader />;
    if (error) return <Error />;

    return (
        <List>
            {users.map(user => (
                <UserItem key={user.id} id={user.id} name={user.name} />
            ))}
        </List>
    );
}

const mapStateToProps = state => ({
    users: state.users,
    isLoading: state.isLoading,
    shouldFetch: !state.isLoading && !state.hasLoaded,
    error: state.error,
});

export default connect(mapStateToProps)(UserList);
