import { useLayoutEffect } from 'react';

import { RenderStore } from 'components/common/RenderingList';

export default function useRenderTracking(componentName) {
    useLayoutEffect(
        () => {
            RenderStore.addRender(componentName);
        }
        /* No dependencies -> run effect on each render */
    );
}
