import React from 'react';

import { useUsers } from './useUsers';
import { Loader, Error } from 'components/common/Indicators';

export default function UserIndicators() {
    const { isRemoving, errorRemoving, isAdding, errorAdding } = useUsers();

    return (
        <>
            {isRemoving && <Loader>Removing user...</Loader>}
            {errorRemoving && <Error>Failed to remove user</Error>}

            {isAdding && <Loader>Adding user...</Loader>}
            {errorAdding && <Error>Failed to add user</Error>}
        </>
    );
}
