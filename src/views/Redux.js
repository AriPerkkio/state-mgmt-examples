import React from 'react';

import UserList from 'components/redux';
import RenderingList from 'components/common/RenderingList';
import { H1 } from 'components/common/Text';
import { ButtonGrid } from 'components/common/Button';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';

export default function ReduxView() {
    return (
        <>
            <H1>Redux</H1>

            <ButtonGrid>
                <CodeBlockButton
                    text='actions.js'
                    fileName='components/redux/actions.js'
                />
                <CodeBlockButton
                    text='reducer.js'
                    fileName='components/redux/reducer.js'
                />
                <CodeBlockButton
                    text='UsersWrapper.js'
                    fileName='components/redux/UsersWrapper.js'
                />
                <CodeBlockButton
                    text='UserList.js'
                    fileName='components/redux/UserList.js'
                />
                <CodeBlockButton
                    text='UserInput.js'
                    fileName='components/redux/UserInput.js'
                />
                <CodeBlockButton
                    text='UserItem.js'
                    fileName='components/redux/UserItem.js'
                />
                <CodeBlockButton
                    text='UserIndicators.js'
                    fileName='components/redux/UserIndicators.js'
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
