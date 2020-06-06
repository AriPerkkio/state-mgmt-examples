import React from 'react';
import { observer } from 'mobx-react';

import { useUserStore } from './useUserStore';
import { Loader, Error } from 'components/common/Indicators';
import { useRenderTracking } from 'hooks';

export default observer(() => {
    useRenderTracking('UserIndicators');
    const { isRemoving, errorRemoving, isAdding, errorAdding } = useUserStore();

    return (
        <>
            {isRemoving && <Loader>Removing user...</Loader>}
            {errorRemoving && <Error>Failed to remove user</Error>}

            {isAdding && <Loader>Adding user...</Loader>}
            {errorAdding && <Error>Failed to add user</Error>}
        </>
    );
});
