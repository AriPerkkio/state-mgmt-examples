import React from 'react';
import styled from 'styled-components';

import Button from 'components/common/Button';
import { colorWhite } from 'constants/style-variables';

export const List = styled.ul`
    margin-left: 2.5rem;
    margin-bottom: 1rem;
`;

const StyledLi = styled.li`
    color: ${colorWhite};
    font-size: 2rem;
`;

const RemoveButton = styled(Button)`
    padding: 0.5rem;
    line-height: 0.5;
    margin-left: 1.5rem;
`;

export const ListItem = ({ onRemove, children, ...props }) => (
    <StyledLi {...props}>
        {children}
        {onRemove && <RemoveButton onClick={onRemove}>X</RemoveButton>}
    </StyledLi>
);
