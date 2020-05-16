import React from 'react';

import Api from './Api';
import { H3 } from 'components/common/Text';
import { List, ListItem } from 'components/common/List';
import { useForceRender } from 'hooks';

const MAX_LIST_COUNT = 10;

const ApiSubscribers = () => {
    useForceRender(500);

    return <h3>Api subscribers count: {Api.subscribers.length}</h3>;
};

const ApiRequests = () => {
    useForceRender(500);

    const count = Api.requests.length;
    const displayCount = count > MAX_LIST_COUNT ? count - MAX_LIST_COUNT : 0;

    return (
        <section>
            <H3
                onClick={() => (Api.requests = [])}
                style={{ cursor: 'pointer' }}>
                API requests, click to reset
            </H3>
            <List>
                {count > MAX_LIST_COUNT && <ListItem>...</ListItem>}
                {Api.requests.slice(displayCount).map((url, key) => (
                    <ListItem key={key}>{url}</ListItem>
                ))}
            </List>
        </section>
    );
};

export default ApiSubscribers;
export { ApiRequests };
