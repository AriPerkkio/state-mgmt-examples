import React, { useState, useEffect } from 'react';

import Button from 'components/common/Button';
import CacheStore from 'utils/cache-store';

const CacheReset = () => {
    const [cacheCount, setCacheCount] = useState(0);

    useEffect(() => {
        CacheStore.subscribeCaches(setCacheCount);

        return () => {
            CacheStore.unSubscribeCaches(setCacheCount);
        };
    }, []);

    return (
        <div>
            <Button onClick={CacheStore.clearCaches}>
                Reset {cacheCount} resource caches
            </Button>
        </div>
    );
};

export default CacheReset;
