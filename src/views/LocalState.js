import React from 'react';

import UserList from 'components/local-state';
import { H1 } from 'components/common/Text';
import { ButtonGrid } from 'components/common/Button';
import { CodeBlockButton } from 'components/common/CodeBlock';
import RenderingList from 'components/common/RenderingList';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';
import MountToggle from 'components/common/MountToggle';

export default function LocalStateView() {
    return (
        <>
            <H1>Local State</H1>

            <ButtonGrid>
                <CodeBlockButton
                    text='reducer.js'
                    fileName='components/local-state/reducer.js'
                />
                <CodeBlockButton
                    text='useUsers.js'
                    fileName='components/local-state/useUsers.js'
                />
                <CodeBlockButton
                    text='UserList.js'
                    fileName='components/local-state/UserList.js'
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
