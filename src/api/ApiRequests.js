import React, { useReducer, useEffect } from 'react';

import Api from './Api';
import { H3 } from 'components/common/Text';
import { List, ListItem } from 'components/common/List';

const MAX_LIST_COUNT = 10;

export default function ApiRequests() {
    const [, forceRender] = useReducer(s => s + 1, 0);

    useEffect(() => {
        Api.subscribe(forceRender);
        return () => {
            Api.unSubscribe(forceRender);
            Api.clearRequests();
        };
    }, []);

    const count = Api.requests.length;
    const displayCount = count > MAX_LIST_COUNT ? count - MAX_LIST_COUNT : 0;

    return (
        <section>
            <H3 onClick={Api.clearRequests} style={{ cursor: 'pointer' }}>
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
}
