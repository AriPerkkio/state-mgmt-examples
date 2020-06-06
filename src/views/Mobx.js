import React from 'react';

import UserList from 'components/mobx';
import RenderingList from 'components/common/RenderingList';
import { H1 } from 'components/common/Text';
import { ButtonGrid } from 'components/common/Button';
import MountToggle from 'components/common/MountToggle';
import { CodeBlockButton } from 'components/common/CodeBlock';
import { FlexContainer } from 'components/common/Containers';
import { ApiRequests } from 'api';

export default function MobxView() {
    return (
        <>
            <H1>Mobx</H1>

            <ButtonGrid>
                <CodeBlockButton
                    text='UserStore.js'
                    fileName='components/mobx/UserStore.js'
                />
                <CodeBlockButton
                    text='UserStoreContext.js'
                    fileName='components/mobx/UserStoreContext.js'
                />
                <CodeBlockButton
                    text='useUserStore.js'
                    fileName='components/mobx/useUserStore.js'
                />
                <CodeBlockButton
                    text='UsersWrapper.js'
                    fileName='components/mobx/UsersWrapper.js'
                />
                <CodeBlockButton
                    text='UserList.js'
                    fileName='components/mobx/UserList.js'
                />
                <CodeBlockButton
                    text='UserItem.js'
                    fileName='components/mobx/UserItem.js'
                />
                <CodeBlockButton
                    text='UserIndicators.js'
                    fileName='components/mobx/UserIndicators.js'
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
