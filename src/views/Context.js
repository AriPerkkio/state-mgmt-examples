import React from 'react';

import UserList from 'components/context';
import { H1 } from 'components/common/Text';
import { CodeBlockButton } from 'components/common/CodeBlock';
import { ApiRequests } from 'api';

export default function ContextView() {
    return (
        <>
            <H1>Context</H1>

            <CodeBlockButton
                text='UserContext.js'
                fileName='components/context/UserContext.js'
            />
            <CodeBlockButton
                text='useUsers.js'
                fileName='components/context/useUsers.js'
            />
            <CodeBlockButton
                text='useUserMethods.js'
                fileName='components/context/useUserMethods.js'
            />
            <CodeBlockButton
                text='reducer.js'
                fileName='components/context/reducer.js'
            />
            <br />

            <CodeBlockButton
                text='UserInput.js'
                fileName='components/context/UserInput.js'
            />
            <CodeBlockButton
                text='UserItem.js'
                fileName='components/context/UserItem.js'
            />
            <CodeBlockButton
                text='UserIndicators.js'
                fileName='components/context/UserIndicators.js'
            />
            <CodeBlockButton
                text='UserList.js'
                fileName='components/context/UserList.js'
            />
            <br />

            <CodeBlockButton
                text='UsersWrapper.js'
                fileName='components/context/UsersWrapper.js'
            />

            <UserList />
            <ApiRequests />
        </>
    );
}
