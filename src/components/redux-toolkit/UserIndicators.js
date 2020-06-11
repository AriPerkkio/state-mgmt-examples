import React from 'react';
import { useSelector } from 'react-redux';

import { Loader, Error } from 'components/common/Indicators';
import { useRenderTracking } from 'hooks';

export default function UserIndicators() {
    useRenderTracking('UserIndicators');
    const { isRemoving, errorRemoving, isAdding, errorAdding } = useSelector(
        state => ({
            isRemoving: state.isRemoving,
            errorRemoving: state.errorRemoving,
            isAdding: state.isAdding,
            errorAdding: state.errorAdding,
        })
    );

    return (
        <>
            {isRemoving && <Loader>Removing user...</Loader>}
            {errorRemoving && <Error>Failed to remove user</Error>}

            {isAdding && <Loader>Adding user...</Loader>}
            {errorAdding && <Error>Failed to add user</Error>}
        </>
    );
}
