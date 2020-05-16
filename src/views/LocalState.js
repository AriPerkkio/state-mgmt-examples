import React from 'react';

import UserList from 'components/local-state';
import { H1 } from 'components/common/Text';
import { ApiRequests } from 'api';
import { CodeBlockButton } from 'components/common/CodeBlock';

export default function LocalStateView() {
    return (
        <>
            <H1>Local State</H1>

            <CodeBlockButton
                text='reducer.js'
                fileName='components/local-state/reducer.js'
            />
            <CodeBlockButton
                text='useUsers.js'
                fileName='components/local-state/useUsers.js'
            />
            <CodeBlockButton
                text='UserList.js'
                fileName='components/local-state/UserList.js'
            />

            <UserList />
            <ApiRequests />
        </>
    );
}
