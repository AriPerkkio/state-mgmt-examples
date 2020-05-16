import React from 'react';
import styled from 'styled-components';

import { colorRed, colorYellow } from 'constants/style-variables';

const Indicator = styled.div`
    font-size: 2.5rem;
    font-weight: 500;
    color: ${props => (props.role === 'error' ? colorRed : colorYellow)};
    margin: 1rem;
`;

export const Loader = ({ children, ...props }) => (
    <Indicator {...props} role='status'>
        {children || 'Loading...'}
    </Indicator>
);

export const Error = ({ children, ...props }) => (
    <Indicator {...props} role='error'>
        {children || 'Error'}
    </Indicator>
);
