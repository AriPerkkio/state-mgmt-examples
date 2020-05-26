import React from 'react';

import UserList from 'components/redux-thunk';
import RenderingList from 'components/common/RenderingList';
import { H1 } from 'components/common/Text';
import { ButtonGrid } from 'components/common/Button';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';

export default function ReduxThunkView() {
    return (
        <>
            <H1>Redux Thunk</H1>

            <ButtonGrid>
                <CodeBlockButton
                    text='actions.js'
                    fileName='components/redux-thunk/actions.js'
                />
                <CodeBlockButton
                    text='reducer.js'
                    fileName='components/redux-thunk/reducer.js'
                />
                <CodeBlockButton
                    text='UsersWrapper.js'
                    fileName='components/redux-thunk/UsersWrapper.js'
                />
                <CodeBlockButton
                    text='UserList.js'
                    fileName='components/redux-thunk/UserList.js'
                />
                <CodeBlockButton
                    text='UserInput.js'
                    fileName='components/redux-thunk/UserInput.js'
                />
                <CodeBlockButton
                    text='UserItem.js'
                    fileName='components/redux-thunk/UserItem.js'
                />
                <CodeBlockButton
                    text='UserIndicators.js'
                    fileName='components/redux-thunk/UserIndicators.js'
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
