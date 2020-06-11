import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import UserItem from './UserItem';
import { loadUsers } from './UsersSlice';
import { Loader, Error } from 'components/common/Indicators';
import { List } from 'components/common/List';
import { useRenderTracking } from 'hooks';

function UserList({ users, isLoading, shouldFetch, error, loadUsers }) {
    useRenderTracking('UserList');
    useEffect(() => {
        if (shouldFetch) {
            loadUsers();
        }
    }, [shouldFetch, loadUsers]);

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

const mapDispatchToProps = { loadUsers };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
