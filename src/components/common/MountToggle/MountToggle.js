import React, { useReducer } from 'react';

import Button from 'components/common/Button';

const MountToggle = ({ initiallyMounted, children }) => {
    const [mounted, toggleMounted] = useReducer(s => !s, !!initiallyMounted);

    return (
        <>
            <Button onClick={toggleMounted}>
                {mounted ? 'Unmount' : 'Mount'}
            </Button>

            {mounted && children}
        </>
    );
};

export default MountToggle;
