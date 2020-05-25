import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import UserItem from './UserItem';
import { Loader, Error } from 'components/common/Indicators';
import { List } from 'components/common/List';
import { useRenderTracking } from 'hooks';
import { setUsersLoading, setUsersLoaded, setUsersError } from './actions';
import Api from 'api';

function UserList({
    users,
    isLoading,
    shouldFetch,
    error,
    setLoading,
    setUsers,
    setUsersError,
}) {
    useRenderTracking('UserList');
    useEffect(() => {
        if (shouldFetch) {
            setLoading();

            Api.getUsers()
                .then(users => setUsers(users))
                .catch(() => setUsersError());
        }
    }, [shouldFetch, setLoading, setUsers, setUsersError]);

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

const mapDispatchToProps = dispatch => ({
    setLoading: () => dispatch(setUsersLoading()),
    setUsers: users => dispatch(setUsersLoaded(users)),
    setUsersError: () => dispatch(setUsersError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
