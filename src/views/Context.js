import React from 'react';

import UserList from 'components/context';
import { H1 } from 'components/common/Text';
import { ButtonGrid } from 'components/common/Button';
import { CodeBlockButton } from 'components/common/CodeBlock';
import RenderingList from 'components/common/RenderingList';
import MountToggle from 'components/common/MountToggle';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';

export default function ContextView() {
    return (
        <>
            <H1>Context</H1>

            <ButtonGrid>
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
                <CodeBlockButton
                    text='UsersWrapper.js'
                    fileName='components/context/UsersWrapper.js'
                />
            </ButtonGrid>
            <br />

            <MountToggle>
                <UserList />
            </MountToggle>

            <FlexContainer>
                <RenderingList />
                <ApiRequests />
            </FlexContainer>
        </>
    );
}
