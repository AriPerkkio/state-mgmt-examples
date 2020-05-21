import React, { useContext } from 'react';

import { UserStateContext, INDICATORS_MASK } from './UserContext';
import { Loader, Error } from 'components/common/Indicators';
import { useRenderTracking } from 'hooks';

export default function UserIndicators() {
    useRenderTracking('UserIndicators');
    const { isRemoving, errorRemoving, isAdding, errorAdding } = useContext(
        UserStateContext,
        INDICATORS_MASK
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
