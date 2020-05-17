import React, { useReducer } from 'react';

import Button from 'components/common/Button';

export default function MountToggle({ initiallyMounted, children }) {
    const [mounted, toggleMounted] = useReducer(s => !s, !!initiallyMounted);

    return (
        <>
            <Button onClick={toggleMounted}>
                {mounted ? 'Unmount' : 'Mount'}
            </Button>

            {mounted && children}
        </>
    );
}
