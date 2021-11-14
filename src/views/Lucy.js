import React from 'react';

import UserList from 'components/lucy';
import { H1 } from 'components/common/Text';
import { ButtonGrid } from 'components/common/Button';
import { CodeBlockButton } from 'components/common/CodeBlock';
import RenderingList from 'components/common/RenderingList';
import MountToggle from 'components/common/MountToggle';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';

export default function XStateView() {
    return (
        <>
            <H1>Lucy</H1>

            <ButtonGrid>
                <CodeBlockButton
                    text='user-list.lucy'
                    fileName='components/lucy/user-list.lucy'
                />
                <CodeBlockButton
                    text='useUsers.js'
                    fileName='components/lucy/useUsers.js'
                />
                <CodeBlockButton
                    text='UserList.js'
                    fileName='components/lucy/UserList.js'
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
