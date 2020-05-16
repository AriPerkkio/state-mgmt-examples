import styled from 'styled-components';

import { colorWhite } from 'constants/style-variables';

export const FlexContainer = styled.div`
    display: flex;

    & > * + * {
        margin-left: 5rem;
        border-left: 1px dashed ${colorWhite};
        padding-left: 2rem;
    }
`;
