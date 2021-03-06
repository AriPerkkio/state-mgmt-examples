import React from 'react';
import { useValues } from 'kea';

import logic from './logic';
import { Loader, Error } from 'components/common/Indicators';
import { useRenderTracking } from 'hooks';

export default function UserIndicators() {
    useRenderTracking('UserIndicators');
    const { isRemoving, errorRemoving, isAdding, errorAdding } = useValues(
        logic
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
