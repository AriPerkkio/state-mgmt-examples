import React from 'react';

import UserList from 'components/redux-saga';
import RenderingList from 'components/common/RenderingList';
import { H1 } from 'components/common/Text';
import { ButtonGrid } from 'components/common/Button';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';

export default function ReduxSagaView() {
    return (
        <>
            <H1>Redux Saga</H1>

            <ButtonGrid>
                <CodeBlockButton
                    text='sagas.js'
                    fileName='components/redux-saga/sagas.js'
                />
                <CodeBlockButton
                    text='actions.js'
                    fileName='components/redux-saga/actions.js'
                />
                <CodeBlockButton
                    text='reducer.js'
                    fileName='components/redux-saga/reducer.js'
                />
                <CodeBlockButton
                    text='UsersWrapper.js'
                    fileName='components/redux-saga/UsersWrapper.js'
                />
                <CodeBlockButton
                    text='UserList.js'
                    fileName='components/redux-saga/UserList.js'
                />
                <CodeBlockButton
                    text='UserInput.js'
                    fileName='components/redux-saga/UserInput.js'
                />
                <CodeBlockButton
                    text='UserItem.js'
                    fileName='components/redux-saga/UserItem.js'
                />
                <CodeBlockButton
                    text='UserIndicators.js'
                    fileName='components/redux-saga/UserIndicators.js'
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
