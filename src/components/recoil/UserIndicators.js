import React from 'react';
import { selector, useRecoilValue } from 'recoil';

import UserState from './UserState';
import { Loader, Error } from 'components/common/Indicators';
import { useRenderTracking } from 'hooks';

const userMutations = selector({
    key: 'userMutations',
    get: ({ get }) => {
        const { isRemoving, errorRemoving, isAdding, errorAdding } = get(
            UserState
        );
        return { isRemoving, errorRemoving, isAdding, errorAdding };
    },
});

export default function UserIndicators() {
    useRenderTracking('UserIndicators');
    const { isRemoving, errorRemoving, isAdding, errorAdding } = useRecoilValue(
        userMutations
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
