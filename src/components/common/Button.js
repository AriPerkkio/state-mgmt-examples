import styled from 'styled-components';

import { colorWhite } from 'constants/style-variables';

const Button = styled.button`
    cursor: pointer;
    color: ${colorWhite};
    background-color: rgba(20, 100, 150, 1);
    border: 0;
    outline: 0;
    border-radius: 1rem;
    padding: 0.5rem 1.5rem;
    box-shadow: 0 0 1rem black;
    margin: 2rem 1rem;

    & + & {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }

    &:last-child {
        margin-right: 0;
    }
`;

export default Button;
