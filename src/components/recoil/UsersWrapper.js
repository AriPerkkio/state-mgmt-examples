import React from 'react';
import { RecoilRoot } from 'recoil';

import UserList from './UserList';
import UserInput from './UserInput';
import UserIndicators from './UserIndicators';
import { useRenderTracking } from 'hooks';

/* code-block-hidden start */
// Errors in console, https://github.com/facebookexperimental/Recoil/issues/12
const consoleerror = console.error;
function onError(message, ...args) {
    if (/Cannot update a component/.test(message)) return;

    return consoleerror(message, ...args);
}
console.error = onError;
/* code-block-hidden end */

export default function UsersWrapper() {
    useRenderTracking('UserListWrapper');
    return (
        <RecoilRoot>
            <UserList />
            <UserInput />
            <UserIndicators />
        </RecoilRoot>
    );
}
