import React from 'react';

import { H2 } from 'components/common/Text';
import { useForceRender } from 'hooks';

export default function ChangedBits() {
    useForceRender(100);

    return <H2>Last changed bits: {window.UserContextChangedBits}</H2>;
}
