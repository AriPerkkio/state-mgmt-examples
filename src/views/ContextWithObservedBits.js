import React from 'react';

import UserList from 'components/context-observed-bits';
import ChangedBits from 'components/context-observed-bits/ChangedBits';
import RenderingList from 'components/common/RenderingList';
import { H1 } from 'components/common/Text';
import { ButtonGrid } from 'components/common/Button';
import { CodeBlockButton } from 'components/common/CodeBlock';
import MountToggle from 'components/common/MountToggle';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';

export default function ContextObservedBitsView() {
    return (
        <>
            <H1>Context with Observed bits</H1>

            <ButtonGrid>
                <CodeBlockButton
                    text='UserContext.js'
                    fileName='components/context-observed-bits/UserContext.js'
                />
                <CodeBlockButton
                    text='UserInput.js'
                    fileName='components/context-observed-bits/UserInput.js'
                />
                <CodeBlockButton
                    text='UserItem.js'
                    fileName='components/context-observed-bits/UserItem.js'
                />
                <CodeBlockButton
                    text='UserIndicators.js'
                    fileName='components/context-observed-bits/UserIndicators.js'
                />
                <CodeBlockButton
                    text='UserList.js'
                    fileName='components/context-observed-bits/UserList.js'
                />
                <CodeBlockButton
                    text='UsersWrapper.js'
                    fileName='components/context-observed-bits/UsersWrapper.js'
                />
            </ButtonGrid>

            <MountToggle>
                <ChangedBits />
                <UserList />
            </MountToggle>

            <FlexContainer>
                <RenderingList />
                <ApiRequests />
            </FlexContainer>
        </>
    );
}
