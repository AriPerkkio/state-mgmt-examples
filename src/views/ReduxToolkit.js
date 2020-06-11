import React from 'react';

import UserList from 'components/redux-toolkit';
import RenderingList from 'components/common/RenderingList';
import { H1 } from 'components/common/Text';
import { ButtonGrid } from 'components/common/Button';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';

export default function ReduxToolkitView() {
    return (
        <>
            <H1>Redux Toolkit</H1>

            <ButtonGrid>
                <CodeBlockButton
                    text='UsersSlice.js'
                    fileName='components/redux-toolkit/UsersSlice.js'
                />
                <CodeBlockButton
                    text='UsersWrapper.js'
                    fileName='components/redux-toolkit/UsersWrapper.js'
                />
                <CodeBlockButton
                    text='UserList.js'
                    fileName='components/redux-toolkit/UserList.js'
                />
                <CodeBlockButton
                    text='UserItem.js'
                    fileName='components/redux-toolkit/UserItem.js'
                />
                <CodeBlockButton
                    text='UserInput.js'
                    fileName='components/redux-toolkit/UserInput.js'
                />
                <CodeBlockButton
                    text='UserIndicators.js'
                    fileName='components/redux-toolkit/UserIndicators.js'
                />
            </ButtonGrid>

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
