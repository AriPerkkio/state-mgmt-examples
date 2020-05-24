import React from 'react';

import UserList from 'components/recoil';
import RenderingList from 'components/common/RenderingList';
import { H1, BodyText } from 'components/common/Text';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';

export default function RecoilView() {
    return (
        <>
            <H1>Recoil</H1>
            <CodeBlockButton
                text='UserState.js'
                fileName='components/recoil/UserState.js'
            />
            <CodeBlockButton
                text='UsersWrapper.js'
                fileName='components/recoil/UsersWrapper.js'
            />
            <CodeBlockButton
                text='UserList.js'
                fileName='components/recoil/UserList.js'
            />
            <br />
            <CodeBlockButton
                text='UserInput.js'
                fileName='components/recoil/UserInput.js'
            />
            <CodeBlockButton
                text='UserIndicators.js'
                fileName='components/recoil/UserIndicators.js'
            />

            <br />
            <MountToggle>
                <UserList />
            </MountToggle>

            <BodyText>
                Having all the state in a single atom causes all selector
                subscribers to rerender on state change.{' '}
                <a href='https://github.com/facebookexperimental/Recoil/issues/139'>
                    Issues #139
                </a>
            </BodyText>

            <FlexContainer>
                <RenderingList />
                <ApiRequests />
            </FlexContainer>
        </>
    );
}
