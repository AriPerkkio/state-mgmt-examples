import React, { useReducer, useEffect } from 'react';

import RenderStore from './RenderStore';
import { H3 } from 'components/common/Text';
import { List, ListItem } from '../List';

const MAX_LIST_COUNT = 10;

export default function RenderingList() {
    const [, forceRender] = useReducer(s => s + 1, 0);

    useEffect(() => {
        RenderStore.subscribe(forceRender);

        return () => RenderStore.unSubscribe(forceRender);
    }, []);

    const renderers = RenderStore.getRenders();
    const count = renderers.length;
    const displayCount = count > MAX_LIST_COUNT ? count - MAX_LIST_COUNT : 0;

    return (
        <div>
            <H3
                onClick={RenderStore.clearRenders}
                style={{ cursor: 'pointer' }}>
                Renders, click to reset
            </H3>
            <List>
                {count > MAX_LIST_COUNT && <ListItem>...</ListItem>}
                {renderers.slice(displayCount).map((renderer, key) => (
                    <ListItem key={key}>{renderer}</ListItem>
                ))}
            </List>
        </div>
    );
}
