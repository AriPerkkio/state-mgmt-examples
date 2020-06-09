import React from 'react';

import UserList from 'components/kea';
import RenderingList from 'components/common/RenderingList';
import { H1 } from 'components/common/Text';
import { ButtonGrid } from 'components/common/Button';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';

export default function KeaView() {
    return (
        <>
            <H1>Kea</H1>

            <ButtonGrid>
                <CodeBlockButton
                    text='logic.js'
                    fileName='components/kea/logic.js'
                />
                <CodeBlockButton
                    text='UsersWrapper.js'
                    fileName='components/kea/UsersWrapper.js'
                />
                <CodeBlockButton
                    text='UserList.js'
                    fileName='components/kea/UserList.js'
                />
                <CodeBlockButton
                    text='UserItem.js'
                    fileName='components/kea/UserItem.js'
                />
                <CodeBlockButton
                    text='UserInput.js'
                    fileName='components/kea/UserInput.js'
                />
                <CodeBlockButton
                    text='UserIndicators.js'
                    fileName='components/kea/UserIndicators.js'
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
